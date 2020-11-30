// name space
const Engine = Matter.Engine ;
const World = Matter.World; ;
const Bodies = Matter.Bodies; 

var engine, world ; 
var object ;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create ();
  world = engine.world;

  var options = {
    isStatic : true
  }

  object = Bodies.rectangle (200,390,200,20, options);
  World.add (world, object);
  console.log (object);
  console.log (object.type);
  console.log (object.position.x);
  console.log (object.position.y);

  var optionC = {
    restitution : 1.1

  }
  ball = Bodies.circle(200,100,20, optionC)
  World.add(world,ball);

}

function draw() {
  background("red"); 
  Engine.update (engine); 

  //drawSprites(); 
  rectMode (CENTER);
  rect (object.position.x,object.position.y,420,50);
  //rect (200,200,50,50);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);

}`              `