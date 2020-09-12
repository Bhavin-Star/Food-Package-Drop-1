const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopter, package2, packageIMG,ground, package;
var engine, world, body, box1, box2, box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world =  engine.world;
		
	package2 = createSprite(400,150,50,50);
	package2.addImage(packageIMG);
	package2.scale = 0.2;
	
	helicopter = createSprite(400,50,50,50, stat);
	helicopter.addImage(helicopterIMG);
	helicopter.scale = 0.6;

	var stat = {
		isStatic: true
	}

	package = Bodies.circle(400,150,25,{isStatic: true, restitution: 0.4});
	World.add(world,package);
	
	ground = Bodies.rectangle(1,680,800,10,stat);
	World.add(world,ground);

	}
function draw() {
  background(0)
  Engine.update(engine);

  
 rect(ground.position.x, ground.position.y, 800,10);   

  package2.y = package.position.y;
  package2.x= package.position.x;
  
  drawSprites();
}
 function keyPressed(){
	
	if (keyCode == DOWN_ARROW){
		Matter.Body.setStatic(package,false)
	}
	 
}
 
