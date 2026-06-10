import { useState, useRef, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, LineChart, Line
} from "recharts";
import { COMMODITIES, findCommodity, getAllCommoditiesSummary, buildBotContext, GROQ_MODEL, GROQ_URL } from "./tradeData.js";

// Base system prompt — always sent
const BASE_SYSTEM = `You are TradeChatBot, a Global Trade Intelligence Assistant trained on:

1. ECONOMIC THEORY:
   - Feenstra & Taylor "International Trade" — Ricardian Model, Specific-Factors Model, Heckscher-Ohlin, trade policy, tariffs, quotas, trade agreements
   - Kenneth Reinert "Introduction to International Economics" — absolute/comparative advantage, FDI, international finance, development
   
2. REAL TRADE COMMODITIES & MARKETS:
   - Fine-Aroma Cacao (Ecuador, Peru, Colombia)
   - White Shrimp (Ecuador, Vietnam, India)
   - Bananas (Ecuador, Philippines, Guatemala)
   - Blueberries (Peru, Chile, South Africa)
   - Cut Flowers (Kenya, Ethiopia, Colombia)
   - Specialty Coffee (Colombia, Ethiopia, Kenya)
   - Lithium (Chile, Australia, Argentina)
   - Chocolate & Processed Foods (Ecuador, Belgium, Switzerland)
   - Quinoa (Bolivia, Peru, Ecuador)

ALWAYS respond in English with precision and academic rigor.

Keep responses concise — 2-3 sentences maximum for regular questions. CRITICAL: For ANY dashboard request, respond with ONLY the JSON object — no text before, after, or explanations.

DASHBOARD CAPABILITY — CRITICAL:
When user asks for dashboard, chart, graph, visualization, market analysis, price data, trends, table, historical prices, or analytics of ANY commodity, respond ONLY with this exact JSON (nothing before or after):
Simplify dashboards: use only 1-2 charts max. Add clear labels to all axes. Include 3 bullet-point insights only.

{"type":"dashboard","title":"Title","subtitle":"Description","cards":[{"label":"Metric","value":"XX","unit":"unit","color":"blue|cyan|purple|pink|green"}],"barChart":{"title":"Chart Title","data":[{"name":"Label","value":number}],"unit":"UNIT","color":"#00d4ff"},"lineChart":{"title":"Trend","data":[{"year":"YYYY","value":number}],"unit":"UNIT","color":"#06ffa5"},"radarChart":{"title":"Risk/Factors","labels":["F1","F2","F3","F4","F5"],"values":[n,n,n,n,n]},"table":{"title":"Table Title","columns":["Year","Price","Change"],"rows":[["2023","$5.20","+2.1%"]]},"insights":["insight 1","insight 2","insight 3"],"source":"TradeIQ BOT Dataset"}`;

// Build commodity-specific context
function buildCommodityContext(commodity) {
  if (!commodity) return "";
  const c = commodity.data;
  return `\n\nCOMMODITY ANALYSIS: ${c.name}
Origins: ${c.origin.join(", ")}
Current Price: ${c.market.currentPrice.value} (${c.market.currentPrice.source}) — ${c.market.currentPrice.trend}
Global Demand: ${c.market.demandGrowth}
Volume: ${c.market.volume}
Top Importers: ${c.market.topImporters.join(", ")}

Price Data:
${Object.entries(c.market.priceBySegment || c.market.priceByDestination || c.market.priceByChannel || c.market.priceByOrigin || {})
  .map(([k, v]) => `  ${k}: ${v}`)
  .join("\n")}

Logistics: ${c.logistics.mainPort} → ${c.logistics.mainDestination}
Transit: ${c.logistics.transitTime}

Tariffs:
${Object.entries(c.tariffs).map(([region, rate]) => `  ${region}: ${rate}`).join("\n")}

Key Insights:
${c.marketInsights.slice(0, 5).map(i => `  • ${i}`).join("\n")}

Competitors:
${Object.entries(c.competitors || {}).map(([country, position]) => `  ${country}: ${position}`).join("\n")}`;
}

