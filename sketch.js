const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var star;
var fairy;
var world
var engine
 var ground
 var fairy1
function preload()
{
 backgroundImg = loadImage("starnight.png") 
 star$ = loadImage("star.png")
 fairy$ = loadAnimation("fairy1","fairy2")
 Music = loadSound("JoyMusic.mp3")

}

function setup() {
  createCanvas(800, 750);

  engine = Engine.create();
  world = engine.world;
  
  var fairy_options  = { isStatic: true }

  fairy = Bodies.rectangle(700,600,100,100,fairy_options);
  World.add(world,fairy);
    
  var star_options = {isStatic: true}
  star = Bodies.rectangle(700,50,50,50,star_options)
   World.add(world,star)
  
 
 
  
  
}


function draw() {

  drawSprites();
 background(backgroundImg)
  Engine.update(engine)

  

  rectMode(CENTER);
  rect(fairy.position.x , fairy.position.y , 100,100)

  rectMode(CENTER);
  rect(star.position.x , star.position.y , 50,50)

  





}

function keyPressed(){

if(keyCode === DOWN_ARROW){
  Matter.Body.setStatic(star,false)
}
}