const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let currentQuestionIndex = 0;

const questions = [{
        question: "What is 2 + 2?",
        answers: [
            { text: "4", correct: true },
            { text: "5", correct: false },
        ],
    },
    {
        question: "Who is the president of the United States?",
        answers: [
            { text: "Joe Biden", correct: true },
            { text: "Donald Trump", correct: false },
        ],
    },
];

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = "";
    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        currentQuestionIndex++;
    }
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        alert("Congratulations, you have finished the quiz!");
        // Reset the quiz
        currentQuestionIndex = 0;
        showQuestion(questions[currentQuestionIndex]);
    }
}

showQuestion(questions[currentQuestionIndex]);