createCanvas(400, 400);
background(255);
colorMode(HSB);

let x = random(20, 100);

while (x < width) {
    stroke("sienna");
    line(x, 0, x, height);
    let y = random(0, 50);

    while (y < height) {
        noStroke();
        fill(random(60, 120), random(50, 75), random(25, 75));
        let cx = random(-10, 10);
        let cy = random(-10, 10);
        bezier(x, y, x + cx, y - 10 + cy, x + cx, y + 10 + cy, x, y);
        y += random(0, 50);


    }
    x += random(20, 100);
}