import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Terminal } from "lucide-react";
import ReactMarkdown from "react-markdown";
import aiAvatar from "@/assets/ai-assistant-avatar.png";

type Message = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hey there! 🚀 I'm Arth's AI Assistant. I'm trained to tell you everything about him. Curious about his projects, skills, experience or background? Ask me anything...",
};

// ── Dark mode hook — watches the <html> class (Tailwind standard) ──
function useDarkMode() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

// ── Theme tokens ─────────────────────────────────────────────────
function useTheme(isDark: boolean) {
  return isDark
    ? {
        // Dark mode — deep navy/slate with blue accents
        windowBg: "rgba(15,23,42,0.92)",
        windowBorder: "rgba(99,179,237,0.25)",
        windowShadow:
          "0 8px 32px rgba(99,179,237,0.1), 0 2px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
        titleBg: "rgba(15,23,42,0.98)",
        titleBorder: "rgba(99,179,237,0.2)",
        titleText: "#63b3ed",
        titleIcon: "#63b3ed",
        bootBg: "rgba(30,41,59,0.8)",
        bootBorder: "rgba(99,179,237,0.2)",
        bootLabel: "#63b3ed",
        bootText: "#94a3b8",
        bootDivider: "rgba(99,179,237,0.15)",
        msgDivider: "rgba(99,179,237,0.1)",
        aiBubbleBg: "rgba(30,41,59,0.9)",
        aiBubbleBorder: "rgba(99,179,237,0.2)",
        aiPrompt: "#63b3ed",
        aiText: "#e2e8f0",
        aiBold: "#93c5fd",
        aiItalic: "#67e8f9",
        aiBullet: "#63b3ed",
        aiCursor: "#63b3ed",
        userBubbleBg: "linear-gradient(135deg, #1d4ed8, #1e40af)",
        userBubbleShadow: "0 2px 8px rgba(29,78,216,0.4)",
        userPrompt: "#93c5fd",
        userText: "#ffffff",
        userIconBg: "rgba(30,64,175,0.4)",
        userIconBorder: "rgba(99,179,237,0.4)",
        userIconColor: "#93c5fd",
        typingBg: "rgba(30,41,59,0.9)",
        typingBorder: "rgba(99,179,237,0.2)",
        typingPrompt: "#63b3ed",
        typingDot: "#63b3ed",
        inputBg: "rgba(15,23,42,0.95)",
        inputBorder: "rgba(99,179,237,0.2)",
        inputPrompt: "#63b3ed",
        inputText: "#e2e8f0",
        inputCaret: "#63b3ed",
        inputPlaceholder: "#475569",
        sendBg: "linear-gradient(135deg, #2563eb, #1d4ed8)",
        sendShadow: "0 2px 8px rgba(37,99,235,0.4)",
        floatBorder: "border-blue-800",
        floatBg: "linear-gradient(135deg, #0f172a, #1e3a5f)",
        floatLabel: "#63b3ed",
        closeBtnHover: "hover:bg-slate-700",
        closeColor: "#475569",
      }
    : {
        // Light mode — frosted glass blue/white (unchanged)
        windowBg: "rgba(255,255,255,0.85)",
        windowBorder: "rgba(147,197,253,0.5)",
        windowShadow:
          "0 8px 32px rgba(59,130,246,0.12), 0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
        titleBg: "rgba(239,246,255,0.9)",
        titleBorder: "rgba(147,197,253,0.4)",
        titleText: "#3b82f6",
        titleIcon: "#3b82f6",
        bootBg: "rgba(239,246,255,0.8)",
        bootBorder: "rgba(147,197,253,0.3)",
        bootLabel: "#3b82f6",
        bootText: "#94a3b8",
        bootDivider: "rgba(147,197,253,0.5)",
        msgDivider: "rgba(147,197,253,0.5)",
        aiBubbleBg: "rgba(239,246,255,0.9)",
        aiBubbleBorder: "rgba(147,197,253,0.35)",
        aiPrompt: "#3b82f6",
        aiText: "#1e293b",
        aiBold: "#1d4ed8",
        aiItalic: "#0891b2",
        aiBullet: "#3b82f6",
        aiCursor: "#3b82f6",
        userBubbleBg: "linear-gradient(135deg, #3b82f6, #2563eb)",
        userBubbleShadow: "0 2px 8px rgba(59,130,246,0.3)",
        userPrompt: "#bfdbfe",
        userText: "#ffffff",
        userIconBg: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
        userIconBorder: "rgba(147,197,253,0.5)",
        userIconColor: "#3b82f6",
        typingBg: "rgba(239,246,255,0.9)",
        typingBorder: "rgba(147,197,253,0.35)",
        typingPrompt: "#93c5fd",
        typingDot: "#60a5fa",
        inputBg: "rgba(239,246,255,0.8)",
        inputBorder: "rgba(147,197,253,0.35)",
        inputPrompt: "#93c5fd",
        inputText: "#1e293b",
        inputCaret: "#3b82f6",
        inputPlaceholder: "#94a3b8",
        sendBg: "linear-gradient(135deg, #3b82f6, #2563eb)",
        sendShadow: "0 2px 8px rgba(59,130,246,0.3)",
        floatBorder: "border-blue-200",
        floatBg: "linear-gradient(135deg, #eff6ff, #dbeafe)",
        floatLabel: "#1e40af",
        closeBtnHover: "hover:bg-blue-100",
        closeColor: "#93c5fd",
      };
}

