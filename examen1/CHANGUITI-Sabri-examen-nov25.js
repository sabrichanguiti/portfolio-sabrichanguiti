////////////////////////////////////
//// Examen CC1 November '25    ////
//// CHANGUITI Sabri              ////
////////////////////////////////////

createCanvas(400, 400);
colorMode(HSB);
background("black");
noStroke()
let size = 40
let amount = 10
let amountVertical= random(0,4)


for (let i = 0; i < amount; i++) {
    fill(1 + i * 35, 360,360);
    circle(20 + i * size, 200, size);
} 

for (let i = 0; i < amount; i++) {
    for (let j = 0; j < amountVertical; j++){
    fill(1 + i * 35, 360,360 * j / 5);
    circle(20 + i * size, 240 + j * random(0,40), size);
    circle(20 + i * size, 160 - j * random(0,40), size);
}
}
