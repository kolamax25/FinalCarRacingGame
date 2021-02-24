var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var carsEnd = 0;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img, bg2;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
  bg2 = loadImage("images/Leaderboard-blog.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(gameState === 0){
    background("lavender")
  }
  else{
    background(bg2);
  }

  if(playerCount === 4 && carsEnd === 0){
    game.update(1);
  }

  if(gameState === 1){
   
    game.play();

  if(carsEnd === 4){
    game.update(2);
}
  }
  if(gameState === 2 && carsEnd === 4){
    game.displayRank();
  
  }

  
}
