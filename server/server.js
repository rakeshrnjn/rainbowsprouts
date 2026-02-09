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

function extractJson(text) {
	if (!text) return null;
	try {
		return JSON.parse(text);
	} catch (error) {
		// fall through to fenced extraction
	}
	const fenced =
		text.match(/```json\s*([\s\S]*?)```/i) ||
		text.match(/```\s*([\s\S]*?)```/);
	if (fenced) {
		try {
			return JSON.parse(fenced[1]);
		} catch (error) {
			// fall through to brace extraction
		}
	}
	const start = text.indexOf("{");
	const end = text.lastIndexOf("}");
	if (start >= 0 && end > start) {
		try {
			return JSON.parse(text.slice(start, end + 1));
		} catch (error) {
			return null;
		}
	}
	return null;
}

app.post("/chat", async (req, res) => {
	const { message, context, action, career, answers } = req.body;
	console.log("🚀 ~ message:", career);

	try {
		const model = genAI.getGenerativeModel(
			{
				model: "gemini-2.5-flash",
				generationConfig:
					action === "quizStart" || action === "quizEvaluate"
						? { responseMimeType: "application/json" }
						: undefined,
			},
			{ apiVersion: "v1beta" },
		);

		let prompt = `You are a supportive mental health coach. User context: ${JSON.stringify(
			context,
		)}\n\n${message}`;

		if (action === "quizStart") {
			prompt = `You are a friendly career coach for kids and teenagers. A young person wants to become: "${career}".
Create 8-12 simple, fun questions they can rate from 1-5 (1 = not yet, 5 = yes always!).
Questions should be easy to understand and about skills needed for ${career}.
Example: "Do you enjoy helping people feel better?" or "Can you stay calm when things get tricky?"
Return ONLY valid JSON:
{"intro": "one friendly sentence", "questions": ["Q1", "Q2", "..."]}`;
		}

		if (action === "quizEvaluate") {
			prompt = `You are a friendly career coach for kids and teenagers. The young person (age ${answers.age || 'unknown'}) wants to become: "${career}".
Their answers: ${JSON.stringify(answers)}.
Identify 4 key skills for ${career} and score them 0-10.
Create an age-appropriate roadmap with 4-5 simple, actionable steps they can start now.
Be encouraging and specific!
Return ONLY valid JSON:
{"summary": "2-3 encouraging sentences", "scores": {"skill1": 0-10, "skill2": 0-10, "skill3": 0-10, "skill4": 0-10}, "roadmap": ["step1", "step2", "step3", "step4"]}.
Use simple skill names for ${career}.`;
		}

		const result = await model.generateContent(prompt);
		const response = await result.response;
		const text = response.text();

		if (action === "quizStart" || action === "quizEvaluate") {
			const json = extractJson(text);
			if (json) {
				res.json(json);
				return;
			}
			res.json({ reply: text });
			return;
		}

		res.json({ reply: text });
	} catch (error) {
		console.log("🚀 ~ error:", error);
		res.status(500).json({ reply: "Error processing your message." });
	}
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
