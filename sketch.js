
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dust1,dust2,dust3;
var ball;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground=new Ground(400,670,800,10);
	 dust1=new Dustbin(487,576,15,180);
	 dust2=new Dustbin(593,620,100,120);
	 dust3=new Dustbin(700,576,15,180);
	 ball=new Paper(140,450,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  ground.display();
   dust1.display();
   dust2.display();
   dust3.display();
   ball.display();
}
function keyPressed()
{
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:1150,y:1150});
	}
}


