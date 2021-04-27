const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper1;
function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  paper1 = new Paper(100, 100, 50);
  ground1 = new Ground(400, 680, 800, 20);
  dustbin1 = new Dustbin(600, 620, 20, 100);
  dustbin2 = new Dustbin(660, 660, 100, 20);
  dustbin3 = new Dustbin(720, 620, 20, 100);
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper1.body, paper1.body.position, {
      x: 85,
      y: -85,
    });
  }
}
