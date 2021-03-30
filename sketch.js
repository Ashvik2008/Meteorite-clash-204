//Creating variables here
var Player,Player_Img;
var Msg1,Message_Img;
var bullet,bullet_Img;

var gameState = 0;

function preload() {
	//loading images
  Player_Img = loadImage("Images/Ship.png");
  Message_Img = loadImage("Images/Message.png");
  background_Img = loadImage("Images/Background.jpeg")
}

function setup() {
  //canvas
	createCanvas(600, 600);

  //creating message
  Msg1 = createSprite(290,250);
  Msg1.addImage(Message_Img);

  //creating startbutton
  StartButton = createButton("START MISSION NOW !");
  StartButton.position(24,530);
  StartButton.style('height','50px');
  StartButton.style('width','580px');
  StartButton.style('background','red');
  StartButton.mousePressed(()=>{
    
    //changing gameState
    gameState = 1

    //creating the player
    Player = createSprite(300,530,20,20);
    Player.addImage(Player_Img);
    Player.scale = 0.65;

  })
}


function draw() {  
  //background color
  if(gameState === 0) {
    background(0);
  }
  else{
    background(background_Img)
  }
  //hiding button and message
  if(gameState === 1)
  {
    StartButton.hide();
    Msg1.destroy();
  }

  //making player move
  if (keyIsDown(RIGHT_ARROW) && gameState === 1) {
    Player.x = Player.x + 5;
  }

  if (keyIsDown(LEFT_ARROW)&& gameState === 1 ) {
    Player.x = Player.x - 5;
  }

  //drawing the sprites
  drawSprites();


}

