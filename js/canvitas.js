
$(document).on("ready",function(){

	var canvas = $("#draw")[0];
	var context = canvas.getContext('2d');
	context.font = "38pt Arial";
	context.fillStyle = "rgba(0,0,200,1)";
	context.fillText("Hola Canvas",canvas.width/2 - 150,canvas.height/2 + 15);
	context.strokeText("Hola Canvas",canvas.width/2 - 150,canvas.height/2 + 15);

	context.beginPath();
	context.strokeStyle = "rgba(0,0,200,0.8)";
	context.moveTo(200,305);
	context.lineTo(200,175);
	context.lineTo(60,305);
	context.lineTo(60,405);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.fillStyle = "rgba(125,0,125,0.8)";
	context.strokeStyle = "red";
	context.moveTo(300, 100);
	context.lineTo(340,150);
	context.lineTo(440,150);
	context.closePath();
	context.stroke();
	context.fill();

	context.beginPath();
	context.fillStyle = "red";
	context.moveTo(300,350);
	context.bezierCurveTo(300,330,270,310,250,330);
	context.bezierCurveTo(250,330,20,272.5,20,272);
	context.closePath();
	context.fill();

	context.beginPath();
	context.strokeStyle = "rgba(50,100,50,1)";
	context.moveTo(275,125);
	context.quadraticCurveTo(225,125,325,162);
	context.quadraticCurveTo(260,200,265,200);
	context.quadraticCurveTo(325,200,325,162);
	context.quadraticCurveTo(325,125,275,125);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.strokeStyle = "rgba(1,100,50,1)";
	context.moveTo(75,25);
	context.quadraticCurveTo(25,25,25,62.5);
	context.quadraticCurveTo(25,100,50,100);
	context.quadraticCurveTo(50,120,30,125);
	context.quadraticCurveTo(125,100,125,62.5);
	context.quadraticCurveTo(125,25,75,25);	
	context.closePath();
	context.stroke();

	context.beginPath();
	context.arc(375,275,50,0,Math.PI*2,true);
	context.moveTo(340,275);
	context.arc(375,275,35,0,2*Math.PI,false);
	context.moveTo(300,255);
	context.font = "italic 40px sans-serif";
	context.strokeText("HTML 5",50,450);
	context.closePath();
	context.stroke();

	

});