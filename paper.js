class Paper
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.6,
            friction:0.6,
            density:1.2,
        }
        this.body=Bodies.circle(x,y,70,options);
        this.radius=r
        this.image=loadImage("images/paper.png")
        World.add(world,this.body);
    }
    display()
    {

        imageMode(CENTER);
        
        image(this.image,this.body.position.x,this.body.position.y,this.radius,100);
    
    }
}