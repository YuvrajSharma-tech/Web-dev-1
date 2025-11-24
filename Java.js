const quiz = [
  {question: "What is the capital of India?", answer: "Delhi"},
  {question: "Which planet is known as the Red Planet?", answer: "Mars"},
  {question: "What is 5 multiplied by 6?", answer: "30"},
  {question: "Who wrote 'Harry Potter'?", answer: "J.K. Rowling"},
  {question: "What is the largest mammal on Earth?", answer: "blue whale"}
];
let score = 0;
function startQuiz() {
  alert("Welcome to the Quiz! Answer the following questions.");
  for (let i = 0; i < quiz.length; i++) {
    let userInput = prompt(quiz[i].question);
    if (userInput === null) {
      alert("You exited the quiz!");
      return;
    }
    userInput = userInput.toLowerCase().trim();

    if (userInput === quiz[i].answer) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong! The correct answer is: " + quiz[i].answer);
    }
  }
  alert("Quiz Completed!\nYour final score is: " + score + "/" + quiz.length);
}
startQuiz();