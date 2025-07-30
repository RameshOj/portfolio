import React, { useEffect, useRef, useState } from "react";
import "./ChatBot.css";

// ChatBot Component
// This component implements a chat interface that allows users to interact with an AI assistant {WIP}
const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I'm your AI dev assistant. Ask me anything!",
    },
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [closed, setClosed] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const handleFocus = () => {
      setTimeout(() => {
        chatContainerRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    };

    const input = inputRef.current;
    input?.addEventListener("focus", handleFocus);

    return () => {
      input?.removeEventListener("focus", handleFocus);
    };
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const apiMessages = newMessages.map((msg) => ({
        role: msg.role,
        content: msg.text,
      }));

      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: apiMessages,
        }),
      });

      const data = await res.json();
      const botReply =
        data.choices?.[0]?.message?.content || "Sorry, no response.";
      setMessages([...newMessages, { role: "assistant", text: botReply }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { role: "assistant", text: "Error fetching response." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (closed) return null;

  return (
    <>
      {!open && (
        <div className="chat-icon" onClick={() => setOpen(true)}>
          <i className="fas fa-comments"></i>
        </div>
      )}
      <div
        id="chat-container"
        ref={chatContainerRef}
        className={`chat-container ${open ? "open" : "minimized"}`}
      >
        <div className="chat-header">
          <span>Ramesh Assistant</span>
          <div className="chat-controls">
            <button onClick={() => setOpen(!open)} title="Minimize">
              _
            </button>
            <button onClick={() => setClosed(true)} title="Close">
              ×
            </button>
          </div>
        </div>
        <div className="chat-body">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.role}`}>
              {msg.text}
            </div>
          ))}
          {loading && <div className="chat-msg assistant">Typing...</div>}
        </div>
        <div className="chat-input">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask a dev question..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
