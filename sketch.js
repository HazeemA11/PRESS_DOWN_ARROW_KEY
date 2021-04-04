
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var player,abc,ground;
var basket1,basket2,basket3;
var wall1,wall2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	abc = new ABC (600,440,20,400);
	wall1 = new ABC (750,400,20,800);
	wall2 = new ABC (500,50,1000,20);
	
	ground = new Ground (10,650,1000000,50);
	player = new Player (100,350,10);
	basket1 = new Basket (580,250,10,100);
	basket2 = new Basket (480,250,10,100);
	basket3 = new Basket (530,300,100,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  
  drawSprites();
  basket1.display();
  basket2.display();
  basket3.display();
  ground.display();
  player.display();
  abc.display();
  wall1.display();
  wall2.display();
  
  restitution :0.6;

  if (keyDown("DOWN_ARROW")) {
	text("press right arrow key", 500, 324);
  }

  if (keyDown("RIGHT_ARROW")) {
	text("press left arrow key", 500, 324);
  }
  if (keyDown("LEFT_ARROW")) {
	text("i wasted your time", 500, 324);
  }

  text("press down arrow for a secret", 174, 324);
}


function keyPressed(){
	if (keyCode=== UP_ARROW){
	Matter.Body.applyForce(player.body,player.body.position,{x:62,y:-150});
	}
	}

	
