let x = 100
let y = 200
let speedX = 5
let speedY = 7.5

let size = 50
let h = 0

function setup(){
    createCanvas(400,400)
    colorMode(HSB)
    background(0)
    noStroke()
}

    function draw(){
        background(0,0,0,0.3)

        if(x >= (width - size/2) || x <= size/2) {
            speedX = speedX * -1
            h+=20
        }

        if(x >= (height - size/2) || y <= size/2) {
            speedY = speedY * -1
            h+=20
        }

        fill(h,100, 100)
        circle(x,y,size)

        x += speedX
        y += speedY
    }