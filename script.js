const questions = [

/* ================= PART 1 : MCQ ================= */

{
  type: "mcq",
  q: "According to the modern concept, control is:",
  options: [
    "A reactive process after errors occur",
    "A foreseeing action",
    "Only for top management",
    "An optional function"
  ],
  a: 1
},
{
  type: "mcq",
  q: "The basic objective of controlling is to:",
  options: [
    "Increase the number of employees",
    "Ensure tasks are appropriately executed",
    "Change the organizational structure",
    "Eliminate the need for planning"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Which is the first step in the control process?",
  options: [
    "Measuring actual performance",
    "Taking corrective action",
    "Establishing objectives and standards",
    "Comparing results with standards"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Input standards measure ___ while output standards measure ___",
  options: [
    "Results / Work efforts",
    "Work efforts / Performance results",
    "Costs / Revenues",
    "Time / Discipline"
  ],
  a: 1
},
{
  type: "mcq",
  q: "A hospital manager checks nursing hours per patient day. This is:",
  options: [
    "Output standard",
    "Input standard",
    "Feedback control",
    "Financial control"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Benchmarking is mainly used in which step of control?",
  options: [
    "Establishing standards",
    "Measuring performance",
    "Comparing results with objectives",
    "Taking corrective action"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Management by Exception focuses on:",
  options: [
    "Every detail",
    "Only positive achievements",
    "Significant deviations from standards",
    "Errors of new employees only"
  ],
  a: 2
},
{
  type: "mcq",
  q: "In Management by Exception, an opportunity occurs when:",
  options: [
    "Performance is below standard",
    "Performance is above standard",
    "Standards are unreachable",
    "No deviations occur"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Which type of control occurs before work begins?",
  options: [
    "Concurrent control",
    "Feedback control",
    "Preliminary (Feed-forward) control",
    "External control"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Monitoring a nurse during a procedure to correct immediately is:",
  options: [
    "Preliminary control",
    "Concurrent (Steering) control",
    "Post-action control",
    "Internal control"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Feedback controls are also called:",
  options: [
    "Feed-forward controls",
    "Steering controls",
    "Post-action controls",
    "Preliminary controls"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Cost-effective control means:",
  options: [
    "Cheapest possible",
    "Benefits outweigh costs",
    "No budget needed",
    "Only financial use"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Internal control occurs through:",
  options: [
    "Personal supervision",
    "Formal administrative systems",
    "Self-discipline and motivation",
    "Disciplinary actions"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Which function makes delegation easier?",
  options: ["Planning", "Controlling", "Organizing", "Staffing"],
  a: 1
},
{
  type: "mcq",
  q: "Employee discipline system is an example of:",
  options: [
    "Internal control",
    "Management process control",
    "External control",
    "Financial control"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Liquidity and profitability are parts of:",
  options: [
    "Information and financial controls",
    "Output standards",
    "Preliminary controls",
    "Management process controls"
  ],
  a: 0
},
{
  type: "mcq",
  q: "Which characteristic ensures fairness and objectivity?",
  options: ["Flexibility", "Accuracy", "Understandable", "Realism"],
  a: 1
},
{
  type: "mcq",
  q: "If a standard is unrealistic, the manager should:",
  options: [
    "Punish employees",
    "Adjust the standard",
    "Ignore deviation",
    "Increase supervision"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Progressive discipline uses:",
  options: [
    "Severe punishment",
    "Least extreme reprimand",
    "Only financial penalties",
    "Immediate termination"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Which is NOT a method of comparison?",
  options: ["Historical", "Relative", "Engineering", "Random"],
  a: 3
},
{
  type: "mcq",
  q: "Controlling is inseparable from which function?",
  options: ["Staffing", "Planning", "Directing", "Organizing"],
  a: 1
},
{
  type: "mcq",
  q: "Postoperative wound infection rate is an example of:",
  options: [
    "Input standard",
    "Output standard",
    "Financial standard",
    "Preliminary standard"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Which control characteristic helps cope with uncertainty?",
  options: [
    "Rigidity",
    "Monitoring environmental changes",
    "Focusing on past errors",
    "Reducing managers"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Management process controls include:",
  options: [
    "Asset management",
    "Organizational culture",
    "Liquidity",
    "Merit pay"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Why is feedback important in control?",
  options: [
    "Increase paperwork",
    "Modify behavior",
    "Blame employees",
    "Stop work"
  ],
  a: 1
},

/* ================= PART 2 : TRUE / FALSE ================= */

{ type: "tf", q: "Controlling is only for top-level managers.", a: false },
{ type: "tf", q: "Modern control is a foreseeing action.", a: true },
{ type: "tf", q: "Effective control can exist without planning.", a: false },
{ type: "tf", q: "Standards are benchmarks to measure quality or quantity.", a: true },
{ type: "tf", q: "Number of patients treated is an input standard.", a: false },
{ type: "tf", q: "Measurement must be accurate to detect variances.", a: true },
{ type: "tf", q: "Management by exception saves time and energy.", a: true },
{ type: "tf", q: "Exception refers only to negative performance.", a: false },
{ type: "tf", q: "Concurrent control focuses on activities during work.", a: true },
{ type: "tf", q: "Preliminary control is the most popular type.", a: false },
{ type: "tf", q: "Feedback control focuses on end results.", a: true },
{ type: "tf", q: "External control relies on self-discipline.", a: false },
{ type: "tf", q: "High-quality control systems encourage self-control.", a: true },
{ type: "tf", q: "Effective control must be flexible.", a: true },
{ type: "tf", q: "Control helps detect irregularities and errors.", a: true },
{ type: "tf", q: "If performance meets standard, no recognition is needed.", a: false },
{ type: "tf", q: "Historical comparison uses past performance.", a: true },
{ type: "tf", q: "Merit pay is part of compensation and benefits control.", a: true },
{ type: "tf", q: "Leverage is a management process control.", a: false },
{ type: "tf", q: "Preliminary control is called feed-forward.", a: true },
{ type: "tf", q: "Fair and objective means based on personal feelings.", a: false },
{ type: "tf", q: "Control facilitates goal achievement.", a: true },
{ type: "tf", q: "Control ends when performance is measured.", a: false },
{ type: "tf", q: "Selection and training are management process controls.", a: true },
{ type: "tf", q: "Controlling is about managing risk.", a: true }

];

console.log(questions.length); 
let index = 0;
let answers = Array(questions.length).fill(null);
let reviewMode = false;
let shuffledQuestions = [];
/* ========= ELEMENTS ========= */

const qText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const counter = document.getElementById("counter");
const progress = document.getElementById("progressBar");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result");
const resultScore = document.getElementById("resultScore");
const resultPercent = document.getElementById("resultPercent");
/* ========= OPTIONS ========= */
function shuffleOptions(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function createOption(text, isCorrect) {
  const b = document.createElement("button");
  b.innerText = text;
  b.onclick = () => select(isCorrect, b);
  optionsDiv.appendChild(b);
}
function select(isCorrect, btn) {
  if (answers[index] !== null) return;

  answers[index] = isCorrect;

  const q = shuffledQuestions[index];

  [...optionsDiv.children].forEach(b => {
    b.disabled = true;

    // لو MCQ
    if (q.type === "mcq") {
      const correctText = q.options[q.a];

      if (b.innerText === correctText) {
        b.style.background = "#27ae60"; // الصح أخضر
      } else if (b === btn) {
        b.style.background = "#e74c3c"; // الغلط أحمر
      }
    }

    // لو True / False
    if (q.type === "tf") {
      if (
        (b.innerText === "True" && q.a === true) ||
        (b.innerText === "False" && q.a === false)
      ) {
        b.style.background = "#27ae60";
      } else if (b === btn) {
        b.style.background = "#e74c3c";
      }
    }
  });

  nextBtn.style.display = "inline-block";
}
function startQuiz() {
  index = 0;
  answers = Array(questions.length).fill(null);
  reviewMode = false;

  // ✅ اعمل نسخة بدل ما تغيّر الأصل
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
document.getElementById("questionsBtn").innerText =
  `Questions (${shuffledQuestions.length})`;
  document.getElementById("result").classList.remove("show");
  document.getElementById("home").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  loadQuestion();
}
function loadQuestion() {
  optionsDiv.innerHTML = "";
  nextBtn.style.display = "none";

  const q = shuffledQuestions[index];
  qText.innerText = q.q;
  counter.innerText = `Question ${index + 1} / ${shuffledQuestions.length}`;
  progress.style.width = ((index + 1) / shuffledQuestions.length) * 100 + "%";

  if (q.type === "tf") {
    createOption("True", q.a === true);
createOption("False", q.a === false);
  } else {
    const options = q.options.map((text, i) => ({
  text,
  correct: i === q.a
}));

shuffleOptions(options).forEach(opt => {
  createOption(opt.text, opt.correct);
});
  }
}

function nextQuestion() {
  if (index < questions.length - 1) {
    index++;
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const score = answers.filter(a => a === true).length;
  const percent = Math.round((score / questions.length) * 100);

  // اخفي الكويز
  document.getElementById("quiz").style.display = "none";

  // النصوص
  resultScore.innerText = `Score: ${score} / ${questions.length}`;
  resultPercent.innerText = `Percentage: ${percent}%`;

  let title = "";
  if (percent >= 85) {
    title = "اول دفعععهه يعمممم";
  } else if (percent >= 70) {
    title = "شد شويه يعممم";
  } else {
    title = "انت اخرك تخش كليه البهاييييمممم";
  }

  document.getElementById("resultTitle").innerText = title;

  // أظهر النتيجة بالأنيميشن
  resultBox.classList.add("show");
}
function restartQuiz() {
  document.getElementById("result").classList.remove("show");
  startQuiz();
}
function toggleQuestions() {
  const list = document.getElementById("questionsList");
  list.classList.toggle("show");
  renderQuestionsList();
}

function renderQuestionsList() {
  const list = document.getElementById("questionsList");
  list.innerHTML = "";

  shuffledQuestions.forEach((q, i) => {
    const b = document.createElement("button");
    b.innerText = i + 1;

    if (answers[i] === null) {
      b.className = "q-unanswered";
    } else if (answers[i] === true) {
      b.className = "q-correct";
    } else {
      b.className = "q-wrong";
    }

    if (i === index) {
      b.style.outline = "3px solid #3498db";
    }

    b.onclick = () => {
      index = i;
      loadQuestion();
      renderQuestionsList();
    };

    list.appendChild(b);
  });
}
/* ========= MENU ========= */

const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  sideMenu.classList.toggle("show");
  overlay.classList.toggle("show");
}

function closeMenu() {
  sideMenu.classList.remove("show");
  overlay.classList.remove("show");
}

/* ========= DARK MODE ========= */

function toggleDark() {
  document.body.classList.toggle("dark");
}
