let currentIndex = 0;
let currentQuizIndex = 0;
const flashcardContainer = document.getElementById("flashcard-container");
const quizContainer = document.getElementById("quiz-container");
const wordEl = document.getElementById("word");
const translationEl = document.getElementById("translation");
const nextBtn = document.getElementById("next-btn");
const quizQuestionEl = document.getElementById("quiz-question");
const quizOptionsEl = document.getElementById("quiz-options");
const nextQuizBtn = document.getElementById("next-quiz-btn");
function showFlashcards() {
    flashcardContainer.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    currentIndex = 0;
    displayFlashcard();
}
function displayFlashcard() {
    const card = flashcards[currentIndex];
    wordEl.textContent = card.word;
    translationEl.textContent = card.translation + " (" + card.pronunciation + ")";
}
nextBtn.addEventListener("click", () => {
    currentIndex++;
    if(currentIndex >= flashcards.length) currentIndex = 0;
    displayFlashcard();
});

function showQuiz() {
    flashcardContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    currentQuizIndex = 0;
    displayQuiz();
}
function displayQuiz() {
    const q = quizQuestions[currentQuizIndex];
    quizQuestionEl.textContent = q.question;
    quizOptionsEl.innerHTML = "";
    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.addEventListener("click", () => {
            alert(option === q.answer ? "Correct!" : "Wrong!");
        });
        quizOptionsEl.appendChild(btn);
    });
}
nextQuizBtn.addEventListener("click", () => {
    currentQuizIndex++;
    if(currentQuizIndex >= quizQuestions.length) currentQuizIndex = 0;
    displayQuiz();
});
