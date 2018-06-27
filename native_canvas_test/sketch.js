// sketch.js
const canvas = document.createElement('canvas'); //create canvas element
const ctx = canvas.getContext("2d"); //create 2d rendering

canvas.id = "CursorLayer"; //give it an id
canvas.width = 400;
canvas.height = 400;

const cube = { //create a cube with x&y position, width, and height
	pos: {
		x: 0,
		y: 150
	},
	width: 100,
	height: 100
};
let moveRight = true;

window.onload = ((event) => { //after window finishes loading
	setup();
});

function setup() { //mimick p5, could go directly in window.onload
	const body = document.getElementsByTagName("body")[0]; //grab the document body
	body.appendChild(canvas); //add canvas to body

	requestAnimationFrame(draw); //get first frame of animation ready, calls draw()
}

function draw() {
	ctx.fillStyle = "rgb(102,102,102)"; //set background color
	ctx.fillRect(0, 0, canvas.width, canvas.height); //create box filling canvas

	if (cube.pos.x <= canvas.width - cube.width && moveRight) { //if cube is still within canvas
		cube.pos.x++; //+1 to x
		// ctx.transform(1, 0, 0, 1, 1, 0);
	} else {
		// ctx.transform(1, 0, 0, 1, -1, 0);
		cube.pos.x--; //otherwise (when cube hits right edge of canvas) -1 to x
		moveRight = (cube.pos.x > 0) ? false : true; //if x value is 0, swap back to moving right
	}

	ctx.fillStyle = "rgb(255, 0, 0)"; //fill color for next set of objects
	ctx.setTransform(1, 0, 0, 1, cube.pos.x, cube.pos.y); //move cube to pos.x, pos.y (+/-1 on x)
	ctx.fillRect(0, 0, cube.width, cube.height); //create cube

	requestAnimationFrame(draw); //get next frame ready
}
