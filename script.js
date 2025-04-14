const welcomeScreen = document.getElementById('welcome-screen');
const screen1 = document.getElementById('screen-1');
const screen2 = document.getElementById('screen-2');
const screen3 = document.getElementById('screen-3');
const screen4 = document.getElementById('screen-4');
const startButton = document.getElementById('start-button');
const nextButton1 = document.getElementById('next-button-1');
const nextButton2 = document.getElementById('next-button-2');
const nextButton3 = document.getElementById('next-button-3');
const finishButton = document.getElementById('finish-button');

startButton.addEventListener('click', () => {
  welcomeScreen.classList.add('hidden');
  screen1.classList.remove('hidden');
});

nextButton1.addEventListener('click', () => {
  screen1.classList.add('hidden');
  screen2.classList.remove('hidden');
});

nextButton2.addEventListener('click', () => {
  screen2.classList.add('hidden');
  screen3.classList.remove('hidden');
});

nextButton3.addEventListener('click', () => {
  screen3.classList.add('hidden');
  screen4.classList.remove('hidden');
});

finishButton.addEventListener('click', () => {
  alert('You have finished the case study portion of Moral Code!');
});

// users interact with images, the more they click the larger it gets
function makeImageInteractive(imageElement) {
  let clickCount = 0;

  imageElement.addEventListener('click', () => {
    clickCount += 1;
    // increase the size of the image by 10% for each click
    const newSize = 100 + clickCount * 10; // base size is 100px
    imageElement.style.width = `${newSize}px`;
    imageElement.style.height = `${newSize}px`;
  });
}

// apply interactivity to all images with the class 'interactive-image'
document.querySelectorAll('.interactive-image').forEach((image) => {
  makeImageInteractive(image);
});

const answers = [];
const quizTitleScreen = document.getElementById('quiz-title-screen');
const startQuizBtn = document.getElementById('start-quiz-btn');
const question1 = document.getElementById('question-1');
const question2 = document.getElementById('question-2');
const question3 = document.getElementById('question-3');
const resultsScreen = document.getElementById('results-screen');
const answerButtons = document.querySelectorAll('.answer-btn');
const resultsText = document.getElementById('results-text');
const restartBtn = document.getElementById('restart-btn');

finishButton.addEventListener('click', () => {
  screen4.classList.add('hidden');
  quizTitleScreen.classList.remove('hidden');
});

startQuizBtn.addEventListener('click', () => {
  quizTitleScreen.classList.add('hidden');
  question1.classList.remove('hidden');
});

// answer button clicks
answerButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    answers.push(e.target.dataset.value); // Store answer

    // Navigate to next question or results
    if (question1.classList.contains('hidden') === false) {
      question1.classList.add('hidden');
      question2.classList.remove('hidden');
    } 
    else if (question2.classList.contains('hidden') === false) {
      question2.classList.add('hidden');
      question3.classList.remove('hidden');
    } 
    else if (question3.classList.contains('hidden') === false) {
      question3.classList.add('hidden');
      showResults();
    }
  });
});

// quiz results
function showResults() {
  let result = "You align more with: ";
  
  // Simple result logic (customize this!)
  if (answers.filter(a => a === 'art1' || a === 'legal1' || a === 'job1').length >= 2) {
    result += "Deontology! Deontology is an ethical framework wherein the morality of actions are determined by whether the action itself is right or wrong, instead of the consequences.";
  } else {
    result += "Utilitarianism! Utilitarianism is an ethical framework wherein the morality of actions are determined by outcomes and maximizing overall happiness to the greatest number of people.";
  }

  resultsText.textContent = result;
  resultsScreen.classList.remove('hidden');
}

// restart the test
restartBtn.addEventListener('click', () => {
  answers.length = 0; // Clear answers
  resultsScreen.classList.add('hidden');
  welcomeScreen.classList.remove('hidden'); // Or restart from question1
});


