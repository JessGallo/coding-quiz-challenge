var highScores = document.querySelector("#high-scores");
var countdown = document.querySelector("#countdown");
var title = document.createElement('h2');
var intro = document.createElement("p");
var startBtn = document.createElement("button");

    document.body.appendChild(title);
    document.body.appendChild(intro);
    document.body.appendChild(startBtn);

var question = document.createElement("h2");
var optionOne = document.createElement("button");
var optionTwo = document.createElement("button");
var optionThree = document.createElement("button");
var optionFour = document.createElement("button");

function scores() {
    highScores.textContent="View High Scores";
}

scores();

function timer() {
    countdown.textContent = "Time:75";
}

timer();

function correct() {
    var correct = document.createElement ('h3');
    correct.textContent = "Correct!";
    document.body.appendChild(correct);
}

function wrong() {
    var wrong = document.createElement ('h3');
    wrong.textContent = "Wrong!";
    document.body.appendChild(wrong);
}

function introduction() {
    title.textContent = "Coding Quiz Challenge";
    intro.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    startBtn.className = "button";
    startBtn.innerHTML = "Start Quiz";

    startBtn.addEventListener('click', questionOne);
        function questionOne() {
            document.body.removeChild(title);
            document.body.removeChild(intro);
            document.body.removeChild(startBtn);

            question.innerHTML = "Commonly used data types DO NOT include:";
            optionOne.innerHTML = "1.strings";
            optionTwo.innerHTML = "2.booleans";
            optionThree.innerHTML = "3.alerts";
            optionFour.innerHTML = "4.numbers";

            document.body.appendChild(question);
            document.body.appendChild(optionOne);
            document.body.appendChild(optionTwo);
            document.body.appendChild(optionThree);
            document.body.appendChild(optionFour);
            
            optionOne.addEventListener('click', questionTwo);
            optionOne.addEventListener('click', wrong);
            optionTwo.addEventListener('click', questionTwo);
            optionTwo.addEventListener('click', wrong);
            optionFour.addEventListener('click', questionTwo);
            optionFour.addEventListener('click', wrong);
            optionThree.addEventListener('click', questionTwo);
            optionThree.addEventListener('click', correct);
                function questionTwo() {
                    question.innerHTML = "The condition in an if/else statement is encolsed with ______.";
                    optionOne.innerHTML = "1.quotes";
                    optionTwo.innerHTML = "2.curly brackets";
                    optionThree.innerHTML = "3.parenthesis";
                    optionFour.innerHTML = "4.square brackets";

                    optionOne.addEventListener('click', questionThree);
                    optionTwo.addEventListener('click', questionThree);
                    optionFour.addEventListener('click', questionThree);
                    optionThree.addEventListener('click', questionThree);
                        function questionThree() {
                            question.innerHTML = "Arrays in JavaScript can be used to store _________.";
                            optionOne.innerHTML = "1.numbers and strings";
                            optionTwo.innerHTML = "2.other arrays";
                            optionThree.innerHTML = "3.booleans";
                            optionFour.innerHTML = "4.all of the above";
                            
                            optionOne.addEventListener('click', questionFour);
                            optionTwo.addEventListener('click', questionFour);
                            optionThree.addEventListener('click', questionFour);
                            optionFour.addEventListener('click', questionFour);
                            function questionFour() {
                                question.innerHTML = "String value must be enclosed within _______ when being assigned to variables.";
                                optionOne.innerHTML = "1.commas";
                                optionTwo.innerHTML = "2.curly brackets";
                                optionThree.innerHTML = "3.quotes";
                                optionFour.innerHTML = "4.parenthesis";

                                optionOne.addEventListener('click', questionFive);
                                optionTwo.addEventListener('click', questionFive);
                                optionFour.addEventListener('click', questionFive);
                                optionThree.addEventListener('click', questionFive);
                                function questionFive() {
                                    question.innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is:";
                                    optionOne.innerHTML = "1.commas";
                                    optionTwo.innerHTML = "2.terminal/bash";
                                    optionThree.innerHTML = "3.for loops";
                                    optionFour.innerHTML = "4.console.log";

                                    optionOne.addEventListener('click', allDone);
                                    optionTwo.addEventListener('click', allDone);
                                    optionThree.addEventListener('click', allDone);
                                    optionFour.addEventListener('click', allDone);
                                    function allDone() {
                                        document.body.removeChild(optionOne);
                                        document.body.removeChild(optionTwo);
                                        document.body.removeChild(optionThree);
                                        document.body.removeChild(optionFour);

                                        question.innerHTML = "All done!";

                                        var endScreen = document.createElement("div");
                                        endScreen.innerHTML = "Your final score is 22.";
                                        document.body.appendChild(endScreen);

                                        var enterInitials = document.createElement("form");
                                        enterInitials.innerHTML = "Enter initials:";
                                        document.body.appendChild(enterInitials);

                                    }

                                }

                            }
                }

        }
    }
}

introduction();