
let sw = 1;
let h = 0;

function setup() {
    createCanvas(400, 400);
    colorMode(HSB);
    background(0);
}

function draw() {
    stroke(h, 100, 100);
    strokeWeight(sw);
    point(random(0, width), random(0, height), 5);
    output(frameCount);
}