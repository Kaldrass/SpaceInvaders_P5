function Ship(){
	this.x = width/2;
	this.xdir = 0;
	this.y = height-10;
	this.r = 10;

	this.show = function(){
		fill(255);
		ellipseMode(CENTER);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}
	this.move = function(dir){
		this.x += this.xdir*5;
		this.x = constrain(this.x, this.r, width-this.r)
	}
	this.setDir = function(dir){
		this.xdir = dir;
	}
}
