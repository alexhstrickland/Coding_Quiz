var timer = document.querySelector("#time");
// var question = document.querySelector("#question");
var startBtn = document.querySelector("#start");
var startPage = document.querySelector("#start-button");
var submitBtn = document.querySelector("#init");
var aBtns = document.querySelector("#vert");
var currentQuestion;
var score = 0;
var secs = 150;
var buttonOne = document.querySelector("#btn1");
var buttonTwo = document.querySelector("#btn2");
var buttonThree = document.querySelector("#btn3");
var buttonFour= document.querySelector("#btn4");
var resultSection = document.querySelector("#result-sec")

var questionAnswers = [
    {
        question: "Which of the following are looping structures in JavaScript?",
        options: ["For loop", "While loop", "Do-while loop", "All the above"],
        answer: "All the above"
    },
    {
        question: "Which of the following returns the calling string value converted to lower case?",
        options: ["changeCase(case)", "toLower()", "toLowerCase()", "None of the above"],
        answer: "toLowerCase()"
    },
    {
        question: "Which adds one or more elements to the end of an array and returns the new length of the array?",
        options: ["push()", "map()", "pop()", "join()"],
        answer: "push()"
    },
    {
        question: "What HTML tag is JavaScript written under?",
        options: ["<js>", "<script>","<javascript>", "<scripted>"],
        answer: "<script>"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["=", "-", "+", "/"],
        answer: "="
    },
    {
        question: "How do you write 'Hello' in an alert box?",
        options: ["alertBox('Hello');", "msg('Hello');", "msgBox('Hello');", "alert('Hello');"],
        answer: "alert('Hello');"
    },
    {
        question: "How does a for loop begin?",
        options: ["for (i <= 10, i++)", "for i=1 to 10", "for (i=0, i<=5)", "for (i=0; i <=10; i++)"],
        answer: "for (i=0; i <=10; i++)"
    },
    {
        question: "How do you round the number 5.25 to the nearest integer?",
        options: ["rnd(5.25)", "Math.rnd(5.25)", "Math.round(5.25)", "round(5.25)"],
        answer: "Math.round(5.25)"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onchange", "onmouseclick", "onclick", "onmouseover"],
        answer: "onclick"
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        options: ["Number", "Float", "Boolean", "Undefined"],
        answer: "Float"
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
    quiz.style.visibility = "visible";
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
            newB.setAttribute= ("data-value", i+1)
            newB.textContent = questionAnswers[currentQuestion].options[i];


            aBtns.appendChild(newB);

        }

    }

}



function questionClick() {
    // check if user guessed wrong
    if (this.value !== questions[currentQuestion].answer) {
      // penalize time
      time -= 15;
  
      if (time < 0) {
        time = 0;
      }
  
      // display new time on page
  
      // play "wrong" sound effect
  
      resultSection.textContent = "Wrong!";
    } else {
      // play "right" sound effect
  
      resultSection.textContent = "Correct!";
    }
  
    // flash right/wrong feedback on page for half a second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
  
    // move to next question
  
    // check if we've run out of questions
    if (currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  }
  
function quizEnd() {
    // stop timer
    alert("OVER");
    // show end screen
  
    // show final score
  
    // hide questions section
    hide("quiz");
    show("scores");
}
  
// function clockTick() {
//     // update time
//     time--;
//     timerEl.textContent = time;
  
//     // check if user ran out of time
//     if (time <= 0) {
//       quizEnd();
//     }
// }

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
});

  // user clicks button to submit initials
submitBtn.addEventListener("click", saveHighscore);
