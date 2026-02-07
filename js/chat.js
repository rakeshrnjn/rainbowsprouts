const chatWindow = document.getElementById("chatWindow");
const input = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(type, text) {
	const div = document.createElement("div");
	div.className = `message ${type}`;
	div.textContent = text;
	chatWindow.appendChild(div);
	chatWindow.scrollTop = chatWindow.scrollHeight;
	return div;
}

function showTyping() {
	return addMessage("typing", "thinking...");
}

async function sendMessage() {
	const text = input.value.trim();
	if (!text) return;

	addMessage("user", text);
	input.value = "";

	const typing = showTyping();

	try {
		const res = await fetch("http://localhost:3000/chat", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				message: text,
				context: JSON.parse(localStorage.getItem("quizResult") || "{}"),
			}),
		});

		const data = await res.json();
		typing.remove();
		addMessage(
			"coach",
			data.reply || "Sorry, I had trouble answering that.",
		);
	} catch (e) {
		typing.remove();
		addMessage(
			"coach",
			"Server not connected yet. (Backend will handle this)",
		);
	}
}

sendBtn.onclick = sendMessage;
input.addEventListener("keydown", (e) => {
	if (e.key === "Enter") sendMessage();
});
