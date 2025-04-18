const CANVAS = document.getElementById('canvas');
const CTX = CANVAS.getContext('2d');
const THUMBS_UP = document.getElementById('left-image');
const THUMBS_UP_SCORE = document.getElementById('left-score');
const VICTORY = document.getElementById('right-image');
const VICTORY_SCORE = document.getElementById('right-score');

const FINGER_JOINTS = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
};