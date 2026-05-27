import { useState, useRef, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, LineChart, Line, Legend, PieChart, Pie, Cell
} from "recharts";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";

const SYSTEM_PROMPT = `You are EconBot, an expert AI assistant in International Economics and Globalization, trained on two authoritative textbooks:

1. "International Trade" by Robert C. Feenstra & Alan M. Taylor (3rd Edition)
   - Part 1: Introduction to International Trade (Ch.1: Trade in the Global Economy)
   - Part 2: Patterns of International Trade:
     * Ch.2: Trade and Technology - The Ricardian Model
     * Ch.3: Gains and Losses from Trade - Specific-Factors Model
     * Ch.4: Trade and Resources - Heckscher-Ohlin Model
     * Ch.5: Movement of Labor and Capital between Countries
   - Part 3: New Explanations for International Trade:
     * Ch.6: Increasing Returns to Scale and Monopolistic Competition
     * Ch.7: Offshoring of Goods and Services
   - Part 4: International Trade Policies:
     * Ch.8: Import Tariffs and Quotas Under Perfect Competition
     * Ch.9: Import Tariffs and Quotas Under Imperfect Competition
     * Ch.10: Export Subsidies in Agriculture and High-Technology Industries
     * Ch.11: International Agreements: Trade, Labor, and the Environment

2. "An Introduction to International Economics: New Perspectives on the World Economy" by Kenneth A. Reinert (2nd Edition, Cambridge University Press, 2012)
   - Part I: International Trade (Absolute Advantage, Comparative Advantage, Intra-industry Trade, Trade Policy)
   - Part II: International Production (Foreign Market Entry, FDI, Global Value Chains)
   - Part III: International Finance (Accounting Frameworks, Exchange Rates, IMF)
   - Part IV: International Development (Development Concepts, Trade and Development)

ALWAYS respond in English. Be precise, academic, and cite concepts from these textbooks when relevant.

DASHBOARD CAPABILITY — VERY IMPORTANT:
When a user asks for a dashboard, chart, graph, data visualization, or market analysis of any commodity, country, or trade topic, you MUST respond with a JSON block in this EXACT format (nothing else before or after the JSON):

{"type":"dashboard","title":"Dashboard Title","subtitle":"Brief description","cards":[{"label":"Metric Name","value":"XX","unit":"unit","color":"blue|cyan|purple|pink|green"},...],"barChart":{"title":"Chart Title","data":[{"name":"Label","value":number},...],"color":"#00d4ff"},"lineChart":{"title":"Trend Title","data":[{"year":"YYYY","value":number},...],"color":"#06ffa5"},"radarChart":{"title":"Risk/Factor Analysis","labels":["Factor1","Factor2","Factor3","Factor4","Factor5"],"values":[number,number,number,number,number]},"insights":["Insight 1 from textbook theory","Insight 2","Insight 3"],"source":"Based on Feenstra & Taylor / Reinert - International Economics"}

Dashboard triggers: "dashboard", "show me data", "chart", "graph", "market analysis", "price of", "export data", "trade data", "visualize", "analytics"

For example:
- "dashboard of banana prices" → generate banana export dashboard
- "show me cacao market data" → generate cacao dashboard
- "chart of Ecuador exports" → generate Ecuador export dashboard
- "trade analytics for shrimp" → generate shrimp trade dashboard

Use realistic, academically-grounded data in dashboards. Reference Feenstra & Taylor or Reinert frameworks when providing insights.

For regular questions (not dashboards), respond in clear prose using concepts from the textbooks. Cover:
- Ricardian Model, Specific-Factors Model, Heckscher-Ohlin Model
- Comparative advantage, absolute advantage, opportunity cost
- Tariffs, quotas, trade policy instruments
- Gains from trade, welfare effects
- FDI, multinational corporations, offshoring
- International finance, exchange rates, balance of payments
- Trade agreements (WTO, FTAs, preferential trade)
- Globalization and development

Keep responses concise but academically rigorous (max 350 words unless more detail is requested).`;

