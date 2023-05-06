const quizData = [
    {
        question: 'What is a correct syntax to output "Hello World" in Python?',
        a: `eco('Hello World')`,
        b: `eco("Hello World")`,
        c: `print("Hello World")`,
        d: `p('Hello World')`,
        correct: 'c'
    }, {
        question: 'How do you insert COMMENTS in Python code?',
        a:`#this is a comment`,
        b: `/*this is a comment*/`,
        c: `//this is a comment`,
        d: `?this is a comment`,
        correct: 'c'
    }, {
        question: "how old am i?",
        a: '12',
        b: '14',
        c: '19',
        d: '20',
        correct: 'c'
    },{
        question: "how old am i?",
        a: '12',
        b: '14',
        c: '19',
        d: '20',
        correct: 'c'
    },{
        question: "how old am i?",
        a: '12',
        b: '14',
        c: '19',
        d: '20',
        correct: 'c'
    },{
        question: "how old am i?",
        a: '12',
        b: '14',
        c: '19',
        d: '20',
        correct: 'c'
    },{
        question: "how old am i?",
        a: '12',
        b: '14',
        c: '19',
        d: '20',
        correct: 'c'
    },{
        question: "how old am i?",
        a: '12',
        b: '14',
        c: '19',
        d: '20',
        correct: 'c'
    },{
        question: "how old am i?",
        a: '12',
        b: '14',
        c: '19',
        d: '20',
        correct: 'c'
    },{
        question: "how old am i?",
        a: '12',
        b: '14',
        c: '19',
        d: '20',
        correct: 'c'
     }
];

// Question page DOM element
const quiz = document.querySelector("#quiz");
const questionEl = document.querySelector(".quiz-title");
const questionNumber = document.querySelector(".countup");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const answerEls = document.querySelectorAll('.answer');

// Pages Dom element
const questionPageEl = document.querySelector(".questions");
const homePage = document.querySelector('.home-page');
const resultPage = document.querySelector(".result-page");
console.log(form);
// Button elements
const form = document.querySelector(".form");
const backHomeEl = document.querySelector(".back-home");
const startQuizEl =document.querySelector(".start-quiz");

// Result page DOM element
const totalQuestion = document.querySelector(".total-question");    
const totalCorrect = document.querySelector(".total-correct");
const totalWrong = document.querySelector(".total-wrong");
const percentage = document.querySelector(".percentage");
const totalScore = document.querySelector(".total-score");
const finalDecision = document.querySelector(".final-decision");

let currentQuiz = 0;
let score = 0;
let numberCounter = 1;


const loadQuiz = ()=>{
    const currentQuestoinData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuestoinData.question;
    a_text.innerHTML = currentQuestoinData.a;
    b_text.innerHTML = currentQuestoinData.b;
    c_text.innerHTML = currentQuestoinData.c;
    d_text.innerHTML = currentQuestoinData.d;

    // Calling  Deselect functiuon
    deselectAnswer();

};

loadQuiz();

//Take answers 
const getSelected = () =>{
    let answer = undefined;
    
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    // Checking answers' values
    if(answer === undefined){
        alert("Please select one answer");
    }else{
        return answer;
    }
    
};

// Deselect all questions
function deselectAnswer(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    });
};

// All Results 
function totalResults() {
    totalQuestion.textContent = quizData.length;
    totalCorrect.innerHTML = score;
    totalWrong.innerHTML = quizData.length - score;
    percentage.innerHTML = parseInt((score / quizData.length) * 100) + '%';
    totalScore.innerHTML = `${score} / ${quizData.length}`;
    
    if (score == quizData.length && score == quizData.length-3 ){
        finalDecision.innerHTML = `
        <p>Passed</p>
        `;
    }else{
        finalDecision.innerHTML = `
        <p>Fail</p>
        `;
    }
    
    
};



// Submit btn
form.addEventListener("click", ()=>{

   const answer = getSelected();

   if (answer){
    
    if(answer ===  quizData[currentQuiz].correct){
        score ++;
    }
    currentQuiz++;
    numberCounter++;
    console.log(numberCounter);
    questionNumber.textContent = `Question ${numberCounter} / 10`;

    timer()

    if(currentQuiz < quizData.length){
        loadQuiz();
    }else{
        questionPageEl.classList.add("hide");
        resultPage.classList.toggle("hide");
        totalResults();
    }
   }
});


// Start button 
startQuizEl.addEventListener('click', ()=>{
    // loadQuiz();
    homePage.classList.add("hide");
    questionPageEl.classList.remove("hide");
    resultPage.classList.add("hide");
    timer()
});

// Back home page button
backHomeEl.addEventListener("click", ()=>{
    location.reload();
})

// Timer 
const timerEl = document.querySelector('.timer');

function startTimer(duration, display){
    let timer = duration, minutes, seconds;
    setInterval(function(){
        minutes = parseInt( timer / 60, 10 );
        seconds = parseInt( timer % 60, 10 );
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10? "0" + seconds : seconds;

        display.innerHTML = minutes + ":" + seconds;
       
    }, 1000);
};

// Calling timer function which is called in buttons when clicked
function timer(){
    let minut = 60*1;
    startTimer(minut, timerEl);
}

