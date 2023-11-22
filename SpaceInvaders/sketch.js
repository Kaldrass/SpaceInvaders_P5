var ship;
var flowers = [];
var drops = [];
var defeat = false;

function setup(){
	createCanvas(600,400);
	ship = new Ship();
	flower = new Flower();
		for (var i = 0; i<11; i++){
			flowers[i] = new Flower(i*45+20, 20);
		}
}
function draw(){
	background(51); 

	for (var i = 0; i < drops.length; i++){
		drops[i].show();
		drops[i].move();
		for( var j = 0; j < flowers.length; j++) {
			if (drops[i].hits(flowers[j])) {
				flowers[j].grow();
				drops[i].evaporate();
			}
			if (flowers[j].r<=10){
				flowers.splice(j, 1);
			}
			if (flowers.length == 0){
				console.log("You win");
			}
		}
	}
	ship.show();
	ship.move();

	var edgeRL = false;
	var edgeB = false;

	for (var i = 0; i < flowers.length; i++){
		flowers[i].show();
		flowers[i].move();	
		if (flowers[i].x >= width-flowers[i].r || flowers[i].x <= flowers[i].r){
			edgeRL = true;
		} 
		if (flowers[i].y > height-(flowers[i].r) || flowers[i].collision(ship)){
			edgeB = true;
		}
	}
	if (edgeRL){
		for (var i = 0; i < flowers.length; i++){
			flowers[i].shiftD();
			} 
	}
	if (edgeB){
		for (var i = 0; i < flowers.length; i++){
			flowers[i].xdir = 0;
			defeat = true;
			//console.log("You lost");
		}
	}


	for (var i = drops.length-1; i >= 0; i--){
		if (drops[i].toDelete){
			drops.splice(i, 1);
		}      
	}
	
}
function keyReleased(){
	if (key != ' '){
		ship.setDir(0);
	}
}
function mousePressed(){
	var drop = new Drop(ship.x, height);
	drops.push(drop);
}
function keyPressed(){
	if (key === ' ' && defeat === false){
		var drop = new Drop(ship.x, height);
		drops.push(drop);
	}
	if (keyCode === RIGHT_ARROW && ship.x + ship.r < width && defeat === false){
			ship.setDir(1);
	}
	else if (keyCode === LEFT_ARROW && ship.x > ship.r && defeat === false){
			ship.setDir(-1);
	}
}