// ── Typewriter hook ──────────────────────────────────────────────
function useTypewriter(text: string, speed = 14, enabled = true) {
  const [displayed, setDisplayed] = useState(enabled ? "" : text);
  const [done, setDone] = useState(!enabled);

  useEffect(() => {
    if (!enabled) { setDisplayed(text); setDone(true); return; }
    setDisplayed("");
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(id); setDone(true); }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, enabled]);

  return { displayed, done };
}

// ── Assistant bubble ─────────────────────────────────────────────
function AssistantBubble({
  content,
  animate,
  t,
}: {
  content: string;
  animate: boolean;
  t: ReturnType<typeof useTheme>;
}) {
  const { displayed, done } = useTypewriter(content, 12, animate);

  return (
    <div className="text-sm leading-relaxed break-words" style={{ color: t.aiText }}>
      <span className="font-mono text-xs select-none mr-1.5 font-semibold" style={{ color: t.aiPrompt }}>
        arth@ai:~$
      </span>
      <span className="font-sans">
        <ReactMarkdown
          components={{
            p: ({ children }) => <span>{children}</span>,
            strong: ({ children }) => (
              <strong className="font-bold" style={{ color: t.aiBold }}>{children}</strong>
            ),
            em: ({ children }) => (
              <em className="italic" style={{ color: t.aiItalic }}>{children}</em>
            ),
            ul: ({ children }) => <ul className="list-none ml-3 mt-1 space-y-0.5">{children}</ul>,
            li: ({ children }) => (
              <li className="flex gap-1.5">
                <span style={{ color: t.aiBullet }}>▸</span>
                <span>{children}</span>
              </li>
            ),
          }}
        >
          {displayed}
        </ReactMarkdown>
      </span>
      {!done && (
        <span
          className="inline-block w-[7px] h-[14px] ml-0.5 align-middle animate-pulse rounded-sm"
          style={{ background: t.aiCursor, opacity: 0.8 }}
        />
      )}
    </div>
  );
}

// ── Boot line ────────────────────────────────────────────────────
function BootLine({
  text,
  delay,
  color,
}: {
  text: string;
  delay: number;
  color: string;
}) {
  const [visible, setVisible] = useState(false);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(true);
      let i = 0;
      const id = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(id);
      }, 20);
      return () => clearInterval(id);
    }, delay);
    return () => clearTimeout(t);
  }, [text, delay]);

  if (!visible) return null;
  return (
    <p className="font-mono text-[10px] leading-5" style={{ color }}>
      <span style={{ opacity: 0.4 }}>» </span>
      {displayed}
    </p>
  );
}

