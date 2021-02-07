const quizData = [
  {
    question: "1. What year did Nigeria become idependent?",
    a: "  1957",
    b: "  1958",
    c: "  1959",
    d: "  1960",
    answer: "d",
  },
  {
    question: "2. What programming language is used to style web pages?",
    a: "  HTML",
    b: "  Java",
    c: "  CSS",
    d: "  Python",
    answer: "c",
  },
  {
    question: "3. Who is the founder of Amazon?",
    a: "  Elon Musk",
    b: "  Jeff Bezos",
    c: "  Bill Gates",
    d: "  Larry Page",
    answer: "b",
  },
  {
    question: "4. Which of these countries is in East Africa?",
    a: "  Kenya",
    b: "  Niger",
    c: "  Chad",
    d: "  Namibia",
    answer: "a",
  },
  {
    question: "5. What kind of rock is made from volcanic lava?",
    a: "  Sedimentary",
    b: "  Igneous",
    c: "  Metamorphic",
    d: "  Granite",
    answer: "d",
  },
];

const question = document.getElementById("question");
const atext = document.getElementById("a-text");
const btext = document.getElementById("b-text");
const ctext = document.getElementById("c-text");
const dtext = document.getElementById("d-text");
const submitButton = document.getElementById("submitButton");

let currentQuestion = 0;

loadQuiz();
let answer = undefined;

function loadQuiz() {
  const currentQuizData = quizData[currentQuestion];
  question.innerText = currentQuizData.question;
  atext.innerText = currentQuizData.a;
  btext.innerText = currentQuizData.b;
  ctext.innerText = currentQuizData.c;
  dtext.innerText = currentQuizData.d;
}

// function getSelected() {
//     const answerEls = document.querySelectorAll(".answer");

//     answerEls.forEach((answerEl) => {
//         if(answer.checked) {
//             return answerEl.id;
//         }
        
//     });

//     if(!answer) {
//         return undefined;
//     }
// }



const tog = document.getElementsByClassName("tog");
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    alert("You have finished the test");
  }
}

submitButton.addEventListener("click", nextQuestion);


const duts = document.getElementById("buts")

duts.addEventListener("click" , () => prompt("What is your real name?"));


















