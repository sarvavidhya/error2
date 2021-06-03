
function preload() {
    //load the images here
    cat1=loadAnimation(" images/cat1.png");
    cat=loadAnimation("images/cat2.png","images/cat3.png");
    cat2=loadImage("images/cat4.png");
    mouse=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse1=loadImage("images/mouse1.png");
    mouse2=loadImage("images/mouse4.png");
    gardenImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    backGround=createSprite(400,400,800,800);
    backGround.addImage(gardenImg,"Background");
    cat=createSprite(700,460,10,10)
    cat.addAnimation("cat",cat1);
    cat.addAnimation("cat",cat)
    cat.scale=0.1
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if(keyDown(LEFT_ARROW)){
    cat .velocityX=-2
    cat.velocityY=2
    cat.changeAnimation("cat",cat);
    cat
  }
}