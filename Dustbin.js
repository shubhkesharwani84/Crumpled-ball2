class Dustbin {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        'isStatic':true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.bin = loadImage("dustbingreen.png")
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    rectMode(CENTER);
    fill("white")
    rect(pos.x, pos.y, this.width, this.height);
    image(this.bin, 730, 349);
    pop();
  }
};
