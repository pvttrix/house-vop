const HIDDEN_CLASS = 'video__btn--hidden';
const PLAY_BTN     = document.querySelector('.video__btn--play');
const PAUSE_BTN    = document.querySelector('.video__btn--pause');
const VIDEO        = document.querySelector('.video__iframe');

function play() {
    PLAY_BTN.classList.add(HIDDEN_CLASS);
    PAUSE_BTN.classList.remove(HIDDEN_CLASS);
    VIDEO.play();
}

function pause() {
    PLAY_BTN.classList.remove(HIDDEN_CLASS);
    PAUSE_BTN.classList.add(HIDDEN_CLASS);
    VIDEO.pause();
}

function stop() {
    PLAY_BTN.classList.remove(HIDDEN_CLASS);
    PAUSE_BTN.classList.add(HIDDEN_CLASS);
    VIDEO.currentTime = 0;
}

function toggleMenu(e) {
    e.preventDefault();
    document.body.classList.toggle('menu-opened');
}

var header   = document.querySelector('header');
var headroom = new Headroom(header, {
    tolerance : 10,
});
headroom.init();

