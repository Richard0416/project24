class Stone{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var option={
		'restitution':0.8,
		friction:0.9,
		density:12
	}
		this.height=height;
		this.width=width;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            rect(0,0,this.width,this.height);
			pop()
	}

}