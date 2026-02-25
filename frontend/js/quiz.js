const subjectQuestion = {
    text: "Which subject are you MOST interested in?",
    options: [
        {text:"Math",traits:{math:5}}, {text:"Science",traits:{science:5}},
        {text:"Language / Writing",traits:{language:5}}, {text:"Politics / Government",traits:{government:5}},
        {text:"History",traits:{history:5}}, {text:"Arts",traits:{arts:5}},
        {text:"Music",traits:{music:5}}, {text:"Engineering",traits:{engineering:5}},
        {text:"Computer Science / Coding",traits:{cs:5}}, {text:"Business / Finance",traits:{business:5}},
        {text:"Healthcare",traits:{health:5}}, {text:"Law",traits:{law:5}},
        {text:"Education",traits:{education:5}}, {text:"Trades / Skilled Work",traits:{trades:5}}
    ]
};

const coreQuestions = [
    {text:"Do you enjoy solving complex problems?", options:[{text:"Yes", traits:{cs:2,math:2}},{text:"Sometimes", traits:{cs:1}},{text:"No", traits:{arts:1}}]},
    {text:"Do you prefer working with people or ideas?", options:[{text:"People", traits:{health:2,education:2}},{text:"Ideas", traits:{cs:2,engineering:2}}]},
    {text:"Do you like hands-on work?", options:[{text:"Yes", traits:{trades:2,engineering:1}},{text:"Sometimes", traits:{engineering:1}},{text:"No", traits:{cs:1}}]},
    {text:"Do you enjoy creativity?", options:[{text:"Yes", traits:{arts:2}},{text:"Somewhat", traits:{arts:1}},{text:"No", traits:{math:1}}]},
    {text:"Do you like structured rules?", options:[{text:"Yes", traits:{law:2}},{text:"Neutral", traits:{}},{text:"No", traits:{arts:1}}]},
    {text:"Do you enjoy leadership?", options:[{text:"Yes", traits:{business:2}},{text:"Sometimes", traits:{business:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy writing or speaking?", options:[{text:"Yes", traits:{language:2}},{text:"Somewhat", traits:{language:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy helping others?", options:[{text:"Yes", traits:{health:2}},{text:"Sometimes", traits:{health:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy working with technology?", options:[{text:"Yes", traits:{cs:2}},{text:"Somewhat", traits:{cs:1}},{text:"No", traits:{}}]},
    {text:"Do you prefer predictable work?", options:[{text:"Yes", traits:{law:1}},{text:"Neutral", traits:{}},{text:"No", traits:{entrepreneur:1}}]},
    {text:"Do you enjoy research?", options:[{text:"Yes", traits:{science:2}},{text:"Somewhat", traits:{science:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy teaching others?", options:[{text:"Yes", traits:{education:2}},{text:"Sometimes", traits:{education:1}},{text:"No", traits:{}}]},
    {text:"Do you like working outdoors?", options:[{text:"Yes", traits:{environment:2}},{text:"Sometimes", traits:{environment:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy numbers and data?", options:[{text:"Yes", traits:{math:2}},{text:"Somewhat", traits:{math:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy designing things?", options:[{text:"Yes", traits:{arts:2,engineering:1}},{text:"Somewhat", traits:{arts:1}},{text:"No", traits:{}}]},
    {text:"Do you like fast-paced environments?", options:[{text:"Yes", traits:{business:2}},{text:"Sometimes", traits:{business:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy detailed work?", options:[{text:"Yes", traits:{engineering:2}},{text:"Sometimes", traits:{engineering:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy problem-solving under pressure?", options:[{text:"Yes", traits:{health:2}},{text:"Sometimes", traits:{health:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy working independently?", options:[{text:"Yes", traits:{cs:1}},{text:"Sometimes", traits:{}},{text:"No", traits:{education:1}}]},
    {text:"Do you enjoy managing projects?", options:[{text:"Yes", traits:{business:2}},{text:"Sometimes", traits:{business:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy analyzing trends?", options:[{text:"Yes", traits:{business:2}},{text:"Sometimes", traits:{business:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy precision tasks?", options:[{text:"Yes", traits:{engineering:2}},{text:"Sometimes", traits:{engineering:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy public speaking?", options:[{text:"Yes", traits:{law:2}},{text:"Sometimes", traits:{law:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy artistic expression?", options:[{text:"Yes", traits:{arts:2}},{text:"Sometimes", traits:{arts:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy music?", options:[{text:"Yes", traits:{music:2}},{text:"Sometimes", traits:{music:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy fixing things?", options:[{text:"Yes", traits:{trades:2}},{text:"Sometimes", traits:{trades:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy teamwork?", options:[{text:"Yes", traits:{education:2}},{text:"Sometimes", traits:{education:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy logical reasoning?", options:[{text:"Yes", traits:{math:2}},{text:"Sometimes", traits:{math:1}},{text:"No", traits:{}}]},
    {text:"Do you enjoy long-term projects?", options:[{text:"Yes", traits:{engineering:2}},{text:"Sometimes", traits:{engineering:1}},{text:"No", traits:{}}]}
];

const careers = [
    { name:"Software Engineer", salary:133080, subject:"Computer Science", traits:{cs:4} },
    { name:"Web Developer", salary:95380, subject:"Computer Science", traits:{cs:4} },
    { name:"Game Developer", salary:133080, subject:"Computer Science", traits:{cs:4} },
    { name:"AI / ML Engineer", salary:140910, subject:"Computer Science", traits:{cs:5,math:3} },
    { name:"Data Scientist", salary:140910, subject:"Computer Science / Math", traits:{math:3,cs:3} },
    { name:"Cybersecurity Analyst", salary:120360, subject:"Computer Science", traits:{cs:4} },
    { name:"Computer Systems Analyst", salary:103790, subject:"Computer Science", traits:{cs:3} },
    { name:"Robotics Engineer", salary:96310, subject:"Engineering", traits:{engineering:4} },
    { name:"Mathematician", salary:112110, subject:"Math", traits:{math:5} },
    { name:"Statistician", salary:99960, subject:"Math / CS", traits:{math:4} },
    { name:"Physicist", salary:155680, subject:"Science", traits:{science:5} },
    { name:"Chemist", salary:86310, subject:"Science", traits:{science:4} },
    { name:"Biologist", salary:93180, subject:"Science", traits:{science:4} },
    { name:"Environmental Scientist", salary:76480, subject:"Science", traits:{science:4} },
    { name:"Mechanical Engineer", salary:96310, subject:"Engineering", traits:{engineering:4} },
    { name:"Civil Engineer", salary:95890, subject:"Engineering", traits:{engineering:4} },
    { name:"Electrical Engineer", salary:106950, subject:"Engineering", traits:{engineering:4} },
    { name:"Architect", salary:93310, subject:"Engineering / Arts", traits:{engineering:2,arts:2} },
    { name:"Urban Planner", salary:79540, subject:"Engineering / Government", traits:{government:3} },
    { name:"Registered Nurse", salary:86070, subject:"Healthcare", traits:{health:4} },
    { name:"Physician", salary:208000, subject:"Healthcare", traits:{health:5} },
    { name:"Pharmacist", salary:132750, subject:"Healthcare", traits:{health:4} },
    { name:"Physical Therapist", salary:99710, subject:"Healthcare", traits:{health:4} },
    { name:"Psychologist", salary:92740, subject:"Healthcare / Social", traits:{health:3} },
    { name:"Social Worker", salary:58380, subject:"Healthcare / Social", traits:{health:3} },
    { name:"Lawyer", salary:135740, subject:"Law", traits:{law:4} },
    { name:"Judge", salary:148910, subject:"Law", traits:{law:5} },
    { name:"Paralegal", salary:59200, subject:"Law", traits:{law:3} },
    { name:"Accountant", salary:81680, subject:"Business", traits:{business:4} },
    { name:"Financial Analyst", salary:99890, subject:"Business", traits:{business:4} },
    { name:"Marketing Manager", salary:158280, subject:"Business", traits:{business:4} },
    { name:"Product Manager", salary:101280, subject:"Business / CS", traits:{business:3} },
    { name:"Economist", salary:113940, subject:"Business / Math", traits:{business:3} },
    { name:"Journalist", salary:55960, subject:"Language", traits:{language:4} },
    { name:"Historian", salary:66160, subject:"History", traits:{history:4} },
    { name:"Construction Manager", salary:104900, subject:"Trades / Engineering", traits:{trades:3} },
    { name:"Electrician", salary:61590, subject:"Trades", traits:{trades:4} },
    { name:"Plumber", salary:61550, subject:"Trades", traits:{trades:4} },
    { name:"Carpenter", salary:51390, subject:"Trades", traits:{trades:4} },
    { name:"HVAC Technician", salary:57460, subject:"Trades", traits:{trades:4} },
    { name:"Automotive Technician", salary:48000, subject:"Trades", traits:{trades:4} },
    { name:"Graphic Designer", salary:58910, subject:"Arts", traits:{arts:4} },
    { name:"UX Designer", salary:58910, subject:"Arts / CS", traits:{arts:3} },
    { name:"Animator", salary:98950, subject:"Arts", traits:{arts:4} },
    { name:"Interior Designer", salary:61590, subject:"Arts", traits:{arts:4} },
    { name:"Music Producer", salary:56370, subject:"Music / Arts", traits:{music:4} },
    { name:"Composer / Musician", salary:50000, subject:"Music / Arts", traits:{music:5} },
    { name:"Chef", salary:55000, subject:"Trades / Arts", traits:{trades:3} },
    { name:"Entrepreneur", salary:101280, subject:"Business", traits:{business:5} },
    { name:"Teacher", salary:65220, subject:"Education", traits:{education:4} },
    { name:"Professor / Lecturer", salary:80840, subject:"Education", traits:{education:4} },
    { name:"Veterinarian", salary:104690, subject:"Healthcare / Science", traits:{health:4,science:3} }
];

let questions=[], index=0, traits={};

function start(mode){
    document.getElementById("mode").style.display="none";
    document.getElementById("prog-area").style.display="block";
    document.getElementById("quiz").style.display="block";
    traits={}; 
    index=0;
    questions = mode==="basic" ? [subjectQuestion,...coreQuestions.slice(0,14)] : [subjectQuestion,...coreQuestions];
    render();
}

function render(){
    const q = questions[index];
    document.getElementById("counter").innerText = `Question ${index+1} of ${questions.length}`;
    document.getElementById("bar").style.width = `${(index/questions.length)*100}%`;
    document.getElementById("q").innerHTML = `<h3>${q.text}</h3>` +
    q.options.map((o,i)=>`
        <label>
            <input type="radio" name="a" value="${i}"> <span>${o.text}</span>
        </label>`).join("");
}

function nextQ(){
    const s = document.querySelector("input[name=a]:checked");
    if(!s){alert("Please select an option"); return;}
    const opt = questions[index].options[s.value];
    for(let t in opt.traits){ traits[t] = (traits[t]||0)+opt.traits[t]; }
    index++;
    index >= questions.length ? showResults() : render();
}

function showResults(){
    document.getElementById("quiz").style.display="none";
    document.getElementById("prog-area").style.display="none";
    document.getElementById("results").style.display="block";
    
    const ranked = careers.map(c=>{
        let score=0;
        for(let t in c.traits) score += (traits[t]||0)*c.traits[t];
        return {...c,score};
    }).sort((a,b)=>b.score-a.score).slice(0,3);
    
    const max = ranked[0].score || 1;
    document.getElementById("out").innerHTML = ranked.map(c=>`
        <div class="result-item">
            <div>
                <h3 style="margin:0">${c.name} -- ${Math.round((c.score/max)*100)}% Match</h3>
                <p style="margin:5px 0"><b>Subject:</b> ${c.subject}</p>
                <p style="margin:0"><b>Median Salary:</b> $${c.salary.toLocaleString()}</p>
            </div>
            <button class="ai-chat-btn" onclick="chatWithAI('${c.name}')">Talk to coach</button>
        </div>`).join("");
}

function chatWithAI(careerName) {
    localStorage.clear();
    localStorage.setItem("dreamCareer", careerName);
    window.location.href = "dashboard.html";
}

function resetApp(){
    location.reload();
}