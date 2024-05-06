var canvas2 = document.querySelector('#canvas2');
var context2 = canvas2.getContext('2d');

context2.moveTo(160, 130);
context2.lineTo(75, 200);
context2.lineTo(150, 275);
context2.lineTo(250, 230);
context2.closePath();
 
context2.lineWidth = 5;
context2.strokeStyle = "#333333";
context2.fillStyle = "#FFCC00";
 
context2.fill();
context2.stroke();

// text
context2.font = '16px Arial';
context2.fillStyle = 'red';
context2.fillText('Good evening, Planet', 175, 450);


//========== centered circle ==========
//context2.beginPath();

var centerX = canvas2.width / 2;
var centerY = canvas2.height / 2;

//context2.arc(centerX, centerY, 150, 0, Math.PI * 2);
//context2.stroke();

//========== basic animation ==========

var circle = {
	x: 200,
	y: 200,
	size: 30,
	dx: 5,
	dy: 4
}

function drawCircle() {
	context2.beginPath();
	context2.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
	context2.fillStyle = 'purple';
	context2.fill();
}

function update() {
	context2.clearRect(0,0, canvas2.width, canvas2.height);

	drawCircle();

	//change position
	circle.x += circle.dx;
	circle.y += circle.dy;

	//detect side edges/ bounce
	if (circle.x + circle.size > canvas2.width || circle.x - circle.size < 0) {
		circle.dx *= -1;
	}

	if (circle.y + circle.size > canvas2.height || circle.y - circle.size < 0) {
		circle.dy *= -1;
	}

	requestAnimationFrame(update)
}

update();


//========== basic animation 2 ==========

function draw() {
	var canvas = document.querySelector('#canvas');
	var context = canvas.getContext('2d');

	context.fillStyle = 'green';
	context.fillRect(16, 16, 150, 100);

	context.fillStyle = 'rgba(69, 110, 190, 0.8)';
	context.fillRect(32, 32, 150, 100)

	context.fillRect(200, 25, 100, 100);
	context.clearRect(220, 45, 60, 60);
	context.strokeRect(225, 50, 50, 50);

	
	var canvas2 = document.getElementById('path');
	var ctx2 = canvas2.getContext('2d');

	//triangle
	ctx2.beginPath();
	ctx2.moveTo(175, 50);
	ctx2.lineTo(200, 75);
	ctx2.lineTo(200, 25);
	ctx2.fill();

	//smiley
	ctx2.beginPath();
    ctx2.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx2.moveTo(110, 75);
    ctx2.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx2.moveTo(65, 65);
    ctx2.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx2.moveTo(95, 65);
    ctx2.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx2.stroke();


	// filled and outlined triangle

	    // Filled triangle
		ctx2.beginPath();
		ctx2.moveTo(250, 25);
		ctx2.lineTo(300, 25);
		ctx2.lineTo(250, 75);
		ctx2.fill();
	
		// Stroked triangle
		ctx2.beginPath();
		ctx2.moveTo(250, 100);
		ctx2.lineTo(300, 50);
		ctx2.lineTo(300, 100);
		ctx2.closePath();
		ctx2.stroke();
}


// ============ Clock ============
function clock() {
	var now = new Date();
	var ctx = document.getElementById('canvas-clock').getContext('2d');
	ctx.save();
	ctx.clearRect(0, 0, 150, 150);
	ctx.translate(75, 75);
	ctx.scale(0.4, 0.4);
	ctx.rotate(-Math.PI / 2);
	ctx.strokeStyle = 'black';
	ctx.fillStyle = 'white';
	ctx.lineWidth = 8;
	ctx.lineCap = 'round';
  
	// Hour marks
	ctx.save();
	for (var i = 0; i < 12; i++) {
	  ctx.beginPath();
	  ctx.rotate(Math.PI / 6);
	  ctx.moveTo(100, 0);
	  ctx.lineTo(120, 0);
	  ctx.stroke();
	}
	ctx.restore();
  
	// Minute marks
	ctx.save();
	ctx.lineWidth = 5;
	for (i = 0; i < 60; i++) {
	  if (i % 5!= 0) {
		ctx.beginPath();
		ctx.moveTo(117, 0);
		ctx.lineTo(120, 0);
		ctx.stroke();
	  }
	  ctx.rotate(Math.PI / 30);
	}
	ctx.restore();
  
	var sec = now.getSeconds();
	var min = now.getMinutes();
	var hr  = now.getHours();
	hr = hr >= 12 ? hr - 12 : hr;
  
	ctx.fillStyle = 'black';
  
	// write Hours
	ctx.save();
	ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);
	ctx.lineWidth = 14;
	ctx.beginPath();
	ctx.moveTo(-20, 0);
	ctx.lineTo(80, 0);
	ctx.stroke();
	ctx.restore();
  
	// write Minutes
	ctx.save();
	ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(-28, 0);
	ctx.lineTo(112, 0);
	ctx.stroke();
	ctx.restore();
  
	// Write seconds
	ctx.save();
	ctx.rotate(sec * Math.PI / 30);
	ctx.strokeStyle = '#D40000';
	ctx.fillStyle = '#D40000';
	ctx.lineWidth = 6;
	ctx.beginPath();
	ctx.moveTo(-30, 0);
	ctx.lineTo(83, 0);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
	ctx.stroke();
	ctx.fillStyle = 'rgba(0, 0, 0, 0)';
	ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
	ctx.fill();
	ctx.restore();
  
	ctx.beginPath();
	ctx.lineWidth = 14;
	ctx.strokeStyle = '#325FA2';
	ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
	ctx.stroke();
  
	ctx.restore();
  
	window.requestAnimationFrame(clock);
  }
  
  window.requestAnimationFrame(clock);