// Dashboard renderer component
function DashboardView({ data }) {
  const COLORS = {
    blue: "#00d4ff", cyan: "#06ffa5", purple: "#a855f7",
    pink: "#f472b6", green: "#22c55e"
  };

  const radarData = data.radarChart?.labels?.map((label, i) => ({
    subject: label,
    value: data.radarChart.values[i]
  })) || [];

  return (
    <div className="dashboard">
      <div className="dash-header">
        <div className="dash-title">{data.title}</div>
        <div className="dash-subtitle">{data.subtitle}</div>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        {data.cards?.map((card, i) => (
          <div className="kpi-card" key={i} style={{ "--accent": COLORS[card.color] || COLORS.blue }}>
            <div className="kpi-val">{card.value}<span className="kpi-unit">{card.unit}</span></div>
            <div className="kpi-label">{card.label}</div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="charts-row">
        {data.barChart && (
          <div className="chart-box">
            <div className="chart-title">{data.barChart.title}</div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data.barChart.data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" tick={{ fill: "#64748b", fontSize: 11 }} />
                <YAxis tick={{ fill: "#64748b", fontSize: 11 }} />
                <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(0,212,255,0.2)", borderRadius: 8, color: "#e2e8f0" }} />
                <Bar dataKey="value" fill={data.barChart.color || "#00d4ff"} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
        {data.lineChart && (
          <div className="chart-box">
            <div className="chart-title">{data.lineChart.title}</div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data.lineChart.data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="year" tick={{ fill: "#64748b", fontSize: 11 }} />
                <YAxis tick={{ fill: "#64748b", fontSize: 11 }} />
                <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(0,212,255,0.2)", borderRadius: 8, color: "#e2e8f0" }} />
                <Line type="monotone" dataKey="value" stroke={data.lineChart.color || "#06ffa5"} strokeWidth={2} dot={{ fill: data.lineChart.color || "#06ffa5" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Radar Chart */}
      {radarData.length > 0 && (
        <div className="chart-box" style={{ marginBottom: 16 }}>
          <div className="chart-title">{data.radarChart.title}</div>
          <ResponsiveContainer width="100%" height={220}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="rgba(255,255,255,0.08)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "#94a3b8", fontSize: 11 }} />
              <Radar dataKey="value" stroke="#a855f7" fill="#a855f7" fillOpacity={0.2} strokeWidth={2} />
              <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(168,85,247,0.3)", borderRadius: 8, color: "#e2e8f0" }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Insights */}
      {data.insights?.length > 0 && (
        <div className="insights-box">
          <div className="insights-title">📚 Academic Insights</div>
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

  // Check if dashboard
  let dashData = null;
  try {
    const trimmed = msg.content.trim();
    if (trimmed.startsWith("{") && trimmed.includes('"type":"dashboard"')) {
      dashData = JSON.parse(trimmed);
    }
  } catch (_) {}

  return (
    <div className="msg bot-msg">
      <div className="bot-avatar">E</div>
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
  "Dashboard: banana export prices",
  "Explain the Ricardian Model",
  "Dashboard: Ecuador trade analytics",
  "What is comparative advantage?",
  "Dashboard: cacao market data",
  "How do tariffs affect welfare?",
];

export default function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Welcome to EconBot 📊

I'm your AI assistant for International Economics and Globalization, trained on:
• Feenstra & Taylor — "International Trade"
• Reinert — "An Introduction to International Economics"

I can explain trade models, analyze policies, and generate live dashboards for any commodity or market.

Try asking for a dashboard: "Show me a dashboard for banana exports" or ask any theory question.`,
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
      const apiKey = import.meta.env.VITE_GROQ_KEY;
      const response = await fetch(GROQ_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...newMessages.map((m) => ({
              role: m.role === "assistant" ? "assistant" : "user",
              content: m.content,
            })),
          ],
          temperature: 0.7,
          max_tokens: 900,
        }),
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "No response. Please try again.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", content: "❌ Connection error. Check your Groq API key." }]);
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
              <div className="logo-title">EconBot</div>
              <div className="logo-sub">International Trade Intelligence · Feenstra & Taylor · Reinert</div>
            </div>
          </div>
          <div className="status-dot" title="Groq connected" />
        </div>
      </header>

      <main className="chat-area">
        {messages.map((msg, i) => (
          <Message key={i} msg={msg} />
        ))}
        {loading && (
          <div className="msg bot-msg">
            <div className="bot-avatar">E</div>
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
            placeholder="Ask a question or request a dashboard..."
            disabled={loading}
          />
          <button className="send-btn" onClick={() => sendMessage()} disabled={loading || !input.trim()}>
            {loading ? "..." : "→"}
          </button>
        </div>
        <p className="footer-note">Powered by Groq · LLaMA 3.3 70B · Feenstra & Taylor · Reinert</p>
      </footer>
    </div>
  );
}
