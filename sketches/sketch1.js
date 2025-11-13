createCanvas(600,400)
background(255)
colorMode(HSB)
for(let i =0; i<8; i++){
    stroke(0);
    let position = random(width);
    line(position,0,position,400);
    noStroke()

    for(let j = 0 ;j<15; j++){
        let y = random(height);
        fill(360,100,100-y/8);
        circle(position+10,y,10)
    }
}