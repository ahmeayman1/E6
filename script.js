const questions = [

/* ================= PART 1 : MCQ (1–20) ================= */

{
  type: "mcq",
  q: "Controlling is the process of measuring performance and taking ________ to ensure goals are achieved.",
  options: ["Planning action", "Corrective action", "Staffing action", "Organizing action"],
  a: 1
},
{
  type: "mcq",
  q: "The first step in the control process is:",
  options: [
    "Measuring actual performance",
    "Comparing results with standards",
    "Establishing standards",
    "Taking corrective action"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Which function is considered a link back to planning?",
  options: ["Organizing", "Staffing", "Controlling", "Directing"],
  a: 2
},
{
  type: "mcq",
  q: "Input standards measure ________ that go into a performance task.",
  options: ["Final results", "Work efforts", "Profits", "Customer satisfaction"],
  a: 1
},
{
  type: "mcq",
  q: "Quality, quantity, cost, and time are examples of:",
  options: ["Input standards", "Output standards", "Preliminary controls", "Feedback"],
  a: 1
},
{
  type: "mcq",
  q: "Which type of control is accomplished before work begins?",
  options: [
    "Concurrent control",
    "Post-action control",
    "Preliminary (Feed-forward) control",
    "Internal control"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Concurrent control takes place:",
  options: [
    "Before the activity",
    "After the activity",
    "During the work activity",
    "Once a year"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Feedback control is also known as:",
  options: [
    "Preliminary control",
    "Steering control",
    "Post-action control",
    "Internal control"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Self-control based on professional values is:",
  options: ["External control", "Internal control", "Post-action control", "Market control"],
  a: 1
},
{
  type: "mcq",
  q: "External control occurs through:",
  options: [
    "Personal supervision and formal systems",
    "Self-discipline",
    "Professional ethics",
    "Trust and values"
  ],
  a: 0
},
{
  type: "mcq",
  q: "Management by Exception focuses on:",
  options: [
    "Every detail",
    "Significant deviations only",
    "Routine tasks",
    "Top management activities"
  ],
  a: 1
},
{
  type: "mcq",
  q: "An effective control system should be:",
  options: [
    "Flexible and economical",
    "Rigid and expensive",
    "Hidden from employees",
    "Subjective"
  ],
  a: 0
},
{
  type: "mcq",
  q: "Post-action control is mainly used to:",
  options: [
    "Fix problems during work",
    "Prevent future problems",
    "Stop work activity",
    "Monitor resources before use"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Liquidity and leverage are examples of:",
  options: ["Human controls", "Financial controls", "Directing tools", "Input standards"],
  a: 1
},
{
  type: "mcq",
  q: "Progressive discipline means:",
  options: [
    "Immediate dismissal",
    "Using the least severe reprimand first",
    "Ignoring mistakes",
    "Equal rewards"
  ],
  a: 1
},
{
  type: "mcq",
  q: "One major importance of control is to:",
  options: [
    "Increase errors",
    "Minimize waste and maximize productivity",
    "Replace planning",
    "Eliminate supervisors"
  ],
  a: 1
},
{
  type: "mcq",
  q: "If actual performance equals the standard, the manager should:",
  options: [
    "Take corrective action",
    "Change the standard",
    "Maintain status quo",
    "Punish staff"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Steering control is another name for:",
  options: [
    "Preliminary control",
    "Concurrent control",
    "Post-action control",
    "Strategic plan"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Forward-looking control means:",
  options: [
    "Looking only at the past",
    "Detecting deviations before they occur",
    "Ignoring current data",
    "Done only by CEO"
  ],
  a: 1
},
{
  type: "mcq",
  q: "A Nursing Information System helps control by:",
  options: [
    "Increasing paperwork",
    "Automated documentation and quality measurement",
    "Reducing patient time",
    "Deleting records"
  ],
  a: 1
},

/* ================= PART 2 : TRUE / FALSE (21–40) ================= */

{ type: "tf", q: "Controlling is the final function of management.", a: true },
{ type: "tf", q: "Planning and controlling are inseparable.", a: true },
{ type: "tf", q: "Output standards measure attendance and punctuality.", a: false },
{ type: "tf", q: "Preliminary control is also called feed-forward control.", a: true },
{ type: "tf", q: "Post-action control helps future planning.", a: true },
{ type: "tf", q: "Internal control requires high trust in employees.", a: true },
{ type: "tf", q: "Controlling is done only by top managers.", a: false },
{ type: "tf", q: "Deviation is the difference between actual and standard.", a: true },
{ type: "tf", q: "Cybernetic control systems are self-regulating.", a: true },
{ type: "tf", q: "Strategic control focuses on long-term survival.", a: true },
{ type: "tf", q: "Corrective action is needed only for significant deviations.", a: true },
{ type: "tf", q: "Formal administrative systems are internal control.", a: false },
{ type: "tf", q: "Effective control systems should be objective.", a: true },
{ type: "tf", q: "MBO can be used as a control tool.", a: true },
{ type: "tf", q: "Controlling is a passive managerial role.", a: false },
{ type: "tf", q: "Feedback control is the most common type.", a: true },
{ type: "tf", q: "Standards should be realistic.", a: true },
{ type: "tf", q: "Control helps make delegation easier.", a: true },
{ type: "tf", q: "Budgetary control is a financial control.", a: true },
{ type: "tf", q: "Control is purely punitive.", a: false },

/* ================= PART 3 : CRITICAL THINKING (41–50) ================= */

{
  type: "mcq",
  q: "Checking crash cart before shift is:",
  options: [
    "Concurrent control",
    "Post-action control",
    "Preliminary control",
    "Internal control"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Correcting technique during dressing change is:",
  options: [
    "Preliminary control",
    "Concurrent control",
    "Feedback control",
    "Strategic control"
  ],
  a: 1
},
{
  type: "mcq",
  q: "If most staff fail a standard, the likely problem is:",
  options: [
    "Lazy staff",
    "Unrealistic standard",
    "No need for control",
    "Post-action failure"
  ],
  a: 1
},
{ type: "tf", q: "Management by Exception ignores minor errors.", a: true },
{
  type: "mcq",
  q: "Feedback control is sometimes too late because:",
  options: [
    "It's expensive",
    "The error already occurred",
    "No manager involved",
    "Only financial"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Comparing infection rates to national standard is step:",
  options: ["First", "Second", "Third", "Fourth"],
  a: 2
},
{ type: "tf", q: "Effective control systems must be economical.", a: true },
{
  type: "mcq",
  q: "Following rules without supervision shows:",
  options: [
    "External control",
    "Internal control",
    "Concurrent control",
    "Feedback control"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Long-term reputation goals require:",
  options: [
    "Operational control",
    "Strategic control",
    "Preliminary control",
    "Input standards"
  ],
  a: 1
},
{ type: "tf", q: "Corrective action may include revising standards.", a: true }

];

console.log(questions.length); // ✅ 50
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