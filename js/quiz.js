const questions = [
	{
		q: "What subject do you enjoy the most?",
		o: ["Math", "Science", "Art", "Sports"],
	},
	{
		q: "How do you like to learn?",
		o: ["Watching videos", "Reading", "Doing projects", "Listening"],
	},
	{
		q: "What are you best at?",
		o: ["Solving problems", "Helping people", "Creating things", "Leading"],
	},
	{ q: "What excites you?", o: ["Technology", "Nature", "Music", "Space"] },
	{
		q: "Do you enjoy working in a team?",
		o: ["Yes", "Sometimes", "Not much", "I prefer alone"],
	},
	{
		q: "What would you do on a free day?",
		o: ["Code", "Draw", "Play sports", "Read"],
	},
	{
		q: "Are you comfortable speaking in public?",
		o: ["Yes", "A little", "No", "Sometimes"],
	},
	{
		q: "Do you like experiments?",
		o: ["Love them", "They’re okay", "Not really", "Only sometimes"],
	},
	{
		q: "Which tool sounds coolest?",
		o: ["Laptop", "Microscope", "Paint brush", "Ball"],
	},
	{
		q: "Do you enjoy teaching others?",
		o: ["Yes", "Sometimes", "Not much", "I don’t know"],
	},
	{
		q: "What kind of job sounds fun?",
		o: ["Building", "Helping", "Performing", "Exploring"],
	},
	{
		q: "How do you solve problems?",
		o: ["Think deeply", "Ask for help", "Try creatively", "Try fast"],
	},
	{
		q: "What motivates you?",
		o: ["Success", "Helping others", "Creativity", "Adventure"],
	},
	{
		q: "Where would you like to work?",
		o: ["Office", "Lab", "Studio", "Outdoors"],
	},
	{
		q: "What is your biggest strength?",
		o: ["Logic", "Kindness", "Imagination", "Energy"],
	},
];

let index = 0;
let answers = [];
let selected = null;

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const qText = document.getElementById("questionText");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progress = document.getElementById("progressBar");

subtitle.textContent = `Dream: ${
	localStorage.getItem("dreamCareer") || "Your Future"
}`;

render();

function render() {
	const data = questions[index];
	qText.textContent = data.q;
	optionsBox.innerHTML = "";
	selected = null;
	nextBtn.disabled = true;

	data.o.forEach((opt) => {
		const div = document.createElement("div");
		div.className = "option";
		div.textContent = opt;
		div.onclick = () => select(div, opt);
		optionsBox.appendChild(div);
	});

	progress.style.width = `${(index / questions.length) * 100}%`;
}

function select(el, value) {
	document
		.querySelectorAll(".option")
		.forEach((o) => o.classList.remove("selected"));
	el.classList.add("selected");
	selected = value;
	nextBtn.disabled = false;
}

nextBtn.onclick = () => {
	answers.push({ q: questions[index].q, a: selected });
	index++;

	if (index >= questions.length) {
		const payload = {
			dream: localStorage.getItem("dreamCareer"),
			answers,
		};
		localStorage.setItem("quizResult", JSON.stringify(payload));
		window.location.href = "dashboard.html";
	} else {
		render();
	}
};
