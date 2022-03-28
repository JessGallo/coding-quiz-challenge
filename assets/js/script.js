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
var correctOrWrong = document.createElement ('h3');
var points = document.createElement ('h4');

function scores() {
    highScores.textContent="View High Scores";
}

scores();

function timer() {
    countdown.textContent = "Time:75";
}

timer();

function introduction() {
    title.textContent = "Coding Quiz Challenge";
    intro.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    startBtn.className = "button";
    startBtn.innerHTML = "Start Quiz";

    startBtn.addEventListener('click', questionOne);
        points = 0;
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
            document.body.appendChild(correctOrWrong);
            
            optionOne.addEventListener('click', questionTwo);
            optionOne.addEventListener('click', wrong);
                function wrong() {
                    correctOrWrong.innerHTML = "Wrong!";
                    points = (points - 10);
                    console.log(points);
                }
            optionTwo.addEventListener('click', questionTwo);
            optionTwo.addEventListener('click', wrong);
            optionFour.addEventListener('click', questionTwo);
            optionFour.addEventListener('click', wrong);
            optionThree.addEventListener('click', questionTwo);
            optionThree.addEventListener('click', correct);
                function correct() {
                    correctOrWrong.innerHTML = "Correct!";
                    points = (points + 10);
                    console.log(points);
                }
                function questionTwo() {
                    question.innerHTML = "The condition in an if/else statement is encolsed with ______.";
                    optionOne.innerHTML = "1.quotes";
                    optionTwo.innerHTML = "2.curly brackets";
                    optionThree.innerHTML = "3.parenthesis";
                    optionFour.innerHTML = "4.square brackets";

                    optionOne.addEventListener('click', questionThree);
                    optionOne.addEventListener('click', wrong);
                    optionTwo.addEventListener('click', questionThree);
                    optionTwo.addEventListener('click', wrong);
                    optionFour.addEventListener('click', questionThree);
                    optionFour.addEventListener('click', wrong);
                    optionThree.addEventListener('click', questionThree);
                    optionThree.addEventListener('click', correct);
                        function questionThree() {
                            question.innerHTML = "Arrays in JavaScript can be used to store _________.";
                            optionOne.innerHTML = "1.numbers and strings";
                            optionTwo.innerHTML = "2.other arrays";
                            optionThree.innerHTML = "3.booleans";
                            optionFour.innerHTML = "4.all of the above";
                            
                            optionOne.addEventListener('click', questionFour);
                            optionOne.addEventListener('click', wrong);
                            optionTwo.addEventListener('click', questionFour);
                            optionTwo.addEventListener('click', wrong);
                            optionThree.addEventListener('click', questionFour);
                            optionThree.addEventListener('click', wrong);
                            optionFour.addEventListener('click', questionFour);
                            optionFour.addEventListener('click', correct);
                            function questionFour() {
                                question.innerHTML = "String value must be enclosed within _______ when being assigned to variables.";
                                optionOne.innerHTML = "1.commas";
                                optionTwo.innerHTML = "2.curly brackets";
                                optionThree.innerHTML = "3.quotes";
                                optionFour.innerHTML = "4.parenthesis";

                                optionOne.addEventListener('click', questionFive);
                                optionOne.addEventListener('click', wrong);
                                optionTwo.addEventListener('click', questionFive);
                                optionTwo.addEventListener('click', wrong);
                                optionFour.addEventListener('click', questionFive);
                                optionFour.addEventListener('click', wrong);
                                optionThree.addEventListener('click', questionFive);
                                optionThree.addEventListener('click', correct);
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
                                        document.body.removeChild(correctOrWrong);

                                        question.innerHTML = "All done!";

                                        var endScreen = document.createElement("div");
                                        endScreen.innerHTML = "Your final score is " + points + ".";
                                        document.body.appendChild(endScreen);

                                        var enterInitials = document.createElement("button");
                                        enterInitials.innerHTML = "Enter initials:";

                                        document.body.appendChild(enterInitials);

                                        enterInitials.addEventListener('click', initialsForm);
                                            function initialsForm(){
                                                window.prompt("Enter initials:");
                                            }

                                    }

                                }

                            }
                }

        }
    }
}

introduction();