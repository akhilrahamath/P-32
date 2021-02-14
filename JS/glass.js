class Glass{
  constructor(x,y,width,height){
    var options = {
      restitution:0,
      friction:1.0,
      density:1.0
  }
  this.width = width;
  this.height = height;
  this.image=loadImage("Images/glass.png");
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.Visiblity = 255;
  World.add(world,this.body);
}

  display(){
   if(this.body.speed<3){
    var pos=this.body.position;

    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);                                                                                                                                                                                                                                                                                                                                                                                              
    rectMode(CENTER);
    stroke("black");
    fill("blue");
    image(this.image,0,0,this.width,this.height);
    pop();
  }
       else{
         World.remove(world,this.body);
         push();
         this.Visiblity=this.Visiblity-5;
         tint(255,this.Visiblity);
         pop();
       }
     }

     Score(){
       if(this.Visiblity<0 && this.Visiblity>-1005){
         score++
       }
     }
   }