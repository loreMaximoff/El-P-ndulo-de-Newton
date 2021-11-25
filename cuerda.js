class rope{
	constructor(body1,body2, body3, body4, body5, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			bodyA:body3,
			bodyB:body4,
			bodyA:body5,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		//console.log(opciones);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		var Anchor1X=pointA.x
		var Anchor1Y=pointA.y

		var Anchor2X=pointB.x+this.offsetX
		var Anchor2Y=pointB.y+this.offsetY

		var Anchor3X=pointA.x
		var Anchor3Y=pointA.y

		var Anchor4X=pointA.x
		var Anchor4Y=pointA.y

		var Anchor5X=pointA.x
		var Anchor5Y=pointA.y




		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y,Anchor3X,Anchor3Y,Anchor4X,Anchor4Y,Anchor5X,Anchor5Y);
	}

}