// ── Stream chat ──────────────────────────────────────────────────
async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Message[];
  onDelta: (text: string) => void;
  onDone: () => void;
  onError: (msg: string) => void;
}) {
  try {
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages }),
    });

    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      onError(err.error || "Something went wrong. Please try again.");
      return;
    }
    if (!resp.body) { onError("No response received."); return; }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let streamDone = false;

    while (!streamDone) {
      const { done, value } = await reader.read();
      if (done) break;
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);
        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;
        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") { streamDone = true; break; }
        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }

    if (textBuffer.trim()) {
      for (let raw of textBuffer.split("\n")) {
        if (!raw) continue;
        if (raw.endsWith("\r")) raw = raw.slice(0, -1);
        if (raw.startsWith(":") || raw.trim() === "") continue;
        if (!raw.startsWith("data: ")) continue;
        const jsonStr = raw.slice(6).trim();
        if (jsonStr === "[DONE]") continue;
        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch {}
      }
    }
    onDone();
  } catch {
    onError("Connection error. Please try again.");
  }
}

// ── Main Chatbot ─────────────────────────────────────────────────
const Chatbot = () => {
  const isDark = useDarkMode();
  const t = useTheme(isDark);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [animatedIndexes, setAnimatedIndexes] = useState<Set<number>>(new Set([0]));
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";

    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
          );
        }
        setAnimatedIndexes((s) => new Set(s).add(prev.length));
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    const apiMessages = messages.filter((m) => m !== INITIAL_MESSAGE);

    await streamChat({
      messages: [...apiMessages, userMsg],
      onDelta: upsertAssistant,
      onDone: () => setIsLoading(false),
      onError: (msg) => {
        setMessages((prev) => {
          setAnimatedIndexes((s) => new Set(s).add(prev.length));
          return [...prev, { role: "assistant", content: msg }];
        });
        setIsLoading(false);
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const bootLines = [
    "Connecting to Arth's knowledge base...",
    "Loading projects, skills, experience... ✓",
    "Ready. Ask me anything!",
  ];

  return (
    <>
      {/* ── Floating Button ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2 cursor-pointer"
          >
            <div className="relative">
              <div
                className="w-12 h-12 rounded-full overflow-hidden shadow-lg border"
                style={{
                  background: t.floatBg,
                  borderColor: isDark ? "rgba(99,179,237,0.3)" : "rgba(147,197,253,0.6)",
                }}
              >
                <img src={aiAvatar} alt="AI Assistant" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow animate-pulse" />
            </div>
            <p className="text-[10px] font-semibold text-center whitespace-nowrap" style={{ color: t.floatLabel }}>
              Arth's AI<br />Assistant
            </p>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] max-w-[calc(100vw-2rem)] h-[480px] max-h-[calc(100vh-4rem)] rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: t.windowBg,
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: `1px solid ${t.windowBorder}`,
              boxShadow: t.windowShadow,
            }}
          >
            {/* ── Title bar ── */}
            <div
              className="flex items-center justify-between px-4 py-2.5 flex-shrink-0"
              style={{ background: t.titleBg, borderBottom: `1px solid ${t.titleBorder}` }}
            >
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors"
                />
                <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70" />
                <div className="w-3 h-3 rounded-full bg-green-400 opacity-70" />
              </div>
              <div className="flex items-center gap-1.5">
                <Terminal size={11} style={{ color: t.titleIcon }} />
                <span className="font-mono text-[11px] tracking-wide" style={{ color: t.titleText }}>
                  arth@portfolio: ~/ai
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`w-5 h-5 flex items-center justify-center rounded transition-colors ${t.closeBtnHover}`}
                style={{ color: t.closeColor }}
              >
                <X size={12} />
              </button>
            </div>

            {/* ── Scrollable area ── */}
            <div
              className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Boot lines */}
              <div className="pb-2 mb-1" style={{ borderBottom: `1px dashed ${t.bootDivider}` }}>
                <div
                  className="rounded-lg px-3 py-2 mb-1"
                  style={{ background: t.bootBg, border: `1px solid ${t.bootBorder}` }}
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: t.bootLabel }} />
                    <span className="font-mono text-[10px] font-semibold tracking-wider" style={{ color: t.bootLabel }}>
                      SYSTEM INIT
                    </span>
                  </div>
                  {bootLines.map((line, i) => (
                    <BootLine key={i} text={line} delay={i * 500} color={t.bootText} />
                  ))}
                </div>
              </div>

              {/* Messages */}
              {messages.map((msg, i) =>
                msg.role === "assistant" ? (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-2.5 items-start"
                  >
                    <div
                      className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 mt-0.5 border"
                      style={{ borderColor: t.aiBubbleBorder }}
                    >
                      <img src={aiAvatar} alt="AI" className="w-full h-full object-cover" />
                    </div>
                    <div
                      className="flex-1 rounded-2xl rounded-tl-sm px-3.5 py-2.5"
                      style={{
                        background: t.aiBubbleBg,
                        border: `1px solid ${t.aiBubbleBorder}`,
                      }}
                    >
                      <AssistantBubble content={msg.content} animate={animatedIndexes.has(i)} t={t} />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-2.5 items-start justify-end"
                  >
                    <div
                      className="max-w-[78%] rounded-2xl rounded-tr-sm px-3.5 py-2.5"
                      style={{
                        background: t.userBubbleBg,
                        boxShadow: t.userBubbleShadow,
                      }}
                    >
                      <span className="font-mono text-[10px] select-none mr-1" style={{ color: t.userPrompt }}>
                        you:~$
                      </span>
                      <span className="text-sm" style={{ color: t.userText }}>{msg.content}</span>
                    </div>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: t.userIconBg,
                        border: `1px solid ${t.userIconBorder}`,
                      }}
                    >
                      <User size={13} style={{ color: t.userIconColor }} />
                    </div>
                  </motion.div>
                )
              )}

              {/* Typing indicator */}
              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex gap-2.5 items-start">
                  <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border" style={{ borderColor: t.aiBubbleBorder }}>
                    <img src={aiAvatar} alt="AI" className="w-full h-full object-cover" />
                  </div>
                  <div
                    className="rounded-2xl rounded-tl-sm px-4 py-3"
                    style={{ background: t.typingBg, border: `1px solid ${t.typingBorder}` }}
                  >
                    <span className="font-mono text-[10px] mr-2" style={{ color: t.typingPrompt }}>
                      arth@ai:~$
                    </span>
                    <span className="inline-flex gap-1 align-middle">
                      <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: t.typingDot, animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: t.typingDot, animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: t.typingDot, animationDelay: "300ms" }} />
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ── Input ── */}
            <form
              onSubmit={handleSubmit}
              className="px-3 py-2.5 flex items-center gap-2 flex-shrink-0"
              style={{
                borderTop: `1px solid ${t.inputBorder}`,
                background: t.inputBg,
              }}
            >
              <span className="font-mono text-xs flex-shrink-0 select-none" style={{ color: t.inputPrompt }}>
                you:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ask about Arth..."
                disabled={isLoading}
                className="flex-1 bg-transparent text-sm focus:outline-none disabled:opacity-40"
                style={{
                  color: t.inputText,
                  caretColor: t.inputCaret,
                  fontFamily: "inherit",
                }}
                maxLength={500}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-8 h-8 rounded-xl flex items-center justify-center transition-all disabled:opacity-30 hover:scale-105 flex-shrink-0"
                style={{ background: t.sendBg, boxShadow: t.sendShadow }}
              >
                <Send size={13} className="text-white" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;