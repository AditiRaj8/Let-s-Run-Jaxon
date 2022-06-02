var runner, runner_running;
var track, invisibleTrack ,trackImage;
var coin, coinImage;


var score;

function preload(){
runner_running=loadAnimation("Runner-1.png","Runner-2.png;")  
trackImage=loadImage("path.png;")
coinImage=loadImage("coin.png;")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runner=createSprite(160,200,20,50);
  runner.addAnimation("running", runner_running);
  runner,scale=0.5;

  track=createSprite(200,200,20,20);
  track.addAnimation("ground",trackImage);
  track.velocityY=4;
  
  invisibleTrack=createSprite(200,210,20,20);
  invisibleTrack.visible=false;

}

function draw() {
  background(180);

  console.log(runner.x)

  //moving the runner with mouse
  runner.x=World.mouseX;




}
