
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


 var paper;
 var dustbin1;

function preload()
{
	
}

 
function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
	ground = new Ground(600,height,1200,20);
	
	paper = new Paper()
	dustbin1 = new Dustbin() 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  
}



