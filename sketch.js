var rm,rp
function setup() {
  createCanvas(800,400);
  rm=createSprite(400, 200, 50, 50);
  rm.shapeColor="green"
  rp=createSprite(200,200,50,50)
  rp.shapeColor="green"
}

function draw() {
  background(250);  
  rm.x=World.mouseX
  rm.y=World.mouseY
  console.log(rm.x-rp.x)
  if(rm.x-rp.x<rm.width/2+rp.width/2&&rp.x-rm.x<rm.width/2+rp.width/2
    &&rm.y-rp.y<rm.height/2+rp.height/2&&rp.y-rm.y<rm.height/2+rp.height/2){
    rm.shapeColor="red"
    rp.shapeColor="red"
  }
  else{
    rm.shapeColor="green"
    rp.shapeColor="green"
  }
  drawSprites();
}