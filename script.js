

let startButton = document.getElementById('start-button') 
let nextButton = document.getElementById('next-button')
var timeLeftElement = document.getElementById("time-left");
var secondsLeft = 75;   
let finalScore = 0;
const questions = [
    {
        question: 'Commonly used datatypes DO NOT include',
        answers: [
            {text: 'Strings', correct: 'Alerts'},
            {text: 'Booleans', correct: 'Alerts'},
            {text: 'Numbers', correct: 'Alerts'},
            {text: 'Alerts', correct: 'Alerts'}
        ]
    },

    {
                question: 'Arrays in JavaSript can be used to store',
                answers: [
                    {text: 'numbers', correct: 'numbers'},
                    {text: 'other arrays', correct: 'numbers'},
                    {text: 'elements', correct: 'numbers' },
                    {text: 'class', correct: 'numbers' }
                ]
            },

            {
                question: 'A very useful tool used during development and debugging for printing content is',
                answers: [
                    {text: 'JavaSript', correct: 'JavaSript'},
                    {text: 'terminal/Bash', correct: 'JavaSript'},
                    {text: 'for loops', correct: 'JavaSript'},
                    {text: 'console.log', correct: 'JavaSript'},
                ]

            }
                
            ]

//whenever we click  the button, click on it to execute the code 
startButton.addEventListener('click', startGame) 


function startGame() {
    console.log('started')
    startTimer();
    displayQuestions() 
}
let questionNumber = 0
function displayQuestions () {

    document.getElementsByClassName('question_div')[0].innerText = ""
    document.getElementsByClassName('code-quiz')[0].setAttribute('id', 'hide')
    let question_block = document.getElementsByClassName('question_div')[0]
    question_block.setAttribute('id', 'show')
    let parentDiv = document.createElement("div")
    let questionDiv = document.createElement('div')
    questionDiv.innerHTML = questions[questionNumber].question
    let optionDiv = document.createElement('div')
    optionDiv.style.display = "block"
    for (let i = 0 ; i < questions[questionNumber].answers.length; i++) {
        let buttonEl = document.createElement('button')
        let paragraph = document.createElement('p')
        buttonEl.innerHTML = questions[questionNumber].answers[i].text
        buttonEl.addEventListener('click', function(event){
            event.preventDefault()
            console.log(event.target.innerHTML)
            if(event.target.innerHTML === questions[questionNumber].answers[i].correct)
            {
                buttonEl.style.backgroundColor = "green"
                finalScore+=10
                console.log(`Final Score is ${finalScore}`)
            }else{
                buttonEl.style.backgroundColor = "red"
                secondsLeft -=10
            }
        })
        paragraph.append(buttonEl)
        optionDiv.append(paragraph)
    }
    parentDiv.append(questionDiv,optionDiv)
    question_block.append(parentDiv)
}
nextButton.addEventListener('click', () => {
   questionNumber++ 
   displayQuestions()
})

function startTimer() { // build the start game
    console.log("The timer is started.")
    timeLeftElement.textContent = secondsLeft;
    var timerInterval = setInterval(function() {
        // count down by 1
        timeLeftElement.textContent = --secondsLeft;
        // we are out of time 
        if (secondsLeft === 0){
         //stop the timer
         clearInterval(timerInterval)
        }
    }, 1000)
}