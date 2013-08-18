$(document).on('ready',function configurarApp(){
	/*******/
	var canvas = document.getElementById('miCanvas');
	var ctx = canvas.getContext('2d');
	canvas.width = screen.availWidth;
	//dibujaFooter(canvas,ctx);


});


function dibujaFooter(canvas,ctx){
	ctx.moveTo(0,0);
	ctx.quadraticCurveTo(0,0,canvas.width,canvas.height);
	ctx.stroke();
}