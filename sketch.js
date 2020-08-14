var fixedRect, movingRect,obs1,obs2,edges

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  obs1=createSprite(100,500,20,30)
  obs1.shapeColor="lightblue"
  obs1.velocityX=3
  obs2=createSprite(700,500,20,30)
  obs2.shapeColor="white"
  obs2.velocityX=-3
  
}

function draw() {
  background(0,0,0);
  bounceoff(movingRect,fixedRect) 
  bounceoff(obs1,obs2)
  edges=createEdgeSprites()
  movingRect.bounceOff(edges)
  fixedRect.bounceOff(edges)
  obs1.bounceOff(edges)
  obs2.bounceOff(edges)


  
  drawSprites();
}
