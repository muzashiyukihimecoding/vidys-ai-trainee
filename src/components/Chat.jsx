import React, { useState } from "react";
import { sendMessage } from "../services/api";
// import { send } from "vite";

export default function ChatBot() {
   const [messages, setMessages] = useState([]);
   const [input, setInput] = useState("");

   // // Dummy fungsi AI sementara (nanti diganti askGemini)
   // async function getAIResponse(prompt) {
   //    return "Ini jawaban AI untuk: " + prompt;
   // }

   async function handleSend(e) {
      e.preventDefault();
      if (!input.trim()) return;

      const newMsg = { sender: "user", text: input };
      setMessages((prev) => [...prev, newMsg]);
      setInput("");

      // const reply = await getAIResponse(input);
      // setMessages((prev) => [...prev, newMsg, { sender: "ai", text: reply }]);

      // calling Backend
      const data = await sendMessage(newMsg.text);
      const aiMsg = { sender: "ai", text: data.reply };

      // ChatGPT Answering
      // const reply = data?.choices?.[0]?.message?.content || "No response";

      setMessages((prev) => [...prev, newMsg, aiMsg]);
   }

   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            height: "85vh",
            background: "#121212",
            color: "white",
         }}
      >
         {/* Header */}
         <div
            style={{
               padding: "15px",
               background: "#1f1f1f",
               textAlign: "center",
               fontWeight: "bold",
            }}
         >
            <h2>Vidys Consult</h2>
         </div>

         {/* Chat Area */}
         <div
            style={{
               flex: 1,
               overflowY: "auto",
               padding: "20px",
               display: "flex",
               flexDirection: "column",
               gap: "12px",
            }}
         >
            {messages.map((msg, i) => (
               <div
                  key={i}
                  style={{
                     display: "flex",
                     justifyContent:
                        msg.sender === "user" ? "flex-end" : "flex-start",
                  }}
               >
                  <div
                     style={{
                        maxWidth: "70%",
                        padding: "12px 16px",
                        borderRadius: "18px",
                        background: msg.sender === "user" ? "#4cafef" : "#333",
                        color: msg.sender === "user" ? "white" : "#ddd",
                     }}
                  >
                     {msg.text}
                  </div>
               </div>
            ))}
         </div>

         {/* Input Area */}
         <form
            onSubmit={handleSend}
            style={{
               display: "flex",
               padding: "15px",
               background: "#1f1f1f",
            }}
         >
            <input
               type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Tulis pesan..."
               style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "20px",
                  border: "none",
                  outline: "none",
               }}
            />
            <button
               type="submit"
               style={{
                  marginLeft: "10px",
                  padding: "12px 20px",
                  border: "none",
                  borderRadius: "20px",
                  background: "#4cafef",
                  color: "white",
                  cursor: "pointer",
               }}
            >
               Kirim
            </button>
         </form>
      </div>
   );
}
