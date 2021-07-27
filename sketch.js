var bg, bgImage;
var ship, ship_moving;

function preload(){
bgImage = loadImage("sea.png");
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
bg = createSprite(200,180,400,20);
bg.addImage("background",bgImage);
bg.x = bg.width /2;
bg.velocityX = -4;

ship = createSprite(150,270,20,30);
  ship.addAnimation("moving",ship_moving);
  ship.scale = 0.25;
}

function draw() {
  background("blue");
  if (bg.x < 0) {
    bg.x = bg.width / 2;
    }
    drawSprites();
}