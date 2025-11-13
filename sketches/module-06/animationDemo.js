
function setup() {
    createCanvas(400,400)
    colorMode(HSB)
    noStroke()
    fill(0, 100, 100)
}


function draw() {
    background(0)
    output(frameCount % 400)
    circle(width / 2, height / 2, frameCount % 400)
}