const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground,ground1,ground2;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29,b30,b31,b32;

var polygon;

var shot;

var score = 0

function setup(){
var canvas = createCanvas(1200,400);

engine = Engine.create();
world = engine.world;

ground=new Ground(600,height,1200,20);

ground1=new Ground(390,300,250,20);
ground2=new Ground(790,300,250,20);

polygon=new Stone(75,75,40);

shot=new Slingshot(polygon.body,{x:75,y:75});

b1=new Glass(300,275,30,40);
b2=new Glass(330,275,30,40);
b3=new Glass(360,275,30,40);
b4=new Glass(390,275,30,40);
b5=new Glass(420,275,30,40);
b6=new Glass(450,275,30,40);
b7=new Glass(480,275,30,40);
b8=new Glass(330,235,30,40);
b9=new Glass(360,235,30,40);
b10=new Glass(390,235,30,40);
b11=new Glass(420,235,30,40);
b12=new Glass(450,235,30,40);
b13=new Glass(360,195,30,40);
b14=new Glass(390,195,30,40);
b15=new Glass(420,195,30,40);
b16=new Glass(390,155,30,40);

b17=new Glass(700,275,30,40);
b18=new Glass(730,275,30,40);
b19=new Glass(760,275,30,40);
b20=new Glass(790,275,30,40);
b21=new Glass(820,275,30,40);
b22=new Glass(850,275,30,40);
b23=new Glass(880,275,30,40);
b24=new Glass(730,235,30,40);
b25=new Glass(760,235,30,40);
b26=new Glass(790,235,30,40);
b27=new Glass(820,235,30,40);
b28=new Glass(850,235,30,40);
b29=new Glass(760,195,30,40);
b30=new Glass(790,195,30,40);
b31=new Glass(820,195,30,40);
b32=new Glass(790,155,30,40);
}

function draw(){
  background(0);

  Engine.update(engine);

  noStroke();
  fill("white");
  textSize(24);
  text("Score:"+score,1000,50);

  ground.display();

  ground1.display();
  ground2.display();

  polygon.display();

  shot.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();

  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();
  b31.display();
  b32.display();

  b1.Score();
  b2.Score();
  b3.Score();
  b4.Score();
  b5.Score();
  b6.Score();
  b7.Score();
  b8.Score();
  b9.Score();
  b10.Score();
  b11.Score();
  b12.Score();
  b13.Score();
  b14.Score();
  b15.Score();
  b16.Score();

  b17.Score();
  b18.Score();
  b19.Score();
  b20.Score();
  b21.Score();
  b22.Score();
  b23.Score();
  b24.Score();
  b25.Score();
  b26.Score();
  b27.Score();
  b28.Score();
  b29.Score();
  b30.Score();
  b31.Score();
  b32.Score();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  shot.fly();  
}

function keyPressed(){
  if(keyCode===32){
      shot.attach(polygon.body);
  }
}
