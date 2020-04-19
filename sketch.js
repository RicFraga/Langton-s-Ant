/*
States:
1 = white square
0 = black square

Directions:
1 = up
2 = right
3 = left
4 = down
*/

// Height and width from the lattice
let w = 600;
let h = 600;

// Direction in which the ant is going to move
let direction = 4;

// Array as lattice to save the color of the squares
var grid = Array(w).fill(1).map(() => Array(h));
let state;

// Initial position for the ant
let x = parseInt(w / 2);
let y = parseInt(h / 2);

function setup(){
	createCanvas(w, h);
	background(60);

	// Fill in lattice
	for(var i = 0; i < w; i++){
		for(var j = 0; j < h; j++){
			grid[i][j] = 1;
		}
	}
}

function draw(){
	
	for(var a = 0; a < 40; a++)
	{	
	// Getting the state
	state = grid[x][y];

	// Ant in white square
	if(state == 1){

		// Turn 90 degrees clockwise
		if(direction == 1){
			direction = 2;
		}

		else if(direction == 2){
			direction = 3;
		}

		else if(direction == 3){
			direction = 4;
		}

		else if(direction == 4){
			direction = 1;
		}

		// Flip color
		grid[x][y] = 0;
		fill(0);
		circle(x, y, 3);

		// Move one unit forward
		if(direction == 1)
			y--;

		else if(direction == 2)		
			x++;

		else if(direction == 3)
			y++;

		else if(direction == 4)
			x--;

		if(x > width - 1)
			x = 0;

		else if(x < 0)
			x = width - 1;

		if(y > height -1)
			y = 0;

		else if(y < 0)
			y = height - 1;
	}

	// Ant in black square
	else if(state == 0){

		// Turn 90 degrees clockwise
		if(direction == 1){
			direction = 4;
		}

		else if(direction == 2){
			direction = 1;
		}

		else if(direction == 3){
			direction = 2;
		}

		else if(direction == 4){
			direction = 3;
		}

		// Flip color
		grid[x][y] = 1;
		fill(255);
		circle(x, y, 3);

		// Move one unit forward
		if(direction == 1)
			y--;

		else if(direction == 2)
			x++;

		else if(direction == 3)
			y++;

		else if(direction == 4)
			x--;

		if(x > width - 1)
			x = 0;

		else if(x < 0)
			x = width - 1;

		if(y > height -1)
			y = 0;

		else if(y < 0)
			y = height - 1;
	}

	}
}