const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var man
var man_image;
var ground;
var ground_options;
var maxDrops = 100;
var drops = [];
var thunder1, thunder2, thunder3;

function preload(){
  man_image = loadImage("Man.png");
  thunder1 = loadImage("thunder1.png");
  thunder2 = loadImage("thunder2.png");
  thunder3 = loadImage("thunder3.png");
}

function setup(){
  var canvas = createCanvas(500,500);

  engine = Engine.create();
  world  = engine.world;


  if(frameCount%100===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400),8,8));
     }
    }

}

function draw(){
  background(0);
  Engine.update(engine);

  var rand = Math.round(random(1,2));
  if(frameCount%80===0){
   var thunderCreatedFrame = frameCount;
   var thunder = createSprite(random(10,370),random(10,30),10,10);
   switch(rand){
     case 1 : thunder.addImage(thunder1);
     break;
     case 2 : thunder.addImage(thunder2);
     break;
     case 3 : thunder.addImage(thunder3);
     break;
     default : break;
   }
   thunder.scale = random(1.5,2.5);

   if(thunderCreatedFrame +10 === frameCount&& thunder){
      thunder.destroy();
   }
  }


  
  for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
 
  
  drawSprites();
}


