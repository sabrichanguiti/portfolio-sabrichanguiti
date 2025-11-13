createCanvas(600, 400);
colorMode(HSB);

let topColor = color("#0ce5e5");
let botomColor = color("#2a4d4d");

for (let i = 0; i < height; i++) {
    let n = map(i, 0, height, 0, 1);
    let newColor = lerpColor(topColor, botomColor, n);
    stroke(newColor);
    line(0, i, width, i);
}

noStroke();
fill("yellow");
circle(300, 200, 100);

for (let j = 0; j < 10; j++) {

    let x = random(0, 600);
    let y = random(0, 400);
    let d1 = random(70, 100);
    let d2 = random(70, 100);
    let d3 = random(70, 100);

    fill(0, 0, random(40, 100));
    rect(x, y, d1, d1 / 2);
    for (let k = 0; k < 30; k++) {
        circle(x, y, d1);
        circle(x + 60, y, d2);
        circle(x + 100, y, d3);

    }
}