function setup() {
    createCanvas(400,400);
    background(0);
    colorMode(HSB);
    }
 
 
let x = 0;
   
    function draw(){
        background(0,0,0,0.04);
        stroke(0,100,100);
   
    line(x,0,x+100,200);
    line(x+100,200,x,400);
    x += 1;
    }