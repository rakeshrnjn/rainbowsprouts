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
			prompt = `You are a career coach for students. The student wants to become: "${career}".
Create 10 to 15 short, friendly questions to assess their current strengths.
Return ONLY valid JSON with this shape:
{"intro": "one short sentence", "questions": ["Q1", "Q2", "..."]}`;
		}

		if (action === "quizEvaluate") {
			prompt = `You are a career coach for students. The student chose: "${career}".
They answered questions with 1-5 ratings (1 = not yet, 5 = always).
Their answers: ${JSON.stringify(answers)}.
Return ONLY valid JSON with this shape:
{"summary": "2-4 sentence summary", "scores": {"logic": 0-10, "creativity": 0-10, "communication": 0-10, "problemSolving": 0-10}, "roadmap": ["step1", "step2", "step3"]}.
Be encouraging, specific, and concise.`;
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
