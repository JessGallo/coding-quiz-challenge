var highScores = document.querySelector("#high-scores");
var countdown = document.querySelector("#countdown");

function scores() {
    highScores.textContent="View High Scores";
}

scores();

function timer() {
    countdown.textContent = "Time:75";
}

timer();

function startQuiz() {
    var title = document.createElement('h2');
    title.textContent = "Coding Quiz Challenge";
    
    var intro = document.createElement("p");
    intro.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    
    var startBtn = document.createElement("button");
    startBtn.innerHTML = "Start Quiz";

    document.body.appendChild(title);
    document.body.appendChild(intro);
    document.body.appendChild(startBtn);
}



startQuiz();