import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatItem {
  role: "user" | "assistant";
  content: string;
}

async function askAI(prompt: string): Promise<string> {
  try {
    const res = await fetch("/api/ai/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    if (!res.ok) throw new Error("bad_response");
    const data = (await res.json()) as { content?: string };
    return data.content || "I couldn't generate a response.";
  } catch (e) {
    return "AI is unavailable right now. Try again later or use the Career Test.";
  }
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatItem[]>([
    { role: "assistant", content: "Hi! I can help compare courses and streams." },
  ]);
  const listRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;
    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    setLoading(true);
    const reply = await askAI(trimmed);
    setLoading(false);
    setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
  };

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages.length, loading]);

  return (
    <div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed bottom-24 right-4 z-50 w-[92vw] max-w-sm overflow-hidden rounded-xl border border-border bg-card shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-border bg-primary/5 px-4 py-3">
              <div className="flex items-center gap-2 font-semibold">
                <MessageCircle className="h-4 w-4 text-primary" /> Mentorship Chatbot
              </div>
              <button className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
            <div ref={listRef} className="max-h-80 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                  <span
                    className={`inline-block rounded-2xl px-3 py-2 text-sm ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {m.content}
                  </span>
                </div>
              ))}
              {loading && (
                <div className="text-left">
                  <span className="inline-block animate-pulse rounded-2xl bg-secondary px-3 py-2 text-sm text-secondary-foreground">
                    Thinking...
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 border-t border-border p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Ask: Which is better: B.Sc or Diploma?"
              />
              <button onClick={handleSend} className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-95">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:opacity-95"
      >
        <MessageCircle className="h-5 w-5" /> Chat
      </motion.button>
    </div>
  );
}
