
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball ; 
var ground ;
var radius ; 
var right ; 
var left ; 
var world ; 

function setup() {
	createCanvas(1600, 800);
     
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
      isStatic: false,
	  restitution: 0.3 ,
	  friction: 0,
	  density: 1.2
	}

	ball = Bodies.circle(200, 100, 30,ball_options);
	World.add(world,ball);

	ground = new Ground(width/2,670,width,20)
	right = new Ground(1350,600,20,120)
	left = new Ground(1100,600,20,120)

	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  right.display();
  left.display();

  ellipse(ball.position.x, ball.position.y, 30);
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:85, y:-85})
	}
}




