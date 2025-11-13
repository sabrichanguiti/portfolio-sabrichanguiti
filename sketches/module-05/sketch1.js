createCanvas(400, 400);
background(0);
colorMode(HSB);

let x = width/2
let y = height/2
let size = 100

cube(x,y,size)

function cube(){
    fill(100, 100, 80);
    quad(x, y, x - size / 2, y - size / 4, x, y - size / 2, x + size / 2, y - size / 4);
    fill(100, 100, 60);
    quad(x, y, x - size / 2, y - size / 4, x - size / 2, y + size / 4, x, y + size / 2);
    fill(100, 100, 40);
    quad(x, y, x + size / 2, y - size / 4, x + size / 2, y + size / 4, x, y + size / 2);
}
