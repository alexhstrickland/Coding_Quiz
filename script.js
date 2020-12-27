var timer = document.querySelector("#time");
var startBtn = document.querySelector("#start");
var startPage = document.querySelector("#start-button");
var submitBtn = document.querySelector("#init");
var aBtns = document.querySelector("#vert");
var currentQuestion;
var score = 0;
var secs = 150;
var final = document.querySelector("#final-score");
var scorePage = document.querySelector("#scores");

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
 
function show(id) {
    var visible = document.getElementById(id);
    visible.style.display = "visible";
    visible.style.visibility = "visible";
}

function timerSetting() {
    var timerInterval = setInterval(function() {
        secs--;
        time.textContent = secs + " seconds left";
    
        if(secs === 0) {
          clearInterval(timerInterval);
          alert("done")
        }
    
    }, 1000);
}


function startQuiz() {
    hide("start-button");
    show("quiz");
    timerSetting();

}

function getQuestion(currentQuestion) {

    var qText = document.getElementById("question");

    if(currentQuestion < questionAnswers.length) {
        qText.textContent = questionAnswers[currentQuestion].question;
        aBtns.innerHTML="";

        for (var i=0; i < questionAnswers[currentQuestion].options.length; i++) {
            var newB = document.createElement("button");

            newB.classList.add("btn");
            newB.setAttribute("data-value", i+1);
            newB.textContent = questionAnswers[currentQuestion].options[i];


            aBtns.appendChild(newB);

        }

    }

}



function questionClick() {
    var clickedEvent = ""
    var resultSection = document.querySelector("#result-sec");
    aBtns.addEventListener("click", function (event) {
        if (event.target.matches("button")) {
            clickedEvent = event.target;
        }
    // })
    // check if user guessed wrong
        if (parseInt(clickedEvent.getAttribute("data-value")) !== questionAnswers[currentQuestion].answer) {
        // penalize time
            time -= 15;
        
            if (time < 0) {
                time = 0;
            }
    
            resultSection.textContent = "Incorrect!";
            } else {

    
            resultSection.textContent = "Correct!";
            score = score + 1;
            }
    
        // flash right/wrong feedback on page for half a second
        resultSection.setAttribute("class", "feedback");
        setTimeout(function() {
        resultSection.setAttribute("class", "feedback hide");
        }, 1000);
    
        // move to next question
        currentQuestion = currentQuestion + 1;
        // check if we've run out of questions
        if (currentQuestion === questionAnswers.length) {
            quizEnd();
        } else {
            getQuestion(currentQuestion);
        }
    })
}
  
function quizEnd() {
    hide("quiz");
    hide("time");
    show("initials");
    final.textContent = "Your final score is " + score + ".";
}

function saveHighscore() {
    // get value of input box
  
    // make sure value wasn't empty
    if (initials !== "") {
      // get saved scores from localstorage, or if not any, set to empty array
  
      // format new score object for current user
      var newScore = {
        score: time,
        initials: initials
      };
  
      // save to localstorage
  
      // redirect to next page
      window.location.href = "highscores.html";
    }
}

function checkForEnter(event) {
    // "13" represents the enter key
    if (event.key === "Enter") {
      saveHighscore();
    }
}

startBtn.addEventListener("click", function() {
    startQuiz();
    currentQuestion = 0;
    getQuestion(0);
    questionClick();
    
});

  // user clicks button to submit initials
submitBtn.addEventListener("click", saveHighscore);

// goBack.addEventListener("click", function() {
//     show("start-button");

// }


