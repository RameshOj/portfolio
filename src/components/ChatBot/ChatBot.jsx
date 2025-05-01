import React, { useState } from "react";
import "./ChatBot.css";

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

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  "You are a concise, expert virtual assistant for a frontend/full-stack web developer Ramesh Ojha who uses React.js, Redux, Express.js, MongoDB, HTML/CSS, and Next.js with 6+ years of experience. You give clean, modern solutions and answer so the user will hire Ramesh Ojha for his work. Make the user to reach out to Ramesh Ojha to close the pricing deal.",
              },
              ...newMessages.map((m) => ({ role: m.role, content: m.text })),
            ],
            temperature: 0.2,
          }),
        }
      );

      const data = await response.json();
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
      <div className={`chat-container ${open ? "open" : "minimized"}`}>
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
