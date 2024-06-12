import inquirer from 'inquirer';

interface Question {
    type: string;
    name: string;
    message: string;
    choices?: string[];
    correctAnswer?: string;
}

const questions: Question[] = [
    {
        type: "list",
        name: "question1",
        message: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: "Paris"
    },
    {
        type: "list",
        name: "question2",
        message: "Who wrote 'Hamlet'?",
        choices: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correctAnswer: "William Shakespeare"
    },
    {
        type: "list",
        name: "question3",
        message: "What is the smallest prime number?",
        choices: ["0", "1", "2", "3"],
        correctAnswer: "2"
    }
];

async function askQuestion(question: Question) {
    const answer = await inquirer.prompt([{
        type: question.type,
        name: question.name,
        message: question.message,
        choices: question.choices
    }]);
    return answer;
}

async function runQuiz() {
    console.log("Welcome to the Quiz App!");

    let score = 0;

    for (const question of questions) {
        const answer = await askQuestion(question);
        const userAnswer = answer[question.name];

        if (userAnswer === question.correctAnswer) {
            score++;
            console.log("Correct!");
        } else {
            console.log("Incorrect. The correct answer is:", question.correctAnswer);
        }
    }

    console.log(`Quiz finished! Your score: ${score}/${questions.length}`);
}

runQuiz().catch((error) => {
    console.error("Error running quiz:", error);
});
