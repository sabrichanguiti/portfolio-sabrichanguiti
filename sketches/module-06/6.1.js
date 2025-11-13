
let x = 0
let y = 0
function setup(){

    createCanvas(600,400)
    colorMode(HSB)
    background("white")


}

function draw(){

    background(0)
    stroke("red")
    line(x, 0, 150+x, 200)
    line(150+x,200,50+x,400);
    x += 3;
}