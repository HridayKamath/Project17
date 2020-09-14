//declaring variables//
var ball, ballImg;
var paddle, paddleImg;

function preload() {
  
  ballImg = loadImage("ball.png");
  paddleImg= loadImage("paddle.png");
  
  
}
function setup() {
    
  createCanvas(400, 400);
  
    //initialising the ball and paddle//
    ball = createSprite(200,200);
    ball.addImage("ball" , ballImg);
  ball.velocityX = 9;
  
  paddle = createSprite(380,200,10,10);
  paddle.addImage("paddle",paddleImg);
    
    
   
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  
  edges = createEdgeSprites();
  //bounce off left , top and bottom edges//
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(paddle,randomVelocity);
  paddle.collide(edges);
  
  
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {paddle.y = paddle.y-20;
    
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y+20;
    
  }
  
  if(ball.x>400){
  ball.x = 200;
  ball.y = 200;
  }
 
  drawSprites();
  
}

function randomVelocity()
{
  
  
    
     
  
     var rand2 = Math.round(random(-5, 5));
     ball.velocityY = rand2;
     
     
  
  
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

