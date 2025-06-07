const questions = [
  {
    question: "What is an ignition system?",
    answers: [
      "A system that generates spark for the engine.",
      "A system that controls fuel injection.",
      "A system that manages exhaust gases."
    ],
    correctAnswer: "A system that generates spark for the engine."
  },
  {
    question: "Which of these is a type of ignition system?",
    answers: [
      "Glow plug ignition system",
      "Magneto ignition system",
      "Battery ignition system",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    question: "What does the ballast resistor do in a battery ignition system?",
    answers: [
      "Regulates the voltage to the ignition coil.",
      "Stores electrical energy for the battery.",
      "Controls the speed of the engine."
    ],
    correctAnswer: "Regulates the voltage to the ignition coil."
  },
  {
    question: "What causes ignition failure?",
    answers: [
      "Faulty spark plugs.",
      "Bad ignition coil.",
      "Both of the above."
    ],
    correctAnswer: "Both of the above."
  },
  {
    question: "How do you test an ignition switch?",
    answers: [
      "Using a multimeter to check for voltage.",
      "By shaking the switch to see if it works.",
      "By checking the wiring visually."
    ],
    correctAnswer: "Using a multimeter to check for voltage."
  }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;

function startGame() {
  loadQuestion();
  startTimer();
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question-container").innerHTML = `<h2>${currentQuestion.question}</h2>`;

  const answersContainer = document.querySelector(".answers-container");
  answersContainer.innerHTML = "";
  currentQuestion.answers.forEach(answer => {
    const answerButton = document.createElement("button");
    answerButton.textContent = answer;
    answerButton.onclick = () => checkAnswer(answer, currentQuestion.correctAnswer);
    answersContainer.appendChild(answerButton);
  });

  document.getElementById("next-button").disabled = true;
}

function checkAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {
    score++;
  }
  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("next-button").disabled = false;
  clearInterval(timer);
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time-left").textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      document.getElementById("next-button").disabled = false;
    }
  }, 1000);
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    timeLeft = 30;
    loadQuestion();
    startTimer();
  } else {
    alert(`Game over! Your final score is: ${score}`);
    resetGame();
  }
}

function resetGame() {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 30;
  loadQuestion();
  startTimer();
}

startGame();
