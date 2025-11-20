// Sabri CHANGUITI - "Verraden/Vertrouwd"

createCanvas(windowWidth, windowHeight)
background("white")

let middleHole = 200
let donut = 400
let amount = 5000
let size = 30

let centerX = windowWidth/2
let centerY = windowHeight/2

fill("orange")
circle(centerX, centerY, 200)
fill("black")
circle(centerX, centerY, size)

for (let i = 0; i < amount; i++)
