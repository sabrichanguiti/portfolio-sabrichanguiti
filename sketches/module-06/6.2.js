function setup(){
createCanvas(400,400)
colorMode(HSB)
rectMode(CENTER)
noFill()
}

let x = 0
let y = 0
let size = 0
let h = 0
function draw(){
    if (size >= 400){
        size = 0
        h+=10
    }
    stroke(h % 360,100,100)
    rect(x+200,y+200,size)

    size += 20


}