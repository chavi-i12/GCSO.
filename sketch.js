var wall, car;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed= random(55, 90);
  weight= random(400,1500);
  car= createSprite(50, 200, 50, 50);
  wall= createSprite(1500, 200, 60, height/2)
  car.velocityX = speed;
  deformation = (0.5*weight*speed*speed)/(22500);
}

function draw() {
  background(255,255,255);  
  if(deformation < 100){
    if(car.collide(wall)){
      car.shapecolor = "green";
    }
  }else if (deformation > 100 && deformation < 180){
    if(car.collide(wall)){
      car.shapecolor = "yellow";
    }
  }else if (deformation > 180){
    if (car.collide(wall)){
      car.shapecolor = "red";
    }
  }
  drawSprites();
}