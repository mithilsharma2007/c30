class Slingshot{
    constructor(b1,pointB){
        var options = {
            bodyA:b1,
        pointB:pointB,
    length:10,
    stiffness:0.04,
        }
        this.pointB=pointB
       this.chain = Constraint.create(options)
        World.add(world,this.chain)  
     this.sling1=loadImage("sprites/sling1.png")
     this.sling2=loadImage("sprites/sling2.png")   
     this.sling3=loadImage("sprites/sling3.png")
    }
    attached(body){
        this.chain.bodyA=body
    }
    display(){
        image (this.sling1,200,20)
        image (this.sling2,170,20)
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position
            var pointB = this.pointB
            push ()
            stroke("#2269e5");
            if (pointA.x<220){
                strokeWeight(15);
                line(pointA.x-25,pointA.y,pointB.x-10,pointB.y) 
                line(pointA.x-25,pointA.y,pointB.x+30,pointB.y-3) 
                image (this.sling3,pointA.x-30,pointA.y-10,15,30)
            }
           else {
            strokeWeight(5);
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y) 
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3) 
            image (this.sling3,pointA.x+25,pointA.y-10,15,30)
           }
           
            pop ()
        }
            
    }
    fly(){
        this.chain.bodyA=null
    }
}