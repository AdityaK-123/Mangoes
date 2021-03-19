class mango{
    constructor(x,y){
        var options = {
          restitution:0,
          isStatic:true,
          friction:15
          
        }
        this.body = Bodies.circle(x,y,18,options);
        
        this.image = loadImage('mango.png');
        World.add(world,this.body);

    }
    display(){
            push();
            var Mpos = this.body.position;
            imageMode(CENTER);
            image(this.image,Mpos.x,Mpos.y,60,60);
            pop();
    }
}