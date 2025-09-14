import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(bodyParser.json());

// endpoint chat
app.post("/api/chat", async (req, res) => {
   const { message } = req.body;

   try {
      const response = await fetch(
         "https://api.openai.com/v1/chat/completions",
         {
            method: "POST",
            headers: {
               Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               model: "gpt-4o-mini", // bisa juga "gpt-4.1" atau yang lain
               messages: [{ role: "user", content: message }],
            }),
         }
      );

      const data = await response.json();
      res.json(data);
   } catch (err) {
      console.error(err);
      res.status(500).send("Error dari server");
   }
});

// jalankan server di port 5000
app.listen(5000, () => console.log("✅ Server jalan di http://localhost:5000"));
