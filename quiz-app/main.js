const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-button')
let shuffeldQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    startButton.classList.add('hide')
    shuffeldQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffeldQuestions[currentQuestionIndex])
}
function showQuestion(question)
{
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText= answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    });
    
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}


function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffeldQuestions.length > currentQuestionIndex + 1)
    {
        nextButton.classList.remove('hide')
    }
    else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct)
{
    clearStatusClass(element)
    if(correct){
    element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions =[
    {
        question : 'What is 2+2',
        answer: [
            {text: '4', correct: true},
            {text: '3', correct: false}
        ]
    },
    {
        question : 'What is 2*2',
        answer: [
            {text: '4', correct: true},
            {text: '9', correct: false}
        ]
    },
    {
        question : 'What is Xcdify',
        answer: [
            {text: 'media company', correct: false},
            {text: 'software company', correct: true}
        ]
    },
    {
        question : 'best free beginer site for learning web dev ',
        answer: [
            {text: 'udemy', correct: false},
            {text: 'freecodecamp', correct: true}
        ]
    }
]