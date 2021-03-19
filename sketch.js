const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score=0;
var engine, world;
var ground,block1,block2,block3,block4,block5,block6,block7,block8,block9;
var stand1,ball,slingShot;
var polygon_img;
function preload(){
    polygon_img=loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
stand1= new Stand(380,260,180,10);
block1=new Block(320,235,30,40);
block2=new Block(352,235,30,40);
block3=new Block(384,235,30,40);
block4=new Block(416,235,30,40);
block5=new Block(448,235,30,40);

block6=new Block(358,193,30,40);
block7=new Block(390,193,30,40);
block8=new Block(422,193,30,40);

block9=new Block(390,151,30,40);

ball=Bodies.circle(50,200,20);
World.add(world,ball);
slingShot=new Slingshot(this.ball,{x:100,y:200})

ground=new Ground(400,600,900,20);
}
function draw(){
    background(56,44,44);
    Engine.update(engine);
    text("SCORE: " + score,750,40);
    
    //strokeWeight(4);
    textSize("lightyellow");
    stand1.display();
    strokeWeight(2);
    fill("skyblue");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();

fill("pink");

block6.display();
block7.display();
block8.display();


block6.score();
block7.score();
block8.score();

fill("gray");
block9.display();
block9.score();

fill("yellow");
ground.display();

fill("gold");
imageMode(CENTER);
image(polygon_img,ball.position.x,ball.position.y,40,40);
slingShot.display();


drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

//function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon_img);
    }
//}