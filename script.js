
function darkMode() {
    let darkm = document.body;
    let lightmode = document.getElementById("dbutt");
    
    darkm.classList.toggle("darknav");

    if (darkm.classList.contains("darknav")) {
        lightmode.innerHTML = "Dark Mode";
        localStorage.setItem("theme", "dark");
    } else {
        lightmode.innerHTML = "Light Mode";
        localStorage.setItem("theme", "light");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let savedTheme = localStorage.getItem("theme");
    let darkm = document.body;
    let lightmode = document.getElementById("dbutt");

    if (savedTheme === "dark") {
        darkm.classList.add("darknav");
        if (lightmode) lightmode.innerHTML = "Dark Mode";
    } else {
        if (lightmode) lightmode.innerHTML = "Light Mode";
    }
});

const lessoh = document.querySelectorAll('h3');
const lessot = document.querySelectorAll('h2');
const lesso = document.getElementById('thelesson');
const bodchg = document.body;


function changeBg() {
    lessoh.forEach(h3 => h3.style.color ="blue");
    lessot.forEach(h2 => h2.style.color = "lightgreen");
    bodchg.style.color = "black";
}



const quizData = [
    {
      question: "What does HMTL stand for?",
      options: ["HyperText Markup Language", "HyperTux Markdown Luggage", "HyperText Markdown Language", "HyperText Maker Language"],
      answer: "HyperText Markup Language"
    },
    {
      question: "What does CSS stand for?",
      options: ["Castle Cool Language", "Customizable Super Styler", "Cascading Style Sheets", "Custom Super Style"],
      answer: "Cascading Style Sheets"
    },
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();