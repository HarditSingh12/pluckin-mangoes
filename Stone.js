class Stone{
constructor(x,y,radius){
    var options = {
        isStatic:true,
        restitution:1
    }
    this.body = Bodies.circle(x,y,radius,options);
    
    World.add(world,this.body)
    this.image = loadImage("stone.png");
    this.body.radius = radius;
    
}
display(){
   var pos = this.body.position;

    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.radius);
    this.image.scale = 0.5;
}
}