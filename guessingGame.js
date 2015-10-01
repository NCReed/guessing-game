var userName = prompt('What is your name?');
var counter = 0;
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var correct = document.getElementById('correct');

function ques1() {
    var question1 = prompt('Is the sky blue?');
    if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y') {
        one.innerHTML = 'Correct ' + userName + '! the sky is blue!';
        counter ++
    } else {
        one.innerHTML = 'Sorry ' + userName + ', better luck on the next question.';
    }
    console.log('question 1 response: ' + question1);
}

function ques2() {
    var question2 = prompt('Is Seattle awesome?');
    if (question2.toUpperCase() === 'YES' || question2.toUpperCase() === 'Y') {
        two.innerHTML = 'Correct ' + userName + '! Seatle is in fact awesome!';
        counter ++
    } else {
        two.innerHTML = 'Sorry ' + userName + ', better luck on the next question.';
    } 
    console.log('question 2 response: ' + question2);
}

function ques3() {
    var question3 = prompt('Is the answer to this question yes, or no?');
    if (question3.toUpperCase() === 'YES' || question3.toUpperCase() === 'Y') {
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
