
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(400,650,800,5)
   paper = new Paper(1,200,50)
   dustbin = new Dustbin(600,640,100,5)
   dustbin1 = new Dustbin(650,610,5,60)
   dustbin2 = new Dustbin(550,610,5,60)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();
  drawSprites();
  keyPressed();
}
function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body , paper.body.position,{x:2,y:-18.5});
}


}


