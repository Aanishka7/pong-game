var ball,img,paddle;
function preload() {
ball=loadImage("ball.png");
paddle=loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
   ball=createSprite(20,200,10,10);
  ball.addImage("ball",ball);
  ball.velocityX=9;
  paddle=createSprite(330,200,10,10);
  paddle.addImage("paddle",paddle);
}

function draw() {
  background(205,153,0);
  createEdgeSprites()
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(paddle);  
  
  
  if(keyDown(UP_ARROW))
  {
  paddle.velocityY=-2;
  }
  
  if(keyDown(DOWN_ARROW))
  {
  paddle.velocityY=5;
  }
  drawSprites();
  
}

function randomVelocity(){
var rand=randomNumber(1,100);
  ball.rand(220,320);
}


     



