
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  stone = new Stone(200,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  stone.display();
  
  drawSprites();
 
}



