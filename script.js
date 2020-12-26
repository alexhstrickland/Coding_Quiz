var time = document.querySelector(".time");
var question = document.querySelector("#question");
var startBtn = document.querySelector("#start");
var startPage = document.querySelector("#start-button");

var questionAnswers = [
    {
        question: "Which of the following are looping structures in JavaScript?",
        options: ["For loop", "While loop", "Do-while loop", "All the above"],
        answer: 4
    },
    {
        question: "Which of the following returns the calling string value converted to lower case?",
        options: ["changeCase(case)", "toLower()", "toLowerCase()", "None of the above"],
        answer: 3
    },
    {
        question: "Which adds one or more elements to the end of an array and returns the new length of the array?",
        options: ["push()", "map()", "pop()", "join()"],
        answer: 1
    },
    {
        question: "What HTML tag is JavaScript written under?",
        options: ["<js>", "<script>","<javascript>", "<scripted>"],
        answer: 2
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["=", "-", "+", "/"],
        answer: 1
    },
    {
        question: "How do you write 'Hello' in an alert box?",
        options: ["alertBox('Hello');", "msg('Hello');", "msgBox('Hello');", "alert('Hello');"],
        answer: 4
    },
    {
        question: "How does a for loop begin?",
        options: ["for (i <= 10, i++)", "for i=1 to 10", "for (i=0, i<=5)", "for (i=0; i <=10; i++)"],
        answer: 4
    },
    {
        question: "How do you round the number 5.25 to the nearest integer?",
        options: ["rnd(5.25)", "Math.rnd(5.25)", "Math.round(5.25)", "round(5.25)"],
        answer: 3
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onchange", "onmouseclick", "onclick", "onmouseover"],
        answer: 3
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        options: ["Number", "Float", "Boolean", "Undefined"],
        answer: 2
    }
];

function hide(id) {
    var hidden = document.getElementById(id);
    // hidden.style.visibility= "hidden";
    hidden.style.display = "none";
}

function invisible(id) {
    var show = document.getElementById(id);
    show.style.visibility = "hidden"
}
 
function show(id) {
    var visible = document.getElementById(id);
    visible.style.visibility = "visible";
}

function timerSetting() {

}

startBtn.addEventListener("click", function() {
    /* hide first page and show quiz */
    hide("start-button");
    show("quiz");
    
});

function nextQuestion() {
    var currentQ = document.getElementsById("question");

    for (var i=0; i < questionAnswers.length; i++) {
        document.getElementById("#question").innerHTML = questionAnswers[i].question;
    }

}

for (var i=0; i < questionAnswers.length; i++) {
    document.getElementById("#question").innerHTML = questionAnswers[i].question;
}