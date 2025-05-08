const quizQuestions = [
  {
    question: "What area involves application development?",
    answer: "Software Development"
  },
  {
    question: "Which role involves data analysis?",
    answer: "Data Management"
  },
  {
    question: "Which concentration focuses on protecting systems from cyber attacks?",
    answer: "Cybersecurity"
  },
  {
    question: "Which concentration involves designing and managing computer networks?",
    answer: "Networking"
  },
  {
    question: "A Web Developer is likely to specialize in which CIT area?",
    answer: "Software Development"
  },
  {
    question: "A Database Administrator would fall under which concentration?",
    answer: "Data Management"
  },
  {
    question: "Which CIT area covers encryption and information security practices?",
    answer: "Cybersecurity"
  },
  {
    question: "Which CIT concentration covers routing and switching in network infrastructure?",
    answer: "Networking"
  },
  {
    question: "Which of the following is the overarching degree program encompassing all these areas?",
    answer: "Computer Information Technology"
  },
  {
    question: "Which concentration is best suited for developing and testing software applications?",
    answer: "Software Development"
  }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById('questionText');
const optionsDiv   = document.getElementById('options');
const feedback     = document.getElementById('feedback');

function loadQuestion() {
  if (currentQuestion < quizQuestions.length) {
    questionText.textContent = quizQuestions[currentQuestion].question;
    feedback.textContent = "";
  }
}

function checkAnswer(selectedAnswer) {
  if (currentQuestion >= quizQuestions.length) {
    return;
  }
  if (selectedAnswer === quizQuestions[currentQuestion].answer) {
    score++;
    alert("Correct!");
  } else {
    alert("Incorrect. The correct answer is: " + quizQuestions[currentQuestion].answer);
  }
  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
    loadQuestion();
  } else {
    questionText.textContent = "Quiz Completed!";
    feedback.textContent = "You scored " + score + " out of " + quizQuestions.length + ".";
    optionsDiv.querySelectorAll('button').forEach(btn => btn.disabled = true);
  }
}

optionsDiv.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    checkAnswer(button.textContent.trim());
  });
});

document.addEventListener('DOMContentLoaded', loadQuestion);

function openModal(career) {
  let message = "";

  switch (career) {
    case 'software':
      message = "Job Roles in Software Development:\n- Web Developer\n- Mobile App Developer\n- Software Engineer\n- Frontend/Backend Developer";
      break;
    case 'cybersecurity':
      message = "Job Roles in Cybersecurity:\n- Security Analyst\n- Network Defender\n- Cyber Forensic Investigator\n- Ethical Hacker";
      break;
    case 'networking':
      message = "Job Roles in Networking:\n- Network Administrator\n- Network Engineer\n- Systems Analyst\n- IT Support Specialist";
      break;
    case 'data':
      message = "Job Roles in Data Management:\n- Data Analyst\n- Database Administrator\n- Data Scientist\n- Data Engineer";
      break;
    default:
      message = "No job roles available.";
  }

  alert(message);
}
