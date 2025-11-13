let h = 0
let size = 0
function setup() {
    createCanvas(400,400)
    colorMode(HSB)
}


function draw() {
    output(size)
    noStroke()
    circle(mouseX, mouseY, size)
}


function mouseClicked(){
    size += 10;

}