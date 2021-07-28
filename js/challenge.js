
//variables
let counterStart = 0;
let likeCounter = 0;
let intervalID = 0;
let counterRunning = true;
let timer = document.getElementById('counter');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const commentForm = document.querySelector('#comment-form');
const commentInput = document.querySelector('#comment-input')
const commentPost = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');


const likeContainer = document.querySelector('.likes');
//functions
let timerIncrement = function() {
    counterStart += 1;
    timer.innerHTML = counterStart;
    likeCounter = 0;
    return counterStart
}
let timerDecrement = function() {
    counterStart -= 1;
    timer.innerHTML = counterStart;
    return counterStart;
}
let liker = function() {
    let likeDisplay = document.createElement('li');
    likeCounter += 1;
    likeDisplay.setAttribute('id', `time-${counterStart}`)
    if (likeCounter > 1){
        document.getElementById(`time-${counterStart}`).innerHTML = `${counterStart} has been liked ${likeCounter} times`
    } else {
        likeDisplay.innerHTML = `${counterStart} has been liked ${likeCounter} time`
        likeContainer.appendChild(likeDisplay);
    }
    
}
let timerIntervals = () => {
    plus.disabled = counterRunning;
    minus.disabled = counterRunning;
    heart.disabled = counterRunning;
    submitBtn.disabled = counterRunning;
    counterRunning = !counterRunning;

    if (counterRunning) {
        pause.innerHTML = 'pause';
    } else if (!counterRunning) {
        pause.innerHTML = 'resume';
    }
     
}
let postComment = (e) => {
    e.preventDefault();
    let newComment = document.createElement('p');
    newComment.textContent = commentInput.value;
    commentPost.appendChild(newComment);
    e.target.reset();
}
setInterval(() => {
    if (counterRunning) {
        timerIncrement();
    }
}, 1000)

//Events
plus.addEventListener('click', timerIncrement);
minus.addEventListener('click', timerDecrement);
heart.addEventListener('click', liker);
pause.addEventListener('click', timerIntervals);
commentForm.addEventListener('submit', postComment);
