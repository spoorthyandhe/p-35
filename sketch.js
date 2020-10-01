
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(450,790,900,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //creating divisions

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  //creating plinkos
 
  for (var j = 75; j <=width; j=j+50) 
  {
     plinkos.push(new Plinko(j,75));
  }
  for (var j = 50; j <=width; j=j+50) 
  {
     plinkos.push(new Plinko(j,50));
  }
  for (var j = 35; j <=width; j=j+50) 
  {
     plinkos.push(new Plinko(j,30));
  }
  for (var j = 10; j <=width; j=j+50) 
  {
     plinkos.push(new Plinko(j,10));
  }
  //creating particles

  for(var j = 0; j < particles.length;j++){
 
    particles[j].display();

  }

  ground.display();

  drawSprites();
 
}
