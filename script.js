const quizData = [
  {
    question: "Who won the Cricket World Cup 2023?",
    a: "India",
    b: "West Indies",
    c: "England",
    d: "Australia",
    correct: "d",
  },
  {
    question: "What is the nationality of  Max Verstappen?",
    a: "Dutch",
    b: "Italian",
    c: "British",
    d: "Spanish",
    correct: "a",
  },
  {
    question: "Which team does Cristiano Ronaldo play for?",
    a: "Juventus",
    b: "Al- Nassr",
    c: "Real Madrid",
    d: "Al-Ahli",
    correct: "b",
  },
  {
    question: "Who won Australian Open 2024 Men's Singles?",
    a: "Novak Djokovic",
    b: "Jannik Sinner",
    c: "Danil Medvedev",
    d: "Alexander Zverev",
    correct: "b",
  },
  {
    question: "Who is the Current Open Chess World Champion?",
    a: "Hikaru Nakamura",
    b: "Ding Liren",
    c: "Magnus  Carlsen",
    d: "Fabiano  Caruana",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
