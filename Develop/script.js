var questions = [
    {
        "question": "Commonly used data types Do NOT include:",
        "choices": ["booleans", "strings", "alerts", "numbers"],
        "correctAnswer": 2
    },
    {
        "question": "The condition in an if/else statement is enclosed with _________.",
        "choices": ["quotes", "curly brackets", "parenthesis", "square brackets"],
        "correctAnswer": 3
    },
    {
        "question": "Arrays in JavaScript can be used to store _________.",
        "choices": ["numbers and strings", "other arrays", "booleans", "all of the above"],
        "correctAnswer": 4
    },
    {
        "question": "String values must be enclosed within _________ when being assigned to variables.",
        "choices": ["commas", "curly brackets", "quotes", "parenthesis"],
        "correctAnswer": 3
    },
    {
        "question": "A very useful tool used during development and debugging for printing content to the debugger is:",
        "choices": ["JavaScript", "terminal/bash", "for loops", "console.log"],
        "correctAnswer": 4
    }

];

var currentPageIndex = 0;

for (var currentPageIndex = 0; currentPageIndex < questions.length; currentPageIndex++) {
    console.log(questions[currentPageIndex].choices);
}
