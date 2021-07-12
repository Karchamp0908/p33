const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World


var  engine,world;
var bgImage;

var sprite1;

function setup() {
  var canvas = createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  var options=
  {
    isStatic:true,
  }

  sprite1 = new mysprite(200,50,20,80);
function preload()
{
bgImage=loadImage("snow2.jpg")
}

}
function draw() {
  background(bgImage);
  Engine.update(engine);  
  
}