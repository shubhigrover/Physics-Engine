const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
var myWorld, myEngine
var ground, ball, ball2
function setup() {
  createCanvas(400,400);
  myEngine= Engine.create()
  myWorld= myEngine.world
  ground_options={
    isStatic:true
  }
  ground= Bodies.rectangle(200,395,400,10,ground_options)
  World.add(myWorld,ground)
  ball_options={
    restitution:1
  }
  ball=Bodies.circle(200,100,10,ball_options)
  World.add(myWorld,ball)
  ball2=Bodies.circle(200,110,15,ball_options)
  World.add(myWorld,ball2)
}

function draw() {
  background(255,0,255);  
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 10);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,10)
  ellipse(ball2.position.x,ball2.position.y,15)
  Engine.update(myEngine)
  drawSprites();
}