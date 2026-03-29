const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const N = 25;
const segments = [];
let t = 0;

for (let i = 0; i < N; i++) {
    segments.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        length: 20,
        angle: 0
    });
}

