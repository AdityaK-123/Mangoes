class Stone{
    constructor(x,y){
        var options = {
          restitution:0,
          isStatic:true,
          friction:15
          
        }
        this.body = Bodies.circle(x,y,18,options);
        
        this.image = loadImage('stone.png');
        World.add(world,this.body);

    }
    display(){
            
           
            push();
            var Spos = this.body.position;
            imageMode(CENTER);
            image(this.image,Spos.x,Spos.y,40,40);
            pop();
    }
}