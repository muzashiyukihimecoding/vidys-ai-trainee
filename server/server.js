import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

app.post("/api/chat", async (req, res) => {
   try {
      const { message } = req.body;

      const response = await fetch(
         "https://api.openai.com/v1/chat/completions",
         {
            method: "POST",
            headers: {
               Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               model: "gpt-3.5-turbo",
               messages: [{ role: "user", content: message }],
            }),
         }
      );

      const data = await response.json();

      // ✅ kirim hanya text ke frontend
      const reply =
         data.choices?.[0]?.message?.content || "⚠️ No response from OpenAI";
      res.json({ reply });
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
   }
});
