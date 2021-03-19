
class Ground {
    constructor(x,y,width,height) {
      var Goptions = {
        isStatic: true
    }
      this.body = Bodies.rectangle(x,y,width,height,Goptions);
      this.width = width;
      this.height = height;
      
      World.add(world,this.body);
    
    }
    display(){
      var Gpos =this.body.position;
      push();
      rectMode(CENTER);
      stroke("yellow");
      strokeWeight(5)
      fill("purple");
      rect(Gpos.x, Gpos.y, this.width, this.height);
      pop();
    }

  };