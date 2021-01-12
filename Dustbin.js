class Dustbin {
    constructor(x,y){

        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 100;
        this.thickness = 20;
        this.amgle = 0;

        this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,{istatic: true });
        this.leftbody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,{istatic: true})
        Matter.Body.setAngle(this.leftbody,this.angle)
         this.rightbody = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,{istatic:true}) 
         Matter.body.setAngle(this.rightbody,(-1)*this.angle);             
         world.add(world,this.bottombody)
         world.add(world,this.leftbody)
         world.add(world,this.rightbody)  

    }
        
    display(){
        var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
    }
    
}