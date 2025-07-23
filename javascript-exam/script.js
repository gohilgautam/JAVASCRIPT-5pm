const questions = [
  {
    question: "What does HTML stand for?",
    options: ["High Text Markup Language", "Hypertext Marketing Language", "Hypertext Markup Language", "Hypertext Makeup Language"],
    answer: 2
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: 2
  },
  {
    question: "What does 'document.getElementById()' do in JavaScript?",
    options: [
      "Selects an element by class",
      "Selects all elements",
      "Selects an element by ID",
      "Creates a new element"
    ],
    answer: 2
  },
  {
    question: "When was the JavaScript language first introduced?",
    options: ["1997", "1995", "1996", "1992"],
    answer: 1
  },
  {
    question: "who created a JavaScript?",
    options: ["Brendan Eich", "Håkon Wium Lie", "Jordan Walke", "Dennis Ritchie"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswers = new Array(questions.length).fill(null);
let timeLeft = 20;
let timer;

const questionText = document.getElementById("questionText");
const optionList = document.getElementById("optionList");
const timerDisplay = document.getElementById("timer");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const progressText = document.getElementById("progressText");
const resultBox = document.getElementById("resultBox");
const scoreText = document.getElementById("scoreText");

function loadQuestion(index) {
  clearInterval(timer);
  timeLeft = 20;
  updateTimer();
  timer = setInterval(countdown, 1000);

  const current = questions[index];
  questionText.textContent = current.question;
  optionList.innerHTML = "";

  current.options.forEach((opt, i) => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.onclick = () => selectOption(i);
    if (selectedAnswers[index] === i) li.classList.add("selected");
    optionList.appendChild(li);
  });

  prevBtn.disabled = index === 0;
  nextBtn.textContent = index === questions.length - 1 ? "Submit" : "Next";
  progressText.textContent = `${index + 1} of ${questions.length} Questions`;
}

function selectOption(index) {
  selectedAnswers[currentQuestion] = index;
  const options = optionList.querySelectorAll("li");
  options.forEach(opt => opt.classList.remove("selected"));
  options[index].classList.add("selected");
}

function countdown() {
  timeLeft--;
  updateTimer();

  if (timeLeft <= 0) {
    clearInterval(timer);
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      loadQuestion(currentQuestion);
    }
  }
}

function updateTimer() {
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;
}

nextBtn.onclick = () => {
  if (nextBtn.textContent === "Submit") {
    finishQuiz();
  } else {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      loadQuestion(currentQuestion);
    }
  }
};

prevBtn.onclick = () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion(currentQuestion);
  }
};

function finishQuiz() {
  clearInterval(timer);
  document.querySelector(".navigation").style.display = "none";
  questionText.style.display = "none";
  optionList.style.display = "none";
  timerDisplay.style.display = "none";
  progressText.style.display = "none";

  resultBox.style.display = "block";

  score = selectedAnswers.reduce((acc, selected, idx) => {
    return selected === questions[idx].answer ? acc + 1 : acc;
  }, 0);

  scoreText.textContent = `Your Score: ${score} / ${questions.length}`;
}
loadQuestion(currentQuestion);
