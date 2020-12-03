class Shooter {
    constructor(x, y, width, height) {
      var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0 
      }
      this.body = Bodies.circle(50,200,20, options);
      this.polygon=loadImage("polygon.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      imageMode(CENTER)
      image(this.polygon,0,0,40,40);
      pop();
    }
  };
  