var ship,ship_moving;
var seaImg;
var sea;

function preload(){
ship_moving = loadAnimation("ship-1.png","ship-2.png");
seaImg = loadImage("sea.png");

}

function setup() {
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage("sea",seaImg);
  sea.scale = 0.3;
  background("blue");
    
  ship = createSprite(140,200,30,30)
  ship.addAnimation("moving",ship_moving);
  ship.scale = 0.25;
  ship.y = 250;
}


function draw() {
  
  sea.velocityX = -3;
  if(sea.x < 0) {
    sea.x = sea.width/8;
  }
  
  background(0);
  drawSprites();
}