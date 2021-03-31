
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	roof = new Roof(400,100,200,20)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display()
  drawSprites();
 
}



