
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,paperImg, bin;
var dustbin, dustbin2, dustbin3;
function preload(){
	
	paperImg = loadImage("paper.png")
 }

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
    world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(880, 670,250,20);
	dustbin2 = new Dustbin(750, 575,20,200);
	dustbin3 = new Dustbin(990, 575,20,200);
   
	ground = new Ground(400,680,2000,10);
	ball = new Paper(40,670,30);
    	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225); 
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  ball.display();
  drawSprites();
  keypressed();
 
}
function keypressed(){
    if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:1,y:-9})
	}
}

