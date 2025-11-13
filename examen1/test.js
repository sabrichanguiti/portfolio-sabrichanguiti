////////////////////////////////////
//// Examen CC1 November '25    ////
//// CHANGUITI Sabri              ////
////////////////////////////////////

createCanvas(400, 400);
colorMode(HSB);
background("black");
noStroke()
let size = 40
amount = 10
for (let i = 0; i < amount; i++) {
    fill(1 + i * 35, 360,360)
    circle(20 + i * size, 200, size);
} 

for (let i = 0; i < amount; i++) {
    fill(1 + i * 35, 360,360/5+i)
    circle(20 + i * size, random(240,400) + i * 40, size);
    circle(20 + i * size, random(0,160) - i * 40, size)
}