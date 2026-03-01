const subjectQuestion = {
text: "Which subjects interest you? (Select ALL that apply)",
multi: true,
options: [
{text:"Math",traits:{math:5}},
{text:"Science",traits:{science:5}},
{text:"Language / Writing",traits:{language:5}},
{text:"Arts",traits:{arts:5}},
{text:"Music",traits:{music:5}},
{text:"Engineering",traits:{engineering:5}},
{text:"Computer Science",traits:{cs:5}},
{text:"Business",traits:{business:5}},
{text:"Healthcare",traits:{health:5}},
{text:"Law",traits:{law:5}},
{text:"Education",traits:{education:5}},
{text:"Trades / Skilled Work",traits:{trades:5}}
]
};


const coreQuestions = [

{ text:"Do you enjoy solving complex problems?",
options:[
{text:"Yes",traits:{cs:2,math:2}},
{text:"Sometimes",traits:{cs:1}},
{text:"No",traits:{arts:1}}
]},

{ text:"Do you prefer working with people or ideas?",
options:[
{text:"People",traits:{health:2,education:2}},
{text:"Ideas",traits:{cs:2,engineering:2}}
]},

{ text:"Do you like hands-on work?",
options:[
{text:"Yes",traits:{trades:2,engineering:1}},
{text:"Sometimes",traits:{engineering:1}},
{text:"No",traits:{cs:1}}
]},

{ text:"Do you enjoy creativity?",
options:[
{text:"Yes",traits:{arts:2}},
{text:"Somewhat",traits:{arts:1}},
{text:"No",traits:{math:1}}
]},

{ text:"Do you like structured rules?",
options:[
{text:"Yes",traits:{law:2}},
{text:"Neutral",traits:{}},
{text:"No",traits:{arts:1}}
]},

{ text:"Do you enjoy leadership?",
options:[
{text:"Yes",traits:{business:2}},
{text:"Sometimes",traits:{business:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy writing or speaking?",
options:[
{text:"Yes",traits:{language:2}},
{text:"Somewhat",traits:{language:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy helping others?",
options:[
{text:"Yes",traits:{health:2}},
{text:"Sometimes",traits:{health:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy working with technology?",
options:[
{text:"Yes",traits:{cs:2}},
{text:"Somewhat",traits:{cs:1}},
{text:"No",traits:{}}
]},

{ text:"Do you prefer predictable work?",
options:[
{text:"Yes",traits:{law:1}},
{text:"Neutral",traits:{}},
{text:"No",traits:{entrepreneur:1}}
]},

{ text:"Do you enjoy research?",
options:[
{text:"Yes",traits:{science:2}},
{text:"Somewhat",traits:{science:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy teaching others?",
options:[
{text:"Yes",traits:{education:2}},
{text:"Sometimes",traits:{education:1}},
{text:"No",traits:{}}
]},

{ text:"Do you like working outdoors?",
options:[
{text:"Yes",traits:{environment:2}},
{text:"Sometimes",traits:{environment:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy numbers and data?",
options:[
{text:"Yes",traits:{math:2}},
{text:"Somewhat",traits:{math:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy designing things?",
options:[
{text:"Yes",traits:{arts:2,engineering:1}},
{text:"Somewhat",traits:{arts:1}},
{text:"No",traits:{}}
]},

{ text:"Do you like fast-paced environments?",
options:[
{text:"Yes",traits:{business:2}},
{text:"Sometimes",traits:{business:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy detailed work?",
options:[
{text:"Yes",traits:{engineering:2}},
{text:"Sometimes",traits:{engineering:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy problem-solving under pressure?",
options:[
{text:"Yes",traits:{health:2}},
{text:"Sometimes",traits:{health:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy working independently?",
options:[
{text:"Yes",traits:{cs:1}},
{text:"Sometimes",traits:{}},
{text:"No",traits:{education:1}}
]},

{ text:"Do you enjoy managing projects?",
options:[
{text:"Yes",traits:{business:2}},
{text:"Sometimes",traits:{business:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy analyzing trends?",
options:[
{text:"Yes",traits:{business:2}},
{text:"Sometimes",traits:{business:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy precision tasks?",
options:[
{text:"Yes",traits:{engineering:2}},
{text:"Sometimes",traits:{engineering:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy public speaking?",
options:[
{text:"Yes",traits:{law:2}},
{text:"Sometimes",traits:{law:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy artistic expression?",
options:[
{text:"Yes",traits:{arts:2}},
{text:"Sometimes",traits:{arts:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy music?",
options:[
{text:"Yes",traits:{music:2}},
{text:"Sometimes",traits:{music:1}},
{text:"No",traits:{}}
]},


{ text:"Do you enjoy fixing machines?",
options:[
{text:"Yes",traits:{trades:2}},
{text:"Sometimes",traits:{trades:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy teamwork?",
options:[
{text:"Yes",traits:{education:2}},
{text:"Sometimes",traits:{education:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy logical reasoning?",
options:[
{text:"Yes",traits:{math:2}},
{text:"Sometimes",traits:{math:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy long-term projects?",
options:[
{text:"Yes",traits:{engineering:2}},
{text:"Sometimes",traits:{engineering:1}},
{text:"No",traits:{}}
]},

{ text:"Do you like traveling for work?",
options:[
{text:"Yes",traits:{business:1}},
{text:"Sometimes",traits:{}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy entrepreneurship?",
options:[
{text:"Yes",traits:{business:3}},
{text:"Maybe",traits:{business:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy negotiation?",
options:[
{text:"Yes",traits:{law:2,business:2}},
{text:"Sometimes",traits:{business:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy counseling people?",
options:[
{text:"Yes",traits:{health:2,education:1}},
{text:"Sometimes",traits:{health:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy scientific experiments?",
options:[
{text:"Yes",traits:{science:2}},
{text:"Sometimes",traits:{science:1}},
{text:"No",traits:{}}
]},

{ text:"Do you enjoy building things?",
options:[
{text:"Yes",traits:{engineering:2,trades:2}},
{text:"Sometimes",traits:{engineering:1}},
{text:"No",traits:{}}
]}
];


const careers = [
{
name:"Software Developer", medianSalary:110140, growthPercent:25,
recommendedMajors:[{majors:["Computer Science","Software Engineering"]}],
traits:{cs:5,math:3}
},
{
name:"Web Developer", medianSalary:95380, growthPercent:15,
recommendedMajors:[{majors:["Computer Science","Web Development"]}],
traits:{cs:4}
},
{
name:"Data Scientist", medianSalary:140910, growthPercent:36,
recommendedMajors:[{majors:["Statistics","Computer Science"]}],
traits:{cs:4,math:4}
},
{
name:"Cybersecurity Analyst", medianSalary:112000, growthPercent:32,
recommendedMajors:[{majors:["Cybersecurity","Computer Science"]}],
traits:{cs:5}
},
{
name:"AI Engineer", medianSalary:150000, growthPercent:35,
recommendedMajors:[{majors:["Artificial Intelligence","Computer Science"]}],
traits:{cs:5,math:4}
},
{
name:"Machine Learning Engineer", medianSalary:145000, growthPercent:34,
recommendedMajors:[{majors:["Machine Learning","Computer Science"]}],
traits:{cs:5,math:4}
},
{
name:"Cloud Engineer", medianSalary:135000, growthPercent:28,
recommendedMajors:[{majors:["Information Technology","Computer Science"]}],
traits:{cs:5}
},
{
name:"DevOps Engineer", medianSalary:130000, growthPercent:25,
recommendedMajors:[{majors:["Computer Science","IT"]}],
traits:{cs:5}
},
{
name:"Database Administrator", medianSalary:98110, growthPercent:8,
recommendedMajors:[{majors:["Information Systems","Computer Science"]}],
traits:{cs:4}
},
{
name:"Network Engineer", medianSalary:89000, growthPercent:5,
recommendedMajors:[{majors:["Network Engineering","IT"]}],
traits:{cs:4}
},
{
name:"Mobile App Developer", medianSalary:125000, growthPercent:24,
recommendedMajors:[{majors:["Computer Science","Software Engineering"]}],
traits:{cs:5}
},
{
name:"Game Developer", medianSalary:120000, growthPercent:22,
recommendedMajors:[{majors:["Game Design","Computer Science"]}],
traits:{cs:5,arts:2}
},
{
name:"UX Designer", medianSalary:98000, growthPercent:13,
recommendedMajors:[{majors:["UX Design","Human-Computer Interaction"]}],
traits:{arts:3,cs:2}
},
{
name:"UI Designer", medianSalary:92000, growthPercent:12,
recommendedMajors:[{majors:["Graphic Design","UX Design"]}],
traits:{arts:4}
},
{
name:"Systems Analyst", medianSalary:103790, growthPercent:7,
recommendedMajors:[{majors:["Information Systems","Computer Science"]}],
traits:{cs:4,business:2}
},
{
name:"IT Manager", medianSalary:164070, growthPercent:15,
recommendedMajors:[{majors:["Information Technology","Management"]}],
traits:{cs:4,business:3}
},
{
name:"Computer Hardware Engineer", medianSalary:128170, growthPercent:2,
recommendedMajors:[{majors:["Computer Engineering","Electrical Engineering"]}],
traits:{engineering:4,cs:3}
},
{
name:"Robotics Engineer", medianSalary:130000, growthPercent:18,
recommendedMajors:[{majors:["Robotics","Mechanical Engineering"]}],
traits:{engineering:5,cs:3}
},
{
name:"Electrical Engineer", medianSalary:106950, growthPercent:7,
recommendedMajors:[{majors:["Electrical Engineering"]}],
traits:{engineering:4}
},
{
name:"Mechanical Engineer", medianSalary:96310, growthPercent:7,
recommendedMajors:[{majors:["Mechanical Engineering"]}],
traits:{engineering:4,math:3}
},
{
name:"Civil Engineer", medianSalary:95890, growthPercent:8,
recommendedMajors:[{majors:["Civil Engineering"]}],
traits:{engineering:4}
},
{
name:"Industrial Engineer", medianSalary:103480, growthPercent:10,
recommendedMajors:[{majors:["Industrial Engineering"]}],
traits:{engineering:4,business:2}
},
{
name:"Environmental Engineer", medianSalary:95230, growthPercent:3,
recommendedMajors:[{majors:["Environmental Engineering"]}],
traits:{engineering:3,science:4}
},
{
name:"Architect", medianSalary:93310, growthPercent:7,
recommendedMajors:[{majors:["Architecture"]}],
traits:{arts:3,engineering:2}
},
{
name:"Construction Manager", medianSalary:104900, growthPercent:11,
recommendedMajors:[{majors:["Construction Management"]}],
traits:{trades:3}
},
{
name:"Electrician", medianSalary:61590, growthPercent:8,
recommendedMajors:[{majors:["Apprenticeship"]}],
traits:{trades:4}
},
{
name:"Plumber", medianSalary:61550, growthPercent:5,
recommendedMajors:[{majors:["Apprenticeship"]}],
traits:{trades:4}
},
{
name:"Carpenter", medianSalary:51390, growthPercent:3,
recommendedMajors:[{majors:["Apprenticeship"]}],
traits:{trades:4}
},
{
name:"HVAC Technician", medianSalary:57460, growthPercent:5,
recommendedMajors:[{majors:["HVAC Technology"]}],
traits:{trades:4}
},
{
name:"Welder", medianSalary:52000, growthPercent:3,
recommendedMajors:[{majors:["Welding Technology"]}],
traits:{trades:4}
},
{
name:"Automotive Technician", medianSalary:47000, growthPercent:1,
recommendedMajors:[{majors:["Automotive Technology"]}],
traits:{trades:4}
},
{
name:"Aerospace Engineer", medianSalary:122270, growthPercent:6,
recommendedMajors:[{majors:["Aerospace Engineering"]}],
traits:{engineering:5}
},
{
name:"Pilot", medianSalary:160000, growthPercent:6,
recommendedMajors:[{majors:["Aviation"]}],
traits:{engineering:3}
},
{
name:"Chemist", medianSalary:82100, growthPercent:6,
recommendedMajors:[{majors:["Chemistry"]}],
traits:{science:5}
},
{
name:"Physicist", medianSalary:152430, growthPercent:7,
recommendedMajors:[{majors:["Physics"]}],
traits:{science:5,math:4}
},
{
name:"Astronomer", medianSalary:128160, growthPercent:8,
recommendedMajors:[{majors:["Astronomy"]}],
traits:{science:5}
},
{
name:"Geologist", medianSalary:83000, growthPercent:5,
recommendedMajors:[{majors:["Geology"]}],
traits:{science:4}
},
{
name:"Meteorologist", medianSalary:94000, growthPercent:6,
recommendedMajors:[{majors:["Meteorology"]}],
traits:{science:4}
},
{
name:"Environmental Scientist", medianSalary:76480, growthPercent:6,
recommendedMajors:[{majors:["Environmental Science"]}],
traits:{science:4}
},
{
name:"Forensic Scientist", medianSalary:64000, growthPercent:11,
recommendedMajors:[{majors:["Forensic Science"]}],
traits:{science:4,law:2}
},
{
name:"Food Scientist", medianSalary:74000, growthPercent:8,
recommendedMajors:[{majors:["Food Science"]}],
traits:{science:4}
},
{
name:"Financial Analyst", medianSalary:99890, growthPercent:6,
recommendedMajors:[{majors:["Finance"]}],
traits:{business:4,math:3}
},
{
name:"Accountant", medianSalary:81680, growthPercent:6,
recommendedMajors:[{majors:["Accounting"]}],
traits:{business:4}
},
{
name:"Marketing Manager", medianSalary:158280, growthPercent:10,
recommendedMajors:[{majors:["Marketing"]}],
traits:{business:4}
},
{
name:"Human Resources Specialist", medianSalary:66450, growthPercent:7,
recommendedMajors:[{majors:["Human Resources"]}],
traits:{business:3}
},
{
name:"Business Operations Specialist", medianSalary:76000, growthPercent:6,
recommendedMajors:[{majors:["Business Administration","Management"]}],
traits:{business:3}
},
{
name:"Management Analyst", medianSalary:95500, growthPercent:11,
recommendedMajors:[{majors:["Business","Management"]}],
traits:{business:4}
},
{
name:"Project Manager", medianSalary:98000, growthPercent:7,
recommendedMajors:[{majors:["Business","Management"]}],
traits:{business:4}
},
{
name:"Operations Manager", medianSalary:103000, growthPercent:6,
recommendedMajors:[{majors:["Business","Management"]}],
traits:{business:5}
},
{
name:"Sales Manager", medianSalary:133380, growthPercent:5,
recommendedMajors:[{majors:["Business","Marketing"]}],
traits:{business:4}
},
{
name:"Real Estate Broker", medianSalary:65000, growthPercent:3,
recommendedMajors:[{majors:["Business","Real Estate"]}],
traits:{business:4}
},
{
name:"Property Manager", medianSalary:64000, growthPercent:3,
recommendedMajors:[{majors:["Business","Real Estate"]}],
traits:{business:4}
},
{
name:"Insurance Underwriter", medianSalary:76000, growthPercent:-2,
recommendedMajors:[{majors:["Finance","Business"]}],
traits:{business:4,math:2}
},
{
name:"Claims Adjuster", medianSalary:74000, growthPercent:2,
recommendedMajors:[{majors:["Business","Finance"]}],
traits:{business:4}
},
{
name:"Supply Chain Manager", medianSalary:125000, growthPercent:8,
recommendedMajors:[{majors:["Supply Chain Management"]}],
traits:{business:5}
},
{
name:"Logistician", medianSalary:77520, growthPercent:18,
recommendedMajors:[{majors:["Logistics","Supply Chain"]}],
traits:{business:4}
},
{
name:"Retail Manager", medianSalary:65000, growthPercent:-1,
recommendedMajors:[{majors:["Business","Management"]}],
traits:{business:4}
},
{
name:"Hotel Manager", medianSalary:61000, growthPercent:18,
recommendedMajors:[{majors:["Hospitality Management"]}],
traits:{business:4}
},
{
name:"Chef", medianSalary:56000, growthPercent:15,
recommendedMajors:[{majors:["Culinary Arts"]}],
traits:{trades:4}
},
{
name:"Baker", medianSalary:34000, growthPercent:5,
recommendedMajors:[{majors:["Culinary Arts"]}],
traits:{trades:4}
},
{
name:"Butcher", medianSalary:38000, growthPercent:2,
recommendedMajors:[{majors:["Culinary Arts"]}],
traits:{trades:4}
},
{
name:"Farmer", medianSalary:70000, growthPercent:-2,
recommendedMajors:[{majors:["Agriculture"]}],
traits:{environment:3}
},
{
name:"Forester", medianSalary:68000, growthPercent:5,
recommendedMajors:[{majors:["Forestry"]}],
traits:{environment:5}
},
{
name:"Park Ranger", medianSalary:55000, growthPercent:4,
recommendedMajors:[{majors:["Environmental Science","Forestry"]}],
traits:{environment:5}
},
{
name:"Wildlife Biologist", medianSalary:69000, growthPercent:3,
recommendedMajors:[{majors:["Wildlife Biology"]}],
traits:{science:4,environment:5}
},
{
name:"Zoologist", medianSalary:71000, growthPercent:3,
recommendedMajors:[{majors:["Zoology"]}],
traits:{science:4}
},
{
name:"Veterinary Technician", medianSalary:44000, growthPercent:20,
recommendedMajors:[{majors:["Veterinary Technology"]}],
traits:{health:4}
},
{
name:"Veterinarian", medianSalary:119000, growthPercent:20,
recommendedMajors:[{majors:["Veterinary Medicine"]}],
traits:{health:5}
},
{
name:"Registered Nurse", medianSalary:86070, growthPercent:6,
recommendedMajors:[{majors:["Nursing"]}],
traits:{health:5}
},
{
name:"Nurse Practitioner", medianSalary:126000, growthPercent:38,
recommendedMajors:[{majors:["Nursing"]}],
traits:{health:5}
},
{
name:"Physician Assistant", medianSalary:130000, growthPercent:27,
recommendedMajors:[{majors:["Physician Assistant Studies"]}],
traits:{health:5}
},
{
name:"Medical Assistant", medianSalary:38000, growthPercent:14,
recommendedMajors:[{majors:["Medical Assisting"]}],
traits:{health:4}
},
{
name:"Pharmacist", medianSalary:132750, growthPercent:2,
recommendedMajors:[{majors:["Pharmacy"]}],
traits:{health:5}
},
{
name:"Pharmacy Technician", medianSalary:40000, growthPercent:5,
recommendedMajors:[{majors:["Pharmacy Technology"]}],
traits:{health:3}
},
{
name:"Physical Therapist", medianSalary:99710, growthPercent:21,
recommendedMajors:[{majors:["Physical Therapy"]}],
traits:{health:5}
},
{
name:"Physical Therapy Assistant", medianSalary:61000, growthPercent:24,
recommendedMajors:[{majors:["PT Assisting"]}],
traits:{health:4}
},
{
name:"Occupational Therapist", medianSalary:87050, growthPercent:17,
recommendedMajors:[{majors:["Occupational Therapy"]}],
traits:{health:5}
},
{
name:"Speech-Language Pathologist", medianSalary:81000, growthPercent:21,
recommendedMajors:[{majors:["Speech-Language Pathology"]}],
traits:{health:5}
},
{
name:"Respiratory Therapist", medianSalary:77000, growthPercent:13,
recommendedMajors:[{majors:["Respiratory Therapy"]}],
traits:{health:5}
},
{
name:"Radiologic Technologist", medianSalary:73000, growthPercent:6,
recommendedMajors:[{majors:["Radiologic Technology"]}],
traits:{health:4}
},
{
name:"Radiation Therapist", medianSalary:89000, growthPercent:3,
recommendedMajors:[{majors:["Radiation Therapy"]}],
traits:{health:5}
},
{
name:"Dietitian", medianSalary:69000, growthPercent:7,
recommendedMajors:[{majors:["Nutrition","Dietetics"]}],
traits:{health:5}
},
{
name:"Dentist", medianSalary:164010, growthPercent:3,
recommendedMajors:[{majors:["Dentistry"]}],
traits:{health:5}
},
{
name:"Dental Hygienist", medianSalary:81400, growthPercent:7,
recommendedMajors:[{majors:["Dental Hygiene"]}],
traits:{health:4}
},
{
name:"Optometrist", medianSalary:125000, growthPercent:9,
recommendedMajors:[{majors:["Optometry"]}],
traits:{health:5}
},
{
name:"Chiropractor", medianSalary:85000, growthPercent:9,
recommendedMajors:[{majors:["Chiropractic Studies"]}],
traits:{health:5}
},
{
name:"Psychologist", medianSalary:92740, growthPercent:8,
recommendedMajors:[{majors:["Psychology"]}],
traits:{health:4}
},
{
name:"School Counselor", medianSalary:62000, growthPercent:5,
recommendedMajors:[{majors:["School Counseling"]}],
traits:{education:5}
},
{
name:"Social Worker", medianSalary:58380, growthPercent:13,
recommendedMajors:[{majors:["Social Work"]}],
traits:{health:4}
},
{
name:"Substance Abuse Counselor", medianSalary:49000, growthPercent:18,
recommendedMajors:[{majors:["Counseling"]}],
traits:{health:4}
},
{
name:"Teacher (Elementary)", medianSalary:61000, growthPercent:4,
recommendedMajors:[{majors:["Education"]}],
traits:{education:5}
},
{
name:"Teacher (High School)", medianSalary:62000, growthPercent:4,
recommendedMajors:[{majors:["Education"]}],
traits:{education:5}
},
{
name:"Special Education Teacher", medianSalary:65000, growthPercent:0,
recommendedMajors:[{majors:["Special Education"]}],
traits:{education:5}
},
{
name:"Professor", medianSalary:80000, growthPercent:12,
recommendedMajors:[{majors:["Subject Area","Education"]}],
traits:{education:5}
},
{
name:"Lawyer", medianSalary:135740, growthPercent:9,
recommendedMajors:[{majors:["Law"]}],
traits:{law:5}
},
{
name:"Paralegal", medianSalary:59200, growthPercent:12,
recommendedMajors:[{majors:["Paralegal Studies"]}],
traits:{law:3}
},
{
name:"Judge", medianSalary:148910, growthPercent:4,
recommendedMajors:[{majors:["Law"]}],
traits:{law:5}
},
{
name:"Court Reporter", medianSalary:60000, growthPercent:3,
recommendedMajors:[{majors:["Court Reporting"]}],
traits:{law:4,language:3}
},
{
name:"Police Officer", medianSalary:67000, growthPercent:3,
recommendedMajors:[{majors:["Criminal Justice"]}],
traits:{law:4}
},
{
name:"Detective", medianSalary:91000, growthPercent:1,
recommendedMajors:[{majors:["Criminal Justice"]}],
traits:{law:5}
},
{
name:"Firefighter", medianSalary:51000, growthPercent:4,
recommendedMajors:[{majors:["Fire Science"]}],
traits:{health:3}
},
{
name:"Emergency Medical Technician", medianSalary:38000, growthPercent:6,
recommendedMajors:[{majors:["Emergency Medical Services"]}],
traits:{health:4}
},
{
name:"Paramedic", medianSalary:46000, growthPercent:6,
recommendedMajors:[{majors:["Emergency Medical Services"]}],
traits:{health:4}
},
{
name:"Urban Planner", medianSalary:79540, growthPercent:7,
recommendedMajors:[{majors:["Urban Planning"]}],
traits:{government:4}
},
{
name:"Public Administrator", medianSalary:85000, growthPercent:6,
recommendedMajors:[{majors:["Public Administration"]}],
traits:{government:4}
},
{
name:"Economist", medianSalary:113940, growthPercent:6,
recommendedMajors:[{majors:["Economics"]}],
traits:{math:4}
},
{
name:"Statistician", medianSalary:104000, growthPercent:33,
recommendedMajors:[{majors:["Statistics","Mathematics"]}],
traits:{math:5}
},
{
name:"Actuary", medianSalary:120000, growthPercent:23,
recommendedMajors:[{majors:["Actuarial Science"]}],
traits:{math:5}
},
{
name:"Mathematician", medianSalary:112110, growthPercent:31,
recommendedMajors:[{majors:["Mathematics"]}],
traits:{math:5}
},
{
name:"Biochemist", medianSalary:103810, growthPercent:15,
recommendedMajors:[{majors:["Biochemistry"]}],
traits:{science:5}
},
{
name:"Microbiologist", medianSalary:79000, growthPercent:5,
recommendedMajors:[{majors:["Microbiology"]}],
traits:{science:5}
},
{
name:"Geoscientist", medianSalary:83000, growthPercent:5,
recommendedMajors:[{majors:["Geology"]}],
traits:{science:4}
},
{
name:"Marine Biologist", medianSalary:75000, growthPercent:5,
recommendedMajors:[{majors:["Marine Biology"]}],
traits:{science:4,environment:5}
},
{
name:"Agricultural Scientist", medianSalary:74000, growthPercent:8,
recommendedMajors:[{majors:["Agriculture"]}],
traits:{science:4}
},
{
name:"Genetic Counselor", medianSalary:89000, growthPercent:18,
recommendedMajors:[{majors:["Genetics"]}],
traits:{health:4,science:4}
},
{
name:"Epidemiologist", medianSalary:78000, growthPercent:27,
recommendedMajors:[{majors:["Public Health"]}],
traits:{health:4,science:4}
},
{
name:"Medical Scientist", medianSalary:99000, growthPercent:17,
recommendedMajors:[{majors:["Biomedical Science"]}],
traits:{health:5,science:5}
},
{
name:"Surgeon", medianSalary:310000, growthPercent:3,
recommendedMajors:[{majors:["Medicine"]}],
traits:{health:5}
},
{
name:"Physician", medianSalary:208000, growthPercent:3,
recommendedMajors:[{majors:["Medicine"]}],
traits:{health:5}
},
{
name:"Pediatrician", medianSalary:190000, growthPercent:3,
recommendedMajors:[{majors:["Medicine"]}],
traits:{health:5}
},
{
name:"Psychiatrist", medianSalary:247000, growthPercent:7,
recommendedMajors:[{majors:["Medicine","Psychiatry"]}],
traits:{health:5}
},
{
name:"Pathologist", medianSalary:240000, growthPercent:3,
recommendedMajors:[{majors:["Medicine"]}],
traits:{health:5}
},
{
name:"Anesthesiologist", medianSalary:330000, growthPercent:3,
recommendedMajors:[{majors:["Medicine"]}],
traits:{health:5}
},
{
name:"Orthopedic Surgeon", medianSalary:300000, growthPercent:3,
recommendedMajors:[{majors:["Medicine"]}],
traits:{health:5}
},
{
name:"Dermatologist", medianSalary:280000, growthPercent:3,
recommendedMajors:[{majors:["Medicine"]}],
traits:{health:5}
},
{
name:"Ophthalmologist", medianSalary:270000, growthPercent:3,
recommendedMajors:[{majors:["Medicine"]}],
traits:{health:5}
},
{
name:"Radiologist", medianSalary:301000, growthPercent:3,
recommendedMajors:[{majors:["Medicine"]}],
traits:{health:5}
},
{
name:"Podiatrist", medianSalary:148000, growthPercent:2,
recommendedMajors:[{majors:["Podiatric Medicine"]}],
traits:{health:5}
},
{
name:"Audiologist", medianSalary:82000, growthPercent:10,
recommendedMajors:[{majors:["Audiology"]}],
traits:{health:4}
},
{
name:"Optician", medianSalary:45000, growthPercent:4,
recommendedMajors:[{majors:["Opticianry"]}],
traits:{health:3}
},
{
name:"Massage Therapist", medianSalary:46000, growthPercent:20,
recommendedMajors:[{majors:["Massage Therapy"]}],
traits:{health:3}
},
{
name:"Fitness Trainer", medianSalary:45000, growthPercent:14,
recommendedMajors:[{majors:["Exercise Science"]}],
traits:{health:3}
},
{
name:"Athletic Trainer", medianSalary:57000, growthPercent:17,
recommendedMajors:[{majors:["Athletic Training"]}],
traits:{health:4}
},
{
name:"Sports Coach", medianSalary:46000, growthPercent:9,
recommendedMajors:[{majors:["Sports Science"]}],
traits:{education:3}
},
{
name:"Referee", medianSalary:35000, growthPercent:8,
recommendedMajors:[{majors:["Sports Management"]}],
traits:{education:2}
},
{
name:"Sports Analyst", medianSalary:72000, growthPercent:9,
recommendedMajors:[{majors:["Sports Analytics"]}],
traits:{math:3}
},
{
name:"Personal Trainer", medianSalary:45000, growthPercent:14,
recommendedMajors:[{majors:["Exercise Science"]}],
traits:{health:3}
},
{
name:"Recreation Therapist", medianSalary:57000, growthPercent:4,
recommendedMajors:[{majors:["Recreation Therapy"]}],
traits:{health:4}
},
{
name:"Tour Guide", medianSalary:36000, growthPercent:3,
recommendedMajors:[{majors:["Hospitality"]}],
traits:{language:2}
},
{
name:"Travel Agent", medianSalary:47000, growthPercent:-9,
recommendedMajors:[{majors:["Hospitality"]}],
traits:{business:3}
},
{
name:"Transportation Engineer", medianSalary:98700, growthPercent:6,
recommendedMajors:[{majors:["Civil Engineering","Transportation Engineering"]}],
traits:{engineering:5,math:4}
},
{
name:"Traffic Engineer", medianSalary:98700, growthPercent:6,
recommendedMajors:[{majors:["Civil Engineering"]}],
traits:{engineering:5,math:4}
},
{
name:"Structural Drafter", medianSalary:60000, growthPercent:2,
recommendedMajors:[{majors:["Drafting","Engineering Technology"]}],
traits:{engineering:4,design:3}
},
{
name:"CAD Technician", medianSalary:62000, growthPercent:2,
recommendedMajors:[{majors:["Drafting","CAD Technology"]}],
traits:{engineering:4,technology:3}
},
{
name:"BIM Specialist", medianSalary:75000, growthPercent:8,
recommendedMajors:[{majors:["Construction Management","Engineering"]}],
traits:{engineering:4,technology:4}
},
{
name:"Surveying Technician", medianSalary:48000, growthPercent:3,
recommendedMajors:[{majors:["Surveying","Geomatics"]}],
traits:{engineering:3,math:3}
},
{
name:"Zoning Administrator", medianSalary:78000, growthPercent:4,
recommendedMajors:[{majors:["Urban Planning","Public Administration"]}],
traits:{government:4}
},
{
name:"Construction Inspector", medianSalary:64000, growthPercent:1,
recommendedMajors:[{majors:["Construction Management"]}],
traits:{engineering:3}
},
{
name:"Building Inspector", medianSalary:66000, growthPercent:0,
recommendedMajors:[{majors:["Construction Management"]}],
traits:{engineering:3}
},
{
name:"Cost Estimator", medianSalary:71000, growthPercent:2,
recommendedMajors:[{majors:["Construction Management","Finance"]}],
traits:{math:4,business:3}
},
{
name:"Quantity Surveyor", medianSalary:72000, growthPercent:2,
recommendedMajors:[{majors:["Construction Management"]}],
traits:{math:4}
},
{
name:"Real Estate Appraiser", medianSalary:61000, growthPercent:3,
recommendedMajors:[{majors:["Finance","Real Estate"]}],
traits:{math:3,business:4}
},
{
name:"Real Estate Developer", medianSalary:90000, growthPercent:4,
recommendedMajors:[{majors:["Business","Real Estate","Finance"]}],
traits:{business:5}
},
{
name:"Leasing Consultant", medianSalary:38000, growthPercent:4,
recommendedMajors:[{majors:["Business","Real Estate"]}],
traits:{business:3}
},
{
name:"Title Examiner", medianSalary:57000, growthPercent:-2,
recommendedMajors:[{majors:["Legal Studies","Business"]}],
traits:{law:3}
},
{
name:"Escrow Officer", medianSalary:60000, growthPercent:1,
recommendedMajors:[{majors:["Finance","Business"]}],
traits:{business:4}
},
{
name:"Logistics Analyst", medianSalary:78000, growthPercent:18,
recommendedMajors:[{majors:["Supply Chain Management","Business Analytics"]}],
traits:{business:4,math:3}
},
{
name:"Supply Chain Analyst", medianSalary:80000, growthPercent:18,
recommendedMajors:[{majors:["Supply Chain Management"]}],
traits:{business:4,math:3}
},
{
name:"Procurement Specialist", medianSalary:72000, growthPercent:6,
recommendedMajors:[{majors:["Business","Supply Chain Management"]}],
traits:{business:4}
},
{
name:"Purchasing Manager", medianSalary:131000, growthPercent:6,
recommendedMajors:[{majors:["Business","Supply Chain Management"]}],
traits:{business:5}
},
{
name:"Warehouse Manager", medianSalary:62000, growthPercent:5,
recommendedMajors:[{majors:["Business","Logistics"]}],
traits:{business:4}
},
{
name:"Distribution Manager", medianSalary:98000, growthPercent:4,
recommendedMajors:[{majors:["Business","Logistics"]}],
traits:{business:4}
},
{
name:"Inventory Planner", medianSalary:65000, growthPercent:4,
recommendedMajors:[{majors:["Business","Supply Chain Management"]}],
traits:{math:3,business:4}
},
{
name:"Demand Planner", medianSalary:78000, growthPercent:8,
recommendedMajors:[{majors:["Business Analytics","Supply Chain"]}],
traits:{math:4,business:4}
},
{
name:"Operations Analyst", medianSalary:83000, growthPercent:23,
recommendedMajors:[{majors:["Business Analytics","Operations Management"]}],
traits:{math:4,business:4}
},
{
name:"Process Improvement Specialist", medianSalary:82000, growthPercent:8,
recommendedMajors:[{majors:["Business","Industrial Engineering"]}],
traits:{engineering:3,business:4}
},
{
name:"Quality Assurance Analyst", medianSalary:85000, growthPercent:25,
recommendedMajors:[{majors:["Computer Science","Information Systems"]}],
traits:{technology:4}
},
{
name:"Six Sigma Specialist", medianSalary:95000, growthPercent:8,
recommendedMajors:[{majors:["Business","Industrial Engineering"]}],
traits:{math:4,business:4}
},
{
name:"Business Operations Manager", medianSalary:103000, growthPercent:6,
recommendedMajors:[{majors:["Business Administration"]}],
traits:{business:5}
},
{
name:"Project Coordinator", medianSalary:56000, growthPercent:7,
recommendedMajors:[{majors:["Business Administration"]}],
traits:{business:4}
},
{
name:"Program Manager", medianSalary:120000, growthPercent:7,
recommendedMajors:[{majors:["Business Administration"]}],
traits:{business:5}
},
{
name:"Scrum Master", medianSalary:115000, growthPercent:10,
recommendedMajors:[{majors:["Business","Computer Science"]}],
traits:{business:4,technology:3}
},
{
name:"Agile Coach", medianSalary:130000, growthPercent:10,
recommendedMajors:[{majors:["Business","Computer Science"]}],
traits:{business:5,technology:3}
},
{
name:"Technical Writer", medianSalary:79000, growthPercent:7,
recommendedMajors:[{majors:["Technical Writing","English","Communications"]}],
traits:{writing:5,technology:3}
},
{
name:"Documentation Specialist", medianSalary:75000, growthPercent:7,
recommendedMajors:[{majors:["Technical Writing","Communications"]}],
traits:{writing:5}
},
{
name:"Content Strategist", medianSalary:85000, growthPercent:10,
recommendedMajors:[{majors:["Marketing","Communications"]}],
traits:{writing:4,business:4}
},
{
name:"Copywriter", medianSalary:73000, growthPercent:4,
recommendedMajors:[{majors:["Marketing","English","Communications"]}],
traits:{writing:5,creativity:4}
},
{
name:"Editor", medianSalary:73000, growthPercent:-5,
recommendedMajors:[{majors:["English","Journalism"]}],
traits:{writing:5}
},
{
name:"Proofreader", medianSalary:51000, growthPercent:-3,
recommendedMajors:[{majors:["English"]}],
traits:{writing:5}
},
{
name:"Translator", medianSalary:57000, growthPercent:4,
recommendedMajors:[{majors:["Foreign Languages","Linguistics"]}],
traits:{language:5}
},
{
name:"Interpreter", medianSalary:57000, growthPercent:4,
recommendedMajors:[{majors:["Foreign Languages","Linguistics"]}],
traits:{language:5}
},
{
name:"Sign Language Interpreter", medianSalary:57000, growthPercent:4,
recommendedMajors:[{majors:["American Sign Language","Interpreting"]}],
traits:{language:5}
},
{
name:"Public Relations Specialist", medianSalary:67000, growthPercent:6,
recommendedMajors:[{majors:["Public Relations","Communications"]}],
traits:{business:4,communication:5}
},
{
name:"Media Planner", medianSalary:76000, growthPercent:6,
recommendedMajors:[{majors:["Marketing","Advertising"]}],
traits:{business:4}
},
{
name:"Brand Strategist", medianSalary:98000, growthPercent:8,
recommendedMajors:[{majors:["Marketing","Business"]}],
traits:{business:5,creativity:4}
},
{
name:"Market Research Analyst", medianSalary:74000, growthPercent:13,
recommendedMajors:[{majors:["Marketing","Business Analytics"]}],
traits:{business:4,math:3}
},
{
name:"SEO Specialist", medianSalary:75000, growthPercent:8,
recommendedMajors:[{majors:["Marketing","Information Technology"]}],
traits:{technology:4,business:4}
},
{
name:"SEM Specialist", medianSalary:78000, growthPercent:8,
recommendedMajors:[{majors:["Marketing","Information Technology"]}],
traits:{technology:4,business:4}
},
{
name:"Social Media Strategist", medianSalary:68000, growthPercent:10,
recommendedMajors:[{majors:["Marketing","Communications"]}],
traits:{creativity:4,business:3}
},
{
name:"Influencer Manager", medianSalary:72000, growthPercent:10,
recommendedMajors:[{majors:["Marketing","Communications"]}],
traits:{business:4}
},
{
name:"Event Planner", medianSalary:52000, growthPercent:7,
recommendedMajors:[{majors:["Hospitality","Event Management"]}],
traits:{organization:5}
},
{
name:"Conference Coordinator", medianSalary:54000, growthPercent:7,
recommendedMajors:[{majors:["Hospitality","Event Management"]}],
traits:{organization:5}
},
{
name:"Wedding Planner", medianSalary:50000, growthPercent:7,
recommendedMajors:[{majors:["Hospitality","Event Management"]}],
traits:{organization:5,creativity:4}
},
{
name:"Travel Consultant", medianSalary:47000, growthPercent:-9,
recommendedMajors:[{majors:["Hospitality","Tourism"]}],
traits:{business:3}
},
{
name:"Tour Manager", medianSalary:62000, growthPercent:3,
recommendedMajors:[{majors:["Hospitality","Tourism"]}],
traits:{organization:4}
},
{
name:"Hospitality Manager", medianSalary:62000, growthPercent:4,
recommendedMajors:[{majors:["Hospitality Management"]}],
traits:{business:4}
},
{
name:"Restaurant Manager", medianSalary:56000, growthPercent:1,
recommendedMajors:[{majors:["Hospitality Management","Business"]}],
traits:{business:4}
},
{
name:"Casino Manager", medianSalary:78000, growthPercent:3,
recommendedMajors:[{majors:["Hospitality Management","Business"]}],
traits:{business:4}
},
{
name:"Cruise Director", medianSalary:60000, growthPercent:4,
recommendedMajors:[{majors:["Hospitality","Tourism"]}],
traits:{organization:4}
},
{
name:"Flight Attendant", medianSalary:68000, growthPercent:11,
recommendedMajors:[{majors:["Hospitality","Communications"]}],
traits:{service:5}
},
{
name:"Air Traffic Controller", medianSalary:132000, growthPercent:1,
recommendedMajors:[{majors:["Air Traffic Management"]}],
traits:{focus:5}
},
{
name:"Commercial Pilot", medianSalary:150000, growthPercent:6,
recommendedMajors:[{majors:["Aviation"]}],
traits:{technology:4,focus:5}
},
{
name:"Fashion Designer", medianSalary:77000, growthPercent:3,
recommendedMajors:[{majors:["Fashion Design"]}],
traits:{creativity:5,design:5}
},
{
name:"Graphic Designer", medianSalary:58000, growthPercent:3,
recommendedMajors:[{majors:["Graphic Design"]}],
traits:{creativity:5,design:5}
},
{
name:"Industrial Designer", medianSalary:76000, growthPercent:2,
recommendedMajors:[{majors:["Industrial Design"]}],
traits:{design:5,engineering:3}
},
{
name:"Interior Designer", medianSalary:62000, growthPercent:4,
recommendedMajors:[{majors:["Interior Design"]}],
traits:{design:5,creativity:4}
},
{
name:"UX Designer", medianSalary:98000, growthPercent:16,
recommendedMajors:[{majors:["UX Design","Human-Computer Interaction"]}],
traits:{design:5,technology:4}
},
{
name:"UI Designer", medianSalary:95000, growthPercent:16,
recommendedMajors:[{majors:["UX/UI Design","Graphic Design"]}],
traits:{design:5,technology:4}
},
{
name:"Animator", medianSalary:98000, growthPercent:8,
recommendedMajors:[{majors:["Animation"]}],
traits:{creativity:5,technology:3}
},
{
name:"Video Editor", medianSalary:65000, growthPercent:7,
recommendedMajors:[{majors:["Film Production","Media"]}],
traits:{creativity:4,technology:3}
},
{
name:"Film Director", medianSalary:85000, growthPercent:8,
recommendedMajors:[{majors:["Film","Media Production"]}],
traits:{creativity:5,leadership:4}
},
{
name:"Producer", medianSalary:85000, growthPercent:8,
recommendedMajors:[{majors:["Film","Media Production"]}],
traits:{business:4,creativity:4}
},
{
name:"Photographer", medianSalary:40000, growthPercent:4,
recommendedMajors:[{majors:["Photography"]}],
traits:{creativity:5}
},
{
name:"Art Director", medianSalary:105000, growthPercent:6,
recommendedMajors:[{majors:["Art","Graphic Design"]}],
traits:{creativity:5,leadership:4}
},
{
name:"Museum Curator", medianSalary:60000, growthPercent:11,
recommendedMajors:[{majors:["History","Art History"]}],
traits:{history:5}
},
{
name:"Archivist", medianSalary:58000, growthPercent:11,
recommendedMajors:[{majors:["History","Library Science"]}],
traits:{history:5}
},
{
name:"Librarian", medianSalary:61000, growthPercent:6,
recommendedMajors:[{majors:["Library Science"]}],
traits:{education:4}
},
{
name:"Historian", medianSalary:64000, growthPercent:3,
recommendedMajors:[{majors:["History"]}],
traits:{history:5}
},
{
name:"Political Scientist", medianSalary:128000, growthPercent:7,
recommendedMajors:[{majors:["Political Science"]}],
traits:{government:5}
},
{
name:"Sociologist", medianSalary:101000, growthPercent:5,
recommendedMajors:[{majors:["Sociology"]}],
traits:{socialScience:5}
},
{
name:"Anthropologist", medianSalary:63000, growthPercent:6,
recommendedMajors:[{majors:["Anthropology"]}],
traits:{socialScience:5}
},
{
name:"Archaeologist", medianSalary:63000, growthPercent:6,
recommendedMajors:[{majors:["Archaeology","Anthropology"]}],
traits:{history:5}
},
{
name:"Economics Professor", medianSalary:110000, growthPercent:8,
recommendedMajors:[{majors:["Economics"]}],
traits:{education:5}
},
{
name:"Psychology Professor", medianSalary:82000, growthPercent:8,
recommendedMajors:[{majors:["Psychology"]}],
traits:{education:5}
},
{
name:"Engineering Professor", medianSalary:120000, growthPercent:8,
recommendedMajors:[{majors:["Engineering"]}],
traits:{education:5}
},
{
name:"Law Professor", medianSalary:145000, growthPercent:8,
recommendedMajors:[{majors:["Law"]}],
traits:{education:5,law:5}
},
{
name:"Medical Professor", medianSalary:180000, growthPercent:8,
recommendedMajors:[{majors:["Medicine"]}],
traits:{education:5,health:5}
},
{
name:"College Counselor", medianSalary:60000, growthPercent:10,
recommendedMajors:[{majors:["Counseling","Education"]}],
traits:{education:4}
},
{
name:"School Psychologist", medianSalary:81000, growthPercent:6,
recommendedMajors:[{majors:["School Psychology"]}],
traits:{health:4,education:4}
},
{
name:"Guidance Counselor", medianSalary:60000, growthPercent:10,
recommendedMajors:[{majors:["Counseling"]}],
traits:{education:4}
},
{
name:"Special Education Teacher", medianSalary:65000, growthPercent:3,
recommendedMajors:[{majors:["Special Education"]}],
traits:{education:5}
},
{
name:"ESL Teacher", medianSalary:60000, growthPercent:4,
recommendedMajors:[{majors:["Education","TESOL"]}],
traits:{education:4,language:4}
}
];


let questions = [];
let index = 0;
let traits = {};

function start(mode){

document.getElementById("mode").style.display="none";
document.getElementById("prog-area").style.display="block";
document.getElementById("quiz").style.display="block";

traits = {};
index = 0;

questions = mode==="basic"
? [subjectQuestion, ...coreQuestions.slice(0,24)]
: [subjectQuestion, ...coreQuestions];

render();
}

function render(){
const q = questions[index];

document.getElementById("counter").innerText =
`Question ${index+1} of ${questions.length}`;

document.getElementById("bar").style.width =
`${(index/questions.length)*100}%`;

document.getElementById("q").innerHTML =
`<h3>${q.text}</h3>` +
q.options.map((o,i)=>`
<label>
<input type="${q.multi?'checkbox':'radio'}" name="a" value="${i}">
<span>${o.text}</span>
</label>`).join("");
}

function nextQ(){

const selected =
document.querySelectorAll("input[name=a]:checked");

if(selected.length===0){
alert("Select at least one option");
return;
}

selected.forEach(s=>{
const opt = questions[index].options[s.value];
for(let t in opt.traits){
traits[t]=(traits[t]||0)+opt.traits[t];
}
});

index++;
index>=questions.length ? showResults() : render();
}


function showResults() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("prog-area").style.display = "none";
    document.getElementById("results").style.display = "block";

    const ranked = careers.map(c => {
        let score = 0;
        for (let t in c.traits) score += (traits[t] || 0) * c.traits[t];
        return { ...c, score };
    }).sort((a, b) => b.score - a.score).slice(0, 3);

    const max = ranked[0]?.score || 1;

    document.getElementById("out").innerHTML = ranked.map(c => `
        <div class="result-item">
            <div style="flex-grow: 1;">
                <h3 style="margin:0">${c.name} — ${Math.round((c.score / max) * 100)}% Match</h3>
                
                <p style="margin:5px 0">
                    <b>Median Salary:</b> $${c.medianSalary?.toLocaleString() || "N/A"}<br>
                    ${c.growthPercent ? `<b>Job Outlook:</b> ${c.growthPercent}% growth<br>` : ""}
                    ${c.recommendedMajors && c.recommendedMajors[0] ? `<b>Majors:</b> ${c.recommendedMajors[0].majors.join(", ")}` : ""}
                </p>
            </div>
            
            <button class="ai-chat-btn" onclick="chatWithAI('${c.name}')">Talk to coach</button>
        </div>
    `).join("");
}

function chatWithAI(careerName) {
    localStorage.clear();
    localStorage.setItem("dreamCareer", careerName);
    window.location.href = "dashboard.html";
}

function resetApp() {
    location.reload();
}