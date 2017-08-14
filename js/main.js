// let id = 1;
// $(document).ready(function(){
// 	$("#1").fadeIn();
	
// 	 start();
// });
// function start(){
// 	fading();
// 	setInterval(function(){
// 			 count();

// 		next();
// 		fading();
// 		$("#"+ id).fadeIn()
// 	},3000)
// }
// function next(){
// 	id = id+1;
// }

// function fading(){
// 	$("img.xx").fadeOut();
// }
// function count(){
// 	console.log($("div>img").length);
// 	console.log(id);
// 	if(id > $("div>img").length){
// 		id=0;
		
// 	}
// }

// $(".arrowLeft").click(function(){
// 	if(id <= 0){
// 		id=0;
// 		fading();
// 		nex();
// 		$("#"+id).fadeIn();

// 	}
// 	else{
// 	id -=1;
// 	fading();
// 	$("#"+id).fadeIn();	
// 	}
// });
// $(".arrowRight").click(function(){
// 	if(id > $("div>img").length){
// 		id=0;
// 		fading();
// 		next();
// 		$("#"+id).fadeIn();

// 	}
// 	else{
// 	next();
// 	fading();
// 	$("#"+id).fadeIn();	
// 	}

// });
$("#options").click(function(){
	$("#options").hide();
	$("#close2").show();
	$(".fullMobile").toggle();
	$("#Header").toggle();
	$("#area").toggle();
	$("#third").toggle();
});
$("#close2").click(function(){
	$("#options").show();
	$("#close2").hide();
	$(".fullMobile").hide();
	$("#Header").show();
	$("#area").show();
	$("#third").show();
});

$("#searchIcon").click(function(){
		$("#search").animate({
			"margin-top":"4%"
		},"slow");
		$("#searchIcon").fadeOut("slow");
		$("#margin").animate({"margin-top":"1%"},"slow");
});
$("#close1").click(function(){
		$("#search").animate({
			"margin-top":"-5.6%"
		},"slow");
		$("#searchIcon").fadeIn("slow");
		$("#margin").animate({"margin-top":"-6.2%"},"slow");
});