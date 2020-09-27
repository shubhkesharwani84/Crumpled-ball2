class Paper{
   constructor(x,y, radius){
    var options ={
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
   }
   this.body = Bodies.circle(x, y, radius, options);
   this.radius = radius;
   this.paper = loadImage("paper.png");
   World.add(world, this.body);

    }
    display(){
        ellipseMode(CENTER);
        image(this.paper,this.body.position.x,this.body.position.y,this.radius,this.radius)
  }
    
}