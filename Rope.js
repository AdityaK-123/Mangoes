class Rope{
    constructor(bodyA, PointB){
        var options = {
            bodyA: bodyA,
            PointB: PointB,
            stiffness: 0.04,
            length: 3
        }
        this.PointB= PointB;
        this.Rope = Constraint.create(options);
        World.add(world,this.Rope);
    }
    attach(stonebody){
		this.Rope.bodyA=stonebody;
	}
        fly(){
         
            this.rope.bodyA= null;
        }
    
    display(){
       
        if(this.rope.bodyA){
            var pointA = this.Rope.bodyA.position;
            var pointB = this.PointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

}