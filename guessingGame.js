var userName = prompt('What is your name?');
var counter = 0;
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var correct = document.getElementById('correct');
var questions = ['Is the sky blue?', 'Is Seattle awesome?', 'Is the answer to this question yes, or no?'];
var answers = ['YES', 'Y', 'NO', 'N'];

function ques1() {
    var question1 = prompt(questions[0]);
    if (question1.toUpperCase() === answers[0] || question1.toUpperCase() === answers[1]) {
        one.innerHTML = 'Correct ' + userName + '! the sky is blue!';
        counter ++
    } else {
        one.innerHTML = 'Sorry ' + userName + ', better luck on the next question.';
    }
    console.log('question 1 response: ' + question1);
}

function ques2() {
    var question2 = prompt(questions[1]);
    if (question2.toUpperCase() === answers[0] || question2.toUpperCase() === answers[1]) {
        two.innerHTML = 'Correct ' + userName + '! Seatle is in fact awesome!';
        counter ++
    } else {
        two.innerHTML = 'Sorry ' + userName + ', better luck on the next question.';
    } 
    console.log('question 2 response: ' + question2);
}

function ques3() {
    var question3 = prompt(questions[2]);
    if (question3.toUpperCase() === answers[2] || question3.toUpperCase() === answers[3]) {
        three.innerHTML = 'Correct ' + userName + '! the answer is yes!';
        counter ++
    } else {
        three.innerHTML = 'Sorry ' + userName + ', better luck next time.';
    }
    console.log('question 3 response: ' + question3);
}

ques1();
ques2();
ques3();

correct.innerHTML = 'Thank you for playing the Guessing Game ' + userName + '! You got ' + counter + ' out of 3 correct.';
