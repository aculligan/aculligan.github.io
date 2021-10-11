$( document ).ready(function() {

window.onunload = function(){}; 

var today = new Date();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

var downloadingImage = new Image();

downloadingImage.onload = function(){	
		$(".sprite").addClass("ready");	
};
downloadingImage.src = "Images/Main/first.png";

if (typeof year === 'undefined' || year === null){
	setTimeout(function(){
		alert("Application failed to start. Contact MM Publications for details. Error code: 661");
		$(".intro").append("<div class='introR'>r.</div>");
	}, 4000);
}
else{

	$(".intro").append("<div class='introR'>r."+ (year-2010)%10 +"b</div>");

	if(yyyy>year||(yyyy==year&&mm>12)){
		setTimeout(function(){
			alert("Application failed to start. Contact MM Publications for details. Error code: 665");
		}, 4000);
	}
	else{
		
		if(yyyy==year&&mm==12){
			setTimeout(function(){
				alert("Please contact the local MM Publications agent. This software will stop working in "+ (31 - today.getDate())+" days.");
			}, 4000);
		}
		window.name = "First";
		setTimeout(function(){ 
			
			window.open("MainMenu.html","_self");
			window.location = "MainMenu.html";
			window.name = "First";
		}, 4000);	

		
	}
}



if($(window).width()<1280 || $(window).height()<960){
	if($(window).height()/$(window).width()>0.75){
		scale=$(window).width()/1280;
	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': '0px'});
	$('.IWB').css({'top': ($(window).height()-(scale*960))/2+ 'px'});

	}
	else{
		scale=$(window).height()/960;
	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': ($(window).width()-(scale*1280))/2+ 'px'});
	$('.IWB').css({'top':'0px'});

		}
}

else{
$('.IWB').css({'left': ($(window).width()-1280)/2+ 'px'});
$('.IWB').css({'top': ($(window).height()-960)/2+ 'px'});
}





$(document).on("click", ".skipIntro", function () {
	window.name = "First";
	window.open("MainMenu.html","_self");
	window.location = "MainMenu.html";
	window.name = "First";
});






	



});
