const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require("cors");
require("dotenv").config();

const app = express();
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use(cors());
app.use(express.json());
app.use(express.static(".."));

app.post("/chat", async (req, res) => {
	const { message, context } = req.body;
	console.log("🚀 ~ message:", message);

	try {
		const model = genAI.getGenerativeModel(
			{
				model: "gemini-2.5-flash",
			},
			{ apiVersion: "v1beta" },
		);

		const prompt = `You are a supportive mental health coach. User context: ${JSON.stringify(context)}\n\n${message}`;
		const result = await model.generateContent(prompt);
		const response = await result.response;
		res.json({ reply: response.text() });
	} catch (error) {
		console.log("🚀 ~ error:", error);
		res.status(500).json({ reply: "Error processing your message." });
	}
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
