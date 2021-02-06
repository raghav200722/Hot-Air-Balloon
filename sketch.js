var balloon, balloonImg;
var backgroundImg; 
var database;

function preload(){
 backgroundImg = loadImage("Hot Air Ballon-01.png");
 balloonImg1=loadImage("Hot Air Ballon-02.png");
 balloonImg2=loadImage("Hot Air Ballon-03.png");
 balloonImg3=loadImage("Hot Air Ballon-04.png");
 
}

function setup() {
 //database = firebase.database();
 createCanvas(800,400);
 balloon=createSprite(100,270,50,50);
 balloon.addImage(balloonImg1);
 balloon.scale=0.4;


  
}

function draw() {
  background(backgroundImg);  

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y -10;
    balloon.addImage(balloonImg2);
    balloon.scale = balloon.scale -0.01;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10;
    balloon.addImage(balloonImg3);
    balloon.scale = balloon.scale +0.01;
  }
  
  drawSprites();
}