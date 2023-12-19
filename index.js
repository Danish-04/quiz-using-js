let Quizquestions = [
    {
        question: "What is the capital of India?",
        A: "Delhi",
        B: "Mumbai",
        C: "Chennai",
        D: "Kolkata",
        Answer: "A"
    },
    {
        question: "What is the largest continent in the world?",
        A: "North America",
        B: "Europe",
        C: "Asia",
        D: "Australia",
        Answer: "C"
    },
    {
        question: "Who is known as the father of the Indian Constitution?",
        A: "Mahatma Gandhi",
        B: "B.R. Ambedkar",
        C: "Jawaharlal Nehru",
        D: "Sardar Vallabhbhai Patel",
        Answer: "B"
    },
    {
        question: "Which planet is known as the Red Planet?",
        A: "Venus",
        B: "Mars",
        C: "Saturn",
        D: "Jupiter",
        Answer: "B"
    },
    {
        question: "Who wrote the famous novel, “To Kill a Mockingbird”?",
        A: "Harper Lee",
        B: "J.K. Rowling",
        C: "Charles Dickens",
        D: "William Shakespeare",
        Answer: "A"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        A: "Japan",
        B: "China",
        C: "Thailand",
        D: "South Korea",
        Answer: "A"
    },
    {
        question: "Who discovered the theory of relativity?",
        A: "Isaac Newton",
        B: "Albert Einstein",
        C: "Galileo Galilei",
        D: "Stephen Hawking",
        Answer: "B"
    },
    {
        question: "What is the capital of Canada?",
        A: "Toronto",
        B: "Ottawa",
        C: "Vancouver",
        D: "Montreal",
        Answer: "B"
    },
    {
        question: "Which is the smallest continent in the world?",
        A: "Europe",
        B: "South America",
        C: "Antarctica",
        D: "Australia",
        Answer: "D"
    },
    {
        question: "Who was the first person to walk on the moon?",
        A: "Neil Armstrong",
        B: "Buzz Aldrin",
        C: "Yuri Gagarin",
        D: "Alan Shepard",
        Answer: "A"
    },
    {
        question: "Which river is the longest river in the world?",
        A: "Amazon River",
        B: "Nile River",
        C: "Yangtze River",
        D: "Mississippi River",
        Answer: "B"
    },
    {
        question: "Who was the first Indian astronaut in space?",
        A: "Rakesh Sharma",
        B: "Kalpana Chawla",
        C: "Sunita Williams",
        D: "Abdul Kalam",
        Answer: "A"
    },
    {
        question: "Who invented the telephone?",
        A: "Alexander Graham Bell",
        B: "Thomas Edison",
        C: "Benjamin Franklin",
        D: "James Watt",
        Answer: "A"
    }
];

let score = 0;

function Quiz(quizQuestions) {
    for (let i = 0; i < quizQuestions.length; i++) {
        const userAnswer = prompt(quizQuestions[i].question + 
            "\nA: " + quizQuestions[i].A + 
            "\nB: " + quizQuestions[i].B + 
            "\nC: " + quizQuestions[i].C + 
            "\nD: " + quizQuestions[i].D + 
            "\nEnter your answer (A, B, C, or D):");

        const isCorrect = userAnswer && userAnswer.toUpperCase() === quizQuestions[i].Answer.toUpperCase();

        if (isCorrect) {
            score++; 
        }
    }

    alert("Quiz finished! Your final score is: " + score +" "+ "out of"+" "+ quizQuestions.length);
}

Quiz(Quizquestions);
