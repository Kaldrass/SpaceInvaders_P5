function Flower(x, y){
	this.x = x;
	this.y = y;
	this.r = 20;
	this.xdir = 1.2;

	this.grow = function(){
		this.r -= 2;
	}
	this.show = function(){
		fill(255, 0, 200);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}
	this.move = function(){
		this.x += this.xdir;
	}
	this.shiftD = function(){
		this.xdir *= -1;;
		this.y += 30;
	}
	this.collision = function(ship){
		var d = dist(this.x, this.y, ship.x, ship.y);
		if (d <= this.r + ship.r){
			return true;
		} else{
			return false;
		}
	}

}
