
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Mango,boy,boyIMG,tree,stone,rope;

function preload()
{
   boyIMG = loadImage("Boy.png");
  	
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;
    
	stone = new Stone(30,530);

	boy = createSprite(150,600);
	boy.addImage(boyIMG);
	boy.scale= 0.6;

	rope = new Rope(stone.body,{x:30,y:530})
    
	tree = new Tree(850,450,400,500);
	
	Mango1 = new mango(800,300);
	Mango2 = new mango(750,340);
	Mango3 = new mango(1000,350);
	Mango4 = new mango(870,340);
	Mango5 = new mango(760,400);
	Mango6 = new mango(950,300);
	Mango7 = new mango(870,250);
	Mango8 = new mango(900,420);

	ground = new Ground(200,690,2000,30);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
 
 
  ground.display();
  tree.display();
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  Mango6.display();
  Mango7.display();
  Mango8.display();
  stone.display();
  rope.display();

  detectCollision(stone,Mango1);
  detectCollision(stone,Mango2);
  detectCollision(stone,Mango3);
  detectCollision(stone,Mango4);
  detectCollision(stone,Mango5);
  detectCollision(stone,Mango6);
  detectCollision(stone,Mango7);
  detectCollision(stone,Mango8);
  drawSprites();  
}
function mouseDragged(){
    Matter.Body.setPosition(stone.bodyPosition.x=mouseX,stone.bodyPosition.y=mouseY);
}
function mouseReleased(){
   rope.fly;
}
function detectCollision(lstone,lMango){
	MangoBodyPosition=lMango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y)
	if(distance<=lMango.r+lstone.r){
		Matter.Body.setStatic(lMango.body,false);
	}
}
function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.bodyPosition.x=30,stone.bodyPosition.y=530)
		rope.attach(stone.body);
	}
}


