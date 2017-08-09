let id = 1;
$(document).ready(function(){
	$("#1").fadeIn();
	
	 start();
});
function start(){
	fading();
	setInterval(function(){
			 count();

		next();
		fading();
		$("#"+ id).fadeIn()
	},3000)
}
function next(){
	id = id+1;
}

function fading(){
	$("img.xx").fadeOut();
}
function count(){
	console.log($("div>img").length);
	console.log(id);
	if(id > $("div>img").length){
		id=0;
		
	}
}

$(".arrowLeft").click(function(){
	if(id <= 0){
		id=0;
		fading();
		nex();
		$("#"+id).fadeIn();

	}
	else{
	id -=1;
	fading();
	$("#"+id).fadeIn();	
	}
});
$(".arrowRight").click(function(){
	if(id > $("div>img").length){
		id=0;
		fading();
		next();
		$("#"+id).fadeIn();

	}
	else{
	next();
	fading();
	$("#"+id).fadeIn();	
	}

});
$("#options").click(function(){
$(".Options").toggle();
});