// Custom Tooltip con labels y valores (como en TRADE_IQ)
function CustomTooltip({ active, payload, label, unit }) {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'rgba(15,23,42,0.95)',
        border: '1px solid rgba(0,212,255,0.3)',
        borderRadius: '6px',
        padding: '8px 12px',
        color: '#e2e8f0',
        fontSize: '13px'
      }}>
        <p style={{ margin: '0 0 4px 0', color: '#00d4ff' }}>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ margin: '2px 0', color: entry.color }}>
            {entry.name}: {entry.value.toLocaleString()} {unit || ''}
          </p>
        ))}
      </div>
    );
  }
  return null;
}

// Table component
function TableView({ data }) {
  return (
    <div className="table-container">
      <div className="table-title">{data.title}</div>
      <table className="data-table">
        <thead>
          <tr>
            {data.columns.map((col, i) => (
              <th key={i}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Dashboard viewer
function DashboardView({ data }) {
  const COLORS = {
    blue: "#00d4ff", cyan: "#06ffa5", purple: "#a855f7",
    pink: "#f472b6", green: "#22c55e"
  };

  const radarData = data.radarChart?.labels?.map((label, i) => ({
    subject: label, value: data.radarChart.values[i]
  })) || [];

  return (
    <div className="dashboard">
      <div className="dash-header">
        <div className="dash-title">{data.title}</div>
        <div className="dash-subtitle">{data.subtitle}</div>
      </div>
      <div className="kpi-grid">
        {data.cards?.map((card, i) => (
          <div className="kpi-card" key={i} style={{ "--accent": COLORS[card.color] || COLORS.blue }}>
            <div className="kpi-val">{card.value}<span className="kpi-unit">{card.unit}</span></div>
            <div className="kpi-label">{card.label}</div>
          </div>
        ))}
      </div>
      <div className="charts-row">
        {data.barChart && (
          <div className="chart-box">
            <div className="chart-title">{data.barChart.title}</div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={data.barChart.data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: "#64748b", fontSize: 11 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fill: "#64748b", fontSize: 11 }} />
                <Tooltip 
                  content={<CustomTooltip unit={data.barChart.unit || ''} />}
                  cursor={{ fill: 'rgba(0,212,255,0.1)' }}
                />
                <Bar 
                  dataKey="value" 
                  fill={data.barChart.color || "#00d4ff"} 
                  radius={[8, 8, 0, 0]}
                  animationDuration={800}
                  animationEasing="ease-out"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
        {data.lineChart && (
          <div className="chart-box">
            <div className="chart-title">{data.lineChart.title}</div>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={data.lineChart.data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="year" 
                  tick={{ fill: "#64748b", fontSize: 11 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fill: "#64748b", fontSize: 11 }} />
                <Tooltip 
                  content={<CustomTooltip unit={data.lineChart.unit || ''} />}
                  cursor={{ stroke: 'rgba(0,212,255,0.2)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke={data.lineChart.color || "#06ffa5"} 
                  strokeWidth={2} 
                  dot={{ fill: data.lineChart.color || "#06ffa5", r: 4 }}
                  animationDuration={800}
                  animationEasing="ease-out"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      {radarData.length > 0 && (
        <div className="chart-box" style={{ marginBottom: 16 }}>
          <div className="chart-title">{data.radarChart.title}</div>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="rgba(255,255,255,0.08)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "#94a3b8", fontSize: 11 }} />
              <Radar dataKey="value" stroke="#a855f7" fill="#a855f7" fillOpacity={0.25} strokeWidth={2} />
              <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(168,85,247,0.3)", borderRadius: 8, color: "#e2e8f0" }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}
      {data.table && (
        <TableView data={data.table} />
      )}
      {data.insights?.length > 0 && (
        <div className="insights-box">
          <div className="insights-title">📚 Trade Intelligence Insights</div>
          {data.insights.map((ins, i) => (
            <div className="insight-item" key={i}>
              <span className="insight-dot">▸</span>
              <span>{ins}</span>
            </div>
          ))}
        </div>
      )}
      <div className="dash-source">{data.source}</div>
    </div>
  );
}

function Message({ msg }) {
  if (msg.role === "user") {
    return (
      <div className="msg user-msg">
        <div className="msg-bubble user-bubble">{msg.content}</div>
      </div>
    );
  }

  let dashData = null;
  try {
    const trimmed = msg.content.trim();
    if (trimmed.startsWith("{") && trimmed.includes('"type":"dashboard"')) {
      dashData = JSON.parse(trimmed);
    }
  } catch (_) {}

  return (
    <div className="msg bot-msg">
      <div className="bot-avatar">T</div>
      <div className="msg-bubble bot-bubble">
        {dashData ? (
          <DashboardView data={dashData} />
        ) : (
          <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.75 }}>{msg.content}</p>
        )}
      </div>
    </div>
  );
}

const SUGGESTIONS = [
  "Dashboard: cacao market",
  "Dashboard: lithium value chain",
  "Coffee prices in Germany",
  "What is comparative advantage?",
  "Banana certification benefits",
  "Red Sea impact on flowers"
];

export default function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Welcome to TradeChatBot — Global Trade Intelligence 🚀

I analyze real trade commodities and economic theory:

📊 COMMODITIES:
• Fine-Aroma Cacao (Ecuador, Peru, Colombia)
• White Shrimp (Ecuador, Vietnam, India)
• Bananas (Ecuador, Philippines, Guatemala)
• Blueberries (Peru, Chile, South Africa)
• Cut Flowers (Kenya, Ethiopia, Colombia)
• Specialty Coffee (Colombia, Ethiopia, Kenya)
• Lithium (Chile, Australia, Argentina)
• Chocolate (Ecuador, Belgium, Switzerland)
• Quinoa (Bolivia, Peru, Ecuador)

📚 THEORY:
• Comparative Advantage & Ricardo's Model
• Heckscher-Ohlin & Factor Endowments
• Trade Policy, Tariffs, Certification
• Value Chains & Vertical Integration

Try:
✓ "Dashboard: cacao market"
✓ "What is comparative advantage?"
✓ "Lithium value chain analysis"
✓ "Coffee market trends"`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text) {
    const userText = text || input.trim();
    if (!userText || loading) return;
    setInput("");

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;

      // Find relevant commodity
      const commodity = findCommodity(userText);
      const commodityContext = buildCommodityContext(commodity);
      const systemPrompt = BASE_SYSTEM + commodityContext;

      const response = await fetch(GROQ_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [
            { role: "system", content: systemPrompt },
            ...newMessages.slice(-6).map((m) => ({
              role: m.role === "assistant" ? "assistant" : "user",
              content: m.content,
            })),
          ],
          temperature: 0.7,
          max_tokens: 300,
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "No response. Please try again.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: "assistant", content: "❌ Connection error. Check your Groq API key in .env" }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <div>
              <div className="logo-title">TradeChatBot — Intelligence Platform</div>
              <div className="logo-sub">9 Global Commodities · Trade Theory · Real Market Data</div>
            </div>
          </div>
          <div className="status-dot" title="Connected to Groq API" />
        </div>
      </header>

      <main className="chat-area">
        {messages.map((msg, i) => (
          <Message key={i} msg={msg} />
        ))}
        {loading && (
          <div className="msg bot-msg">
            <div className="bot-avatar">T</div>
            <div className="msg-bubble bot-bubble typing">
              <span /><span /><span />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </main>

      <div className="suggestions">
        {SUGGESTIONS.map((s) => (
          <button key={s} className="suggestion-btn" onClick={() => sendMessage(s)}>
            {s}
          </button>
        ))}
      </div>

      <footer className="input-area">
        <div className="input-row">
          <input
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
            placeholder="Ask about trade theory, markets, or request a dashboard..."
            disabled={loading}
          />
          <button className="send-btn" onClick={() => sendMessage()} disabled={loading || !input.trim()}>
            {loading ? "..." : "→"}
          </button>
        </div>
        <p className="footer-note">Groq LLaMA 3.3 70B · Smart Context Injection · Trade Intelligence</p>
      </footer>
    </div>
  );
}