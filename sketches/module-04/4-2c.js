createCanvas(400, 200);
colorMode(HSB);
noStroke();
background(0, 0, 10);

for (let i = 0; i < 3; i++) {
    let x = 100 + i * 100;
    let y = height / 2;
    let randomShape = floor(random(0, 3));
    let randomColor = floor(random(0, 3));
    switch (randomColor) {
        case 0:
            fill(330, 90, 100);
            break;
        case 1:
            fill(200, 90, 100);
            break;
        case 2:
            fill(280, 90, 100);
            break;
    }


    switch (randomShape) {
        case 0:
            triangle(x - 50, y - 50, x + 50, y + 50, x - 50, y + 50);
            break;
        case 1:
            rect(x - 50, y - 50, 100, 100);
            break;
        case 2:
            circle(x, y, 100);
            break;
        case 3:
            triangle(x + 50, y - 50, x + 50, y + 50, x - 50, y + 50);
            break;

    }

}



