let timer = document.getElementById("timer");
var clock;
var secondsLeft;
let startDiv = document.querySelector(".start_div")
let startBotton = document.querySelector("#start_button")
let quizDiv = document.querySelector("#quiz")
let quizQuestions = [{question: "Arrays in javascript used to store",
Answers: {A:"strings",
B:"boolean",
C: "all the above"}, correct: "all  the above",}];
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var question = document.getElementById("question");
console.log(quizQuestions)
function questionDisplay(){
    var questionShow = quizQuestions[0].question;
    var choice1_show = quizQuestions[0].Answers.A;
    var choice2_show = quizQuestions[0].Answers.B;
    var choice3_show = quizQuestions[0].Answers.C;
    question.textContent = questionShow
    choice1.textContent = choice1_show;
    choice2.textContent = choice2_show;
    choice3.textContent = choice3_show;
}
// function checkAnswers(event){
//     if (quizQuestions[0].correct === event.target.textContent)
//     //add 10 points else deduct 10 seconds 
// }

// in general clicklistemner for each button
// function running through all the questions using for loop 
// establish score started 
// end game function. after the game hide everything and show something else
// local storage 

startBotton.addEventListener("click", function(event){
    startTimer();
    questionDisplay();
    //call back function,anonymous function
    startDiv.setAttribute("id","hide")
    quizDiv.setAttribute("class", "show")
})

function startTimer() {
    console.log("The timer is started.")
    var secondsLeft = 60;
    timer.textContent = secondsLeft;
    var timerInterval = setInterval(function() {
        // count down by 1
        timer.textContent = --secondsLeft;
        // we are out of time 
        if (secondsLeft === 0){
         //stop the timer
         clearInterval(timerInterval)
        }
    }, 1000)
}

