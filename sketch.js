var bullet, wall;
var speed, weight;
var d;
var thikness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  wall = createSprite(1200,200,thickness,height/2);
  bullet= createSprite(50,200,20,20);
}

function draw() {
  background("yellow");
   bullet.velocityX= speed;
   bullet.shapeColor="white";

   wall.shapeColor=color(80,80,80);

   if((bullet.x+20)>=(wall.x-thickness)){
     d= (0.5*weight*speed*speed)/(thickness*thickness*thickness);
     bullet.velocityX=0;
   if(d<10){
     bullet.shapeColor="green";
   }
  
   else if(d>10){
     bullet.shapeColor="red";
   }
  }
  
  drawSprites();
}