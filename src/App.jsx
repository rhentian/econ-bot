import { useState, useRef, useEffect } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Area, AreaChart
} from "recharts";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";

const SYSTEM_PROMPT = `Eres un tutor experto en Economía Internacional, especializado en el Modelo Ricardiano de Ventaja Comparativa y el Modelo de Factores Específicos. 

Responde SIEMPRE en español. Sé claro, didáctico y usa ejemplos numéricos cuando sea útil.

Cuando el usuario pida un gráfico de la FPP (Frontera de Posibilidades de Producción), responde con un JSON especial en este formato exacto (nada más, solo el JSON):
{"type":"ppf","country":"Nombre del País","good1":"Bien 1","good2":"Bien 2","maxGood1":100,"maxGood2":80,"label":"Descripción breve"}

Para cualquier otra pregunta, responde en texto normal con explicaciones claras sobre:
- Ventaja comparativa y absoluta
- Costo de oportunidad
- Ganancias del comercio
- Modelo Ricardiano (tecnología, trabajo, salarios)
- Modelo de Factores Específicos (capital, tierra, trabajo móvil)
- Términos de intercambio
- Bienestar y distribución del ingreso

Mantén respuestas concisas pero completas (máximo 300 palabras salvo que se pida más detalle).`;

function PPFChart({ data }) {
  const points = [];
  const steps = 50;
  for (let i = 0; i <= steps; i++) {
    const x = (data.maxGood1 / steps) * i;
    const y = data.maxGood2 * Math.sqrt(1 - Math.pow(x / data.maxGood1, 2));
    points.push({ [data.good1]: parseFloat(x.toFixed(2)), [data.good2]: parseFloat(y.toFixed(2)) });
  }

  return (
    <div className="ppf-container">
      <h3 className="ppf-title">📊 FPP — {data.country}</h3>
      <p className="ppf-label">{data.label}</p>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={points} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
          <defs>
            <linearGradient id="ppfGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.07)" />
          <XAxis dataKey={data.good1} label={{ value: data.good1, position: "insideBottom", offset: -10, fill: "#a5b4fc" }} tick={{ fill: "#94a3b8", fontSize: 11 }} />
          <YAxis label={{ value: data.good2, angle: -90, position: "insideLeft", fill: "#a5b4fc" }} tick={{ fill: "#94a3b8", fontSize: 11 }} />
          <Tooltip contentStyle={{ background: "#1e1b4b", border: "1px solid #4f46e5", borderRadius: 8, color: "#e2e8f0" }} />
          <Area type="monotone" dataKey={data.good2} stroke="#6366f1" strokeWidth={2.5} fill="url(#ppfGrad)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
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

  // Check if it's a PPF chart response
  let ppfData = null;
  try {
    const trimmed = msg.content.trim();
    if (trimmed.startsWith("{") && trimmed.includes('"type":"ppf"')) {
      ppfData = JSON.parse(trimmed);
    }
  } catch (_) {}

  return (
    <div className="msg bot-msg">
      <div className="bot-avatar">E</div>
      <div className="msg-bubble bot-bubble">
        {ppfData ? (
          <PPFChart data={ppfData} />
        ) : (
          <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.7 }}>{msg.content}</p>
        )}
      </div>
    </div>
  );
}

const SUGGESTIONS = [
  "¿Qué es la ventaja comparativa?",
  "Muéstrame la FPP de Inglaterra",
  "Explica el modelo de Factores Específicos",
  "¿Cómo afecta el comercio al bienestar?",
];

export default function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "¡Hola! Soy tu tutor de Economía Internacional 📚\n\nPuedo explicarte el Modelo Ricardiano, el Modelo de Factores Específicos, ventaja comparativa, costos de oportunidad y más. También puedo generar gráficas de la FPP.\n\n¿Qué quieres aprender hoy?",
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
            ...newMessages.map((m) => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.content })),
          ],
          temperature: 0.7,
          max_tokens: 600,
        }),
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "No obtuve respuesta. Intenta de nuevo.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", content: "❌ Error de conexión. Verifica tu API key de Groq." }]);
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
              <div className="logo-sub">Tutor de Economía Internacional</div>
            </div>
          </div>
          <div className="status-dot" title="Groq conectado" />
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
            placeholder="Escribe tu pregunta de economía..."
            disabled={loading}
          />
          <button className="send-btn" onClick={() => sendMessage()} disabled={loading || !input.trim()}>
            {loading ? "..." : "→"}
          </button>
        </div>
        <p className="footer-note">Powered by Groq · LLaMA 3 70B · Respuestas rápidas y gratuitas</p>
      </footer>
    </div>
  );
}
