
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

/*quiz one*/

const quizData = [
    {
      question: "Does every tag have a closing tag?",
      options: ["Yes", "No"],
      answer: "No"
    },
    {
      question: "What tag will make an unordered list?",
      options: ["ol", "p", "img", "ul"],
      answer: "ul"
    },
    {
        question: "Which heading tag makes the smallest heading?",
        options: ["h1", "h7", "h6", "h3"],
        answer: "h6"
    },
    {
        question: "How do you bold a text?",
        options: ["b", "em", "i", "p"],
        answer: "b"
    },
    {
        question: "Which of the following will move the text to the next line?",
        options: ["A space bar", "Press enter", "The break tag", "We haven't learned this yet"],
        answer: "The break tag"
    }
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
