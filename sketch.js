var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";
var gamestate="end";
var spookySound; 


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(Math.round(random(200,400)),50);
  ghost.addImage("ghost",ghostImg);
  
  ghost.scale=0.5;
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300;
    }
    ghost.velocityY=2;
    if( keyDown("space") ){

      ghost.velocityY=-6;


    }

    spookySound.play();

    drawSprites();
}



function SpawnDoors(){
if(frameCount % 80 === 0)  {
var door = createSprite(width+20,height-300,40,10);
door.y=Math.round(random(80,120));
door.addImage(doorImg);
door.scale=0.25;
door.velocityx=-3;

door.lifetime=200;

doorsGroup.add(door);






}

}

function SpawnClimbers(){
  if(frameCount % 60 === 0) {
    var climber = createSprite(400,height-25,20,30);
    climber.y=Math.round(random(100,140));
climber.addImage(climberImg);
climber.velocityY=-5;
climber.lifetime=300;
climber.scale=1;
climbersGroup.add(climber);




  }
}
