"use strict";
// functions to play sound and add animation
function playAudio(keyCode) {
    const pressKeyAudio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (pressKeyAudio !== null) {
        pressKeyAudio.currentTime = 0;
        pressKeyAudio.play();
    }
}

function addClass(keyCode) {
    const pressKeyDiv = document.querySelector(`div[data-key="${keyCode}"]`);
    if (pressKeyDiv !== null) {
        pressKeyDiv.classList.add('clicked');
    }
}


function removeClass(e) {
    if (e.propertyName === 'transform') {
        this.classList.remove('clicked');
    }
}

document.addEventListener('keydown', function(e) {
    playAudio(e.code);
    addClass(e.code); //adding class clicked for the transition when pressed
})

const drums = document.querySelectorAll('.drum');
drums.forEach(item => item.addEventListener('click', function(e) {
    playAudio(this.dataset.key);
    addClass(this.dataset.key);
}));
drums.forEach(item => item.addEventListener('transitionend', removeClass));