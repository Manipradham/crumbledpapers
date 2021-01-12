class Paper {
    constructor(x,y,radius){
        var options={
        'restitution':0.3,
        'friction':0.5,
        'density':1.2

        }

      this.radius = radius;
      this.body = Bodies.circle(this.x, y, this.radius/2, options);
      World.add(world,this.body)
      Matter.Body.setAngle(this.body,angle)

      

    }
        
    display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
            pop()
    }