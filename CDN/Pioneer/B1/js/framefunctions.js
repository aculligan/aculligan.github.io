$( document ).ready(function() {

//intro fix
 if(typeof year === 'undefined' || year === null){window.location.href = "../Intro.html";}
var today = new Date();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(yyyy>year||(yyyy==year&&mm>12)){	
	window.location.href = "../Intro.html";
} 	
	
var currentFrame=0;
var container=$(".container");
$(".IWB").addClass("loading");


//Αρχικοποιήσεις μεταβλητών ήχου-βίντεο
var soundInterval;
var soundButtonInterval;
var videoInterval;
var justiInterval;
var soundCurrent;
var videoCurrent;
var subs;
var scrollY;
var srl={};
var irrV=0;
var tempAS;var tempAS2;
var scrollCounter=0; //Tools scroll variable
var scrollEnd; //Tools scroll variable

//Εικονίδια justification
var justF='<svg width="25px" height="25px" viewBox="0 0 25 25"> <circle fill="#C8C8C8" cx="12.5" cy="12.5" r="12.5"/> <g class="gMain" fill="#000000"> <path  d="M12.871,15.674c-0.47,0-0.851-0.381-0.851-0.85v-1.533c0-1.46,0.951-2.252,1.716-2.89 c0.761-0.634,1.191-1.03,1.191-1.792c0-1.263-1.026-2.29-2.289-2.29c-1.034,0-1.942,0.695-2.209,1.691 c-0.121,0.454-0.587,0.725-1.041,0.601C8.935,8.49,8.667,8.024,8.788,7.571c0.466-1.738,2.05-2.951,3.851-2.951 c2.199,0,3.988,1.79,3.988,3.99c0,1.595-0.998,2.428-1.803,3.098c-0.705,0.587-1.104,0.951-1.104,1.583v1.533 C13.721,15.293,13.34,15.674,12.871,15.674z"/> <circle cx="12.931" cy="18.668" r="1.123"/> </g> </svg>';
var justTips='<svg width="25px" height="25px" viewBox="0 0 25 25" > <circle fill="#C8C8C8" cx="12.5" cy="12.5" r="12.5"/> <g class="gMain" fill="#000000"> <circle cx="12.5" cy="19.093" r="1.248"/>	 <path  d="M12.476,15.848c-0.001,0-0.002,0-0.003,0c-0.531-0.003-0.969-0.418-0.996-0.949l-0.476-9.188 c-0.014-0.274,0.085-0.542,0.273-0.74c0.19-0.2,0.452-0.312,0.726-0.312h1c0.275,0,0.538,0.113,0.727,0.313 c0.189,0.199,0.287,0.469,0.271,0.743l-0.523,9.188C13.443,15.434,13.006,15.848,12.476,15.848z"/> </g> </svg>';
var justKey='<svg width="25px" height="25px" viewBox="0 0 25 25" > <circle fill="#C8C8C8" cx="12.5" cy="12.5" r="12.5"/> <g class="gMain" fill="#000000"> <path d="M20.375,10.745h-7.979c-0.432-1.997-2.208-3.5-4.333-3.5c-2.447,0-4.438,1.991-4.438,4.438 c0,2.447,1.99,4.437,4.438,4.437c2.079,0,3.815-1.441,4.294-3.375h3.675v2.015c0,0.553,0.447,1,1,1s1-0.447,1-1v-2.015h1.344v2 c0,0.553,0.447,1,1,1s1-0.447,1-1v-3C21.375,11.193,20.928,10.745,20.375,10.745z M8.063,14.119c-1.344,0-2.438-1.092-2.438-2.437 c0-1.344,1.094-2.438,2.438-2.438s2.438,1.094,2.438,2.438C10.5,13.027,9.406,14.119,8.063,14.119z"/> </g> </svg>';
var justKeyT='<svg class="justKeyT" width="25px" height="25px" viewBox="0 0 25 25" > <circle fill="#00052d" cx="12.5" cy="12.5" r="12.5"/> <g class="gMain" fill="#ffffff"> <path d="M20.375,10.745h-7.979c-0.432-1.997-2.208-3.5-4.333-3.5c-2.447,0-4.438,1.991-4.438,4.438 c0,2.447,1.99,4.437,4.438,4.437c2.079,0,3.815-1.441,4.294-3.375h3.675v2.015c0,0.553,0.447,1,1,1s1-0.447,1-1v-2.015h1.344v2 c0,0.553,0.447,1,1,1s1-0.447,1-1v-3C21.375,11.193,20.928,10.745,20.375,10.745z M8.063,14.119c-1.344,0-2.438-1.092-2.438-2.437 c0-1.344,1.094-2.438,2.438-2.438s2.438,1.094,2.438,2.438C10.5,13.027,9.406,14.119,8.063,14.119z"/> </g> </svg>';

//Εικονίδιο ήχου
var justSound=' <g fill="#010101" class="justPlayBtn">	 <path  d="M10.877,10.639c-0.143,0-0.285-0.063-0.385-0.18c-0.176-0.213-0.148-0.527,0.064-0.705 c0.711-0.594,1.117-1.451,1.117-2.354c0-0.83-0.324-1.608-0.916-2.192c-0.197-0.194-0.199-0.51-0.004-0.707 c0.193-0.196,0.51-0.199,0.707-0.004c0.783,0.773,1.213,1.805,1.213,2.903c0,1.2-0.537,2.338-1.477,3.122 C11.104,10.6,10.99,10.639,10.877,10.639z"/> <path d="M12.846,12.605c-0.137,0-0.273-0.055-0.371-0.164c-0.186-0.205-0.17-0.521,0.035-0.707 c1.229-1.109,1.934-2.689,1.934-4.334c0-1.57-0.615-3.044-1.73-4.15c-0.195-0.194-0.197-0.511-0.002-0.707 c0.195-0.196,0.512-0.198,0.707-0.003c1.307,1.295,2.025,3.021,2.025,4.86c0,1.926-0.824,3.776-2.264,5.077 C13.084,12.563,12.965,12.605,12.846,12.605z"/> <path d="M15.146,14.908c-0.133,0-0.266-0.053-0.365-0.158c-0.188-0.201-0.178-0.518,0.023-0.707 c1.867-1.746,2.895-4.105,2.895-6.643c0-2.439-0.953-4.731-2.684-6.454c-0.195-0.195-0.195-0.512-0.002-0.707 c0.195-0.196,0.512-0.196,0.707-0.002c1.922,1.912,2.979,4.456,2.979,7.163c0,2.819-1.141,5.436-3.211,7.374 C15.393,14.863,15.27,14.908,15.146,14.908z"/> <path d="M8.3,2.27c0-0.55-0.318-0.682-0.707-0.293L5.148,4.422C4.759,4.811,3.991,5.129,3.441,5.129H1.3 c-0.55,0-1,0.45-1,1v3c0,0.551,0.45,1,1,1h2.024c0.55,0,1.318,0.318,1.707,0.707l2.562,2.563C7.982,13.787,8.3,13.654,8.3,13.105 V2.27z"/>	 </g> ';

var vFlag=0;
var scale=1;
var inter;
var tlTip=1;
var zoomFlag=0;

//'Ονομα project(Χρησιμεύει στην αποθήκευση των tools)
var projectName="Pioneer B1";

//Click sound
$("body").append('<audio class="clickSound"><source src="../Audio/Click.mp3" type="audio/mpeg"></audio>');




//if(Infos.Book){$(".mBook").html(Infos.Book);}
if(Infos.ModuleText){$(".mModule").html(Infos.ModuleText)}else{$(".mModule").parent().fadeOut(0);}

if(Infos.Type=='Student\'s Book'){$(".tSvg path").css("fill","#0037ff")}
if(Infos.Type=='Workbook'){$(".tSvg path").css("fill","#9b27ff")}
if(Infos.Type=='Grammar Book'){$(".tSvg path").css("fill","#9bff00");$(".tSvg text").css("fill","black")}
if(Infos.Type){$(".mType").html(Infos.Type);$(".mModule").addClass("mLeft");}
if(Infos.Type=="Video Worksheet"){$(".mType").html("Video Activities");}//Video Activities instead Video Worksheets
if(Infos.ModuleText.indexOf("Master")>0){$(".mType").html("Video Worksheet");}//Video Worksheet instead Video Worksheets

console.log(Infos.Type);
if(Infos.noThumb){
	$(".mainWrapper").append('<div class="mainBack"><svg width="40px" height="40px" viewBox="0 0 40 40" class="secondBackbtn">  <circle fill="white" cx="20" cy="20" r="19.5"></circle> <path fill="gray" d="M13.372,16.936L23.407,6.901c0.526-0.526,1.378-0.526,1.904,0c0.523,0.526,0.523,1.377,0,1.904L15.056,19.062 l10.256,10.257c0.263,0.264,0.395,0.606,0.395,0.952c0,0.344-0.132,0.688-0.395,0.952c-0.525,0.525-1.377,0.525-1.903,0 L13.374,21.188l-2.08-2.126L13.372,16.936z"></path>  </svg>  </div>');
}
else{
//new buttons
	$(".mainOptionsSpread").append('<div class="drop-Curtain"><svg width="70px" height="70px" viewBox="0 0 70 70" class="drop-Curtainbtn"><path fill="#00052D" d="M34.999,70C15.701,70,0,54.299,0,35C0,15.701,15.701,0,34.999,0C54.302,0,70,15.701,70,35C70,54.299,54.302,70,34.999,70L34.999,70z"/><path fill="#FFFFFF" d="M35.697,48.268v-4.76h16.415c0.636,0,1.152-0.516,1.152-1.152V20.578c0-0.636-0.517-1.153-1.152-1.153 H17.891c-0.636,0-1.152,0.518-1.152,1.153v21.778c0,0.637,0.517,1.152,1.152,1.152h15.5v4.76h-0.825c-0.637,0-1.154,0.518-1.154,1.152c0,0.637,0.518,1.154,1.154,1.154h3.869c0.637,0,1.154-0.518,1.154-1.154c0-0.635-0.518-1.152-1.154-1.152H35.697z M50.96,21.73v19.473H19.043V21.73H50.96z"/><path fill="#FFFFFF" d="M22.066,39.717h25.87c0.588,0,1.065-0.477,1.065-1.064V24.281c0-0.588-0.478-1.064-1.065-1.064h-25.87 c-0.587,0-1.064,0.477-1.064,1.064v14.372C21.002,39.24,21.479,39.717,22.066,39.717z M23.131,37.588V25.345h23.741v12.243H23.131 z"/></svg> </div>');
	$(".mainOptionsSpread").append('<div class="spreadHome"><svg width="70px" height="70px" viewBox="0 0 70 70" class="spreadHomeBtn "> <path fill="#00052D" d="M35,70C15.7,70,0,54.3,0,35S15.7,0,35,0c19.3,0,35,15.7,35,35S54.3,70,35,70L35,70z"/><path fill="#FFFFFF" d="M54.4,33.8L35.7,20.4c-0.4-0.3-0.9-0.3-1.3,0L15.6,33.8c-0.5,0.4-0.6,1.1-0.3,1.6c0.4,0.5,1.1,0.6,1.6,0.3l2.9-2.1v15c0,0.6,0.5,1.2,1.2,1.2h9.9c0.6,0,1.2-0.5,1.2-1.2V38.4h5.8v10.2c0,0.6,0.5,1.2,1.2,1.2h10c0.6,0,1.2-0.5,1.2-1.2v-15l2.9,2.1c0.5,0.4,1.3,0.2,1.6-0.3C55,34.9,54.9,34.2,54.4,33.8z M39,36.1h-8.1c-0.6,0-1.2,0.5-1.2,1.2v10.2h-7.6v-15c0-0.2,0-0.3-0.1-0.5L35,22.8L47.9,32c-0.1,0.1-0.1,0.3-0.1,0.5v15h-7.6V37.3C40.2,36.7,39.7,36.1,39,36.1z"/></svg></div>');
	$(".mainOptionsSpread").append('<div class="mainBack"><svg width="70" height="70" viewBox="0 0 70 70" class="secondBackbtn2 "><path d="M35,70A35,35,0,1,1,68.63,25.36a35,35,0,0,1-24,43.28A35.2,35.2,0,0,1,35,70Z" transform="translate(0 0)" fill="#00052d"/><rect x="15.75" y="18.98" width="9.79" height="6.55" fill="#fff"/><rect x="30.11" y="18.98" width="9.79" height="6.55" fill="#fff"/><rect x="44.46" y="18.98" width="9.79" height="6.55" fill="#fff"/><rect x="15.75" y="31.72" width="9.79" height="6.55" fill="#fff"/><rect x="30.11" y="31.72" width="9.79" height="6.55" fill="#fff"/><rect x="44.46" y="31.72" width="9.79" height="6.55" fill="#fff"/><rect x="15.75" y="44.47" width="9.79" height="6.55" fill="#fff"/><rect x="30.11" y="44.47" width="9.79" height="6.55" fill="#fff"/><rect x="44.46" y="44.47" width="9.79" height="6.55" fill="#fff"/></svg>  </div>');
	$(".mainOptionsSpread").append('<div class="zoomSpread"><svg width="70px" height="70px" viewBox="0 0 70 70" class="zoomSpreadbtn "><path fill="#00052D" d="M35.002,70.001C15.701,70.001,0,54.3,0,35.001C0,15.7,15.701-0.001,35.002-0.001S70,15.7,70,35.001	C70,54.3,54.303,70.001,35.002,70.001L35.002,70.001z"/><path fill="#FFFFFF" d="M21.064,19.249h8c0.705,0,1.277-0.572,1.277-1.277s-0.572-1.277-1.277-1.277H17.982c-0.168,0-0.334,0.033-0.49,0.098c-0.131,0.055-0.258,0.137-0.373,0.244l0.006,0.008l-0.1,0.094			c-0.07,0.08-0.158,0.191-0.221,0.342c-0.068,0.16-0.102,0.33-0.1,0.496v11.08c0,0.703,0.572,1.277,1.277,1.277s1.277-0.574,1.277-1.277V21.06l11.584,11.594c0.242,0.242,0.563,0.375,0.904,0.375c0.34,0,0.66-0.133,0.902-0.375			c0.242-0.24,0.375-0.561,0.375-0.9c0.002-0.342-0.133-0.664-0.375-0.906L21.064,19.249z"/><path fill="#FFFFFF" d="M53.203,17.485c-0.064-0.158-0.158-0.299-0.277-0.418l-0.1-0.08c-0.104-0.086-0.207-0.15-0.318-0.197			c-0.156-0.063-0.318-0.096-0.486-0.096H40.938c-0.703,0-1.277,0.572-1.277,1.277s0.574,1.277,1.277,1.277h8l-11.584,11.6c-0.494,0.498-0.492,1.309,0.006,1.807c0.242,0.24,0.563,0.373,0.902,0.373c0.342,0,0.662-0.133,0.904-0.375L50.744,21.06v7.996c0,0.703,0.572,1.277,1.277,1.277s1.277-0.574,1.277-1.277V17.972C53.299,17.804,53.266,17.64,53.203,17.485z"/><path fill="#FFFFFF" d="M30.844,37.347L19.26,48.94v-7.996c0-0.703-0.572-1.277-1.277-1.277s-1.277,0.574-1.277,1.277v11.074c-0.002,0.174,0.031,0.344,0.098,0.5c0.063,0.15,0.156,0.264,0.172,0.273l0.156,0.182c0.117,0.104,0.234,0.18,0.363,0.234c0.156,0.064,0.32,0.098,0.488,0.098h11.082c0.705,0,1.277-0.572,1.277-1.277s-0.572-1.277-1.277-1.277h-8L32.65,39.153c0.242-0.242,0.377-0.564,0.375-0.906c0-0.342-0.133-0.662-0.373-0.9C32.17,36.862,31.328,36.864,30.844,37.347z"/><path fill="#FFFFFF" d="M52.021,39.667c-0.705,0-1.277,0.574-1.277,1.277v7.996L39.166,37.347c-0.482-0.482-1.324-0.482-1.807-0.002c-0.498,0.496-0.5,1.307-0.004,1.809l11.582,11.598h-8c-0.703,0-1.277,0.572-1.277,1.277	s0.574,1.277,1.277,1.277h11.084c0.166,0,0.33-0.031,0.49-0.098c0.311-0.129,0.563-0.381,0.691-0.693c0.064-0.156,0.096-0.32,0.096-0.486V40.944C53.299,40.241,52.727,39.667,52.021,39.667z"/></svg>  </div>');

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
window.scale=scale;


function coords(e,rel){
	
	var IWB= $(".IWB").offset();
	var click={};
	var box={};	
	var str={};
	try{
		if(e.originalEvent){
			click.top=e.originalEvent.changedTouches[0].clientY;
			click.left=e.originalEvent.changedTouches[0].clientX;
		}
		else{
			click.top=e.changedTouches[0].clientY;
			click.left=e.changedTouches[0].clientX;
			
		}
	}
	catch(err){
		click.top=e.clientY;
		click.left=e.clientX;		
	}
	
	box.top  = $(rel).offset().top;
	box.left = $(rel).offset().left;
	
	str.top=(click.top-box.top)/scale;
	str.left=(click.left-box.left)/scale;	
	
	return str;
	
	
}









//Corelation coming from other HMTLS
try{
if(JSON.parse(window.name)){
	
	var cor=JSON.parse(window.name);
	console.log(cor);
	if(cor.Lesson){
		var exFlag=0;		
		$.each(Frame, function( index, value ) {
			if(value.Salon==false||exFlag==1){ return false;}		
			$.each(value.Lessons, function( index2, value2 ) {			
				if(value2==cor.Lesson){ 
					current=index;
					currentFrame=index;
					exFlag=1;
					return false;}			
			});
		});		
	}
	if(cor.Frame){	
	console.log(cor.Frame);
		current=parseInt(cor.Frame)-1;
		currentFrame=parseInt(cor.Frame)-1;		
		if(Frame[currentFrame].Salon==false){$(".returnSallon").removeAttr("data-disabled"); //new-buttons
		 	$(".mainGroupLeft").fadeIn(0);
			$(".mainGroupRight").fadeIn(0);
			$(".homeBtn").fadeIn(0);
			$(".toolsWrapper").addClass("toolFrame");
			$(".mainBg").addClass("mainFrames");
			$(".mainOptionsSpread").fadeOut(0);
			$(".modulesMoreSpread").fadeOut(0);
		}
	}	
	if(cor.Image){
		$.each(Frame, function( index, value ) {
				if(value.Image==cor.Image){ 					
					current=index;
					currentFrame=index;
					return false;}					
				if(value.Salon==false){ return false;}
			});		
	}
	
}
}catch(err){}
	window.name = null;













InitialSalon(currentFrame);




function InitialSalon(current){

	$('.textTool').remove();
	$(".toolBox,#sketch").removeClass("enabled");
	
//Readers Spread Title
	if((Infos.ModuleText) == "Readers"){
		console.log(Frame[current].Lessons)
		$(".mModule").html('<span>'+ Frame[current].Lessons +'</span>')
	}
	 
	container.html("");
	$(".preLoad").remove();
	$("body").append('<div class="preLoad"></div>');
	clearVideo();
	subs=null;
	$(".videoWrapper,.interactivePanel,.interactiveCorrect,.interactiveWrong").fadeOut(0);
	$(".txtmcBtn").attr("data-disabled","true");
	$(".txtmcBtn")[0].classList.remove("textEnabled");
	$("#sketch").html("");
	$(".vocabularyBtn,.grammarBtn").attr("data-disabled","true").removeAttr("data-correlation");
	$(".correlation").html("");
	$(".reference").html("");//reference add
	$(".showAnswers").attr("class","showAnswers");
	$(".audioPause").removeClass("audioPause");
	try{
	clearInterval(soundInterval);}
	catch(err){}	
	$(".showAnswers").attr("data-disabled","true");
	$(".justificationWrapper audio source").attr("src","");
	$(".justSound,.justMask,.keyMask").html("");
	$(".keyMask").fadeOut(0);
	$(".justMask").fadeIn(0);
	$(".lessons").html("");
	$(".extraInfo").fadeOut(0);	
	$(".extraInfo audio source").removeAttr("src");
	soundCurrent=1;
	videoCurrent=1;
	$(".container,.justificationWrapper").scrollTop(0);
	$(".justHide").removeClass("justDisabled");
	$(".referenceBtn").attr("data-disabled","true");
	if(current==0||Frame[current].Salon!=Frame[current-1].Salon){$("[data-frame=previous]").attr("data-disabled","true")}else{$("[data-frame=previous]").removeAttr("data-disabled")}
	if(current==Frame.length-1||Frame[current].Salon!=Frame[current+1].Salon){$("[data-frame=next]").attr("data-disabled","true")}else{$("[data-frame=next]").removeAttr("data-disabled")}
	$(".scroll,.justScroll").fadeOut(0);
	$(".scrollHandle,.justScrollHandle").css("top","0px");
	if(Infos.SalonDisabled&&Frame[current].Salon==true){$("[data-frame]").attr("data-disabled","true")}
	if(Infos.FramesDisabled){$("[data-frame],.returnSallon").attr("data-disabled","true")}
	var url = (Frame[current].Salon == true ? "Spreads" : "Frames");

	
	
	var img = new Image();
	img.onload = function() {
		$(this).addClass("backgroundImage");		
		container.append(img);
		//Tools scroll start
		scrollEnd=$(".backgroundImage").height();
		console.log(scrollEnd);
		$("#sketch").css("height",scrollEnd+"px");
		//Tools scroll end
		$(".IWB").removeClass("loading");
		if(Frame[current].Salon == true){
			if(parseFloat(this.width)<=700){$(this).addClass("half");}else{$(this).addClass("whole");}			
			$(".container img").addClass("unzoomedBI");
			$(".mainImg").fadeOut(0);
			$(".salonShadow").fadeIn(0);
			$(".mainFrame").removeClass("mainFrame");
			
			$(".mainGroupLeft").fadeOut(0);
			$(".mainGroupRight").fadeOut(0);
			$(".homeBtn").fadeOut(0);
			
			$.each(Frame[current].Lessons, function( index, value ) {	
			
					try{$.each(Infos.Studentsbook_Correlation, function( index2, value2 ) {				
						if(value==value2){
							var iconSvg='<svg width="50px" height="50px" viewBox="0 0 50 50"><circle opacity="0.6" fill="#1E1E1E" cx="25" cy="25" r="25"/><path fill="#00FFFF" d="M39.654,21.427l0.048,2.158c-0.045,0.038-0.086,0.074-0.124,0.122c0,0-11.042,13.343-11.792,14.25		c-1.096-0.353-15.728-5.03-16.249-5.194c-1.036-1.263-1.407-2.448-1.407-3.479c0-1.218,0.492-2.211,0.92-2.847l15.949,5.186		c0.361,0.114,0.759,0.004,1.002-0.289L40.688,16.04c0.203-0.241,0.269-0.574,0.172-0.873c-0.096-0.3-0.34-0.532-0.646-0.614		l-16.645-4.487c-0.342-0.088-0.705,0.021-0.939,0.284L9.943,24.71c-0.083,0.092-0.138,0.202-0.178,0.316		c-1.427,1.875-2.673,5.494,0.506,9.142c0.11,0.128,0.255,0.224,0.417,0.274l17.131,5.479c0.361,0.115,0.759-0.004,1-0.295		L40.081,26.02l0,0c0,0,1.708-1.529,1.637-2.779C41.646,21.996,39.654,21.427,39.654,21.427 M21.475,17.479l3.38-3.845l9.205,2.563		l-3.262,3.963L21.475,17.479z"/></svg>';
							var str=value;
							if(Frame[current].Correlation){str=Frame[current].Correlation}
							$(".correlation").eq(index).append("<div data-correlation=\""+ str +"\" data-type='SB'>"+ iconSvg +"<span>Student's Book</span></div>");return false;	
						
						}	
					});}catch(err){}					
					
					try{$.each(Infos.Workbook_Correlation, function( index2, value2 ) {
						if(value==value2){
							//var iconSvg='<svg width="50px" height="50px" viewBox="0 0 50 50" > <g class="sCircle"> 	<path fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" 			M24.988,50C13.9,49.998,4.023,42.544,0.969,31.877c-3.792-13.244,3.9-27.106,17.146-30.904C20.367,0.329,22.685,0,25.006,0 			c11.085,0,20.96,7.453,24.014,18.111c1.839,6.423,1.071,13.174-2.167,19.014c-3.237,5.837-8.557,10.063-14.97,11.902 			C29.627,49.671,27.31,50,24.991,50H24.988z"/> 	</g> 	<g class="sBlack" fill="#FFFFFF"> 		<path  d="M25.043,15.061c0,0,1.956-0.06,4.756,2.2c2.801,2.263,3.276,4.289,3.276,4.289l-9.751,12.604 			c0,0-0.185,0.037-0.282,0.072l-9.516,4.154l1.758-10.421c0.016-0.103,0.005-0.292,0.005-0.292L25.043,15.061z M34.007,20.069 			c0,0-1.055-2.52-3.067-4.146c-2.015-1.628-4.792-2.208-4.792-2.208c1.71-2.209,4.853-2.576,7.021-0.819 			C35.342,14.648,35.716,17.863,34.007,20.069 M22.665,33.337c0.035-0.017,0.075-0.018,0.107-0.023 			c-0.563-0.797-1.566-2.048-2.978-3.188c-1.386-1.118-2.718-1.775-3.571-2.127c0.005,0.045,0.005,0.087-0.006,0.132 			c0,0-0.53,3.158-0.961,5.711l2.189,1.773C19.781,34.594,22.665,33.337,22.665,33.337"/> 	</g></svg> ';
							var iconSvg='<svg idth="50px" height="50px" viewBox="0 0 50 50" ><circle opacity="0.6" fill="#1E1E1E" cx="25" cy="25" r="25"/><path fill="#00FFFF" d="M31.3,16c-3.2-2.6-5.5-2.5-5.5-2.5L14.6,28c0,0,0,0.2,0,0.3l-2,12l11-4.8c0.1,0,0.3-0.1,0.3-0.1l11.2-14.5			C35.1,20.9,34.6,18.6,31.3,16z M23.1,34.5c0,0-3.3,1.4-6,2.6l-2.5-2c0.5-2.9,1.1-6.6,1.1-6.6c0-0.1,0-0.1,0-0.2			c1,0.4,2.5,1.2,4.1,2.5c1.6,1.3,2.8,2.8,3.4,3.7C23.2,34.5,23.2,34.5,23.1,34.5z"/><path fill="#00FFFF" d="M35.2,11c-2.5-2-6.1-1.6-8.1,0.9c0,0,3.2,0.7,5.5,2.5c2.3,1.9,3.5,4.8,3.5,4.8C38.2,16.7,37.7,13,35.2,11z"/></svg>';
							var str=value;
							if(Frame[current].Correlation){str=Frame[current].Correlation}
							$(".correlation").eq(index).append("<div data-correlation=\""+ str +"\" data-type='WB'>"+ iconSvg +"<span>Workbook</span></div>");return false;	
						}	
					});}catch(err){}
					
					try{$.each(Infos.Grammarbook_Correlation, function( index2, value2 ) {
						if(value==value2){
							var iconSvg='<svg idth="50px" height="50px" viewBox="0 0 50 50" ><circle opacity="0.6" fill="#1E1E1E" cx="25" cy="25" r="25"/><path fill="#00FFFF" d="M32,21.5l-3,0.1c-0.3,0-0.4,0.2-0.4,0.8l0,0.5c0,0.5,0.2,0.7,0.5,0.7l1.3,0l0,1.9c-0.4,0.1-0.7,0.1-1.2,0.1			c-1.7,0-2.6-1.1-2.6-3.4c0-2.2,0.8-3.4,2.5-3.4c1.4,0,2.1,0.4,2.3,0.4c0.4,0,1-1,1-1.4c0-0.6-1.9-1-3.2-1c-3.3,0.1-5,1.9-4.9,5.4			c0.1,3.7,1.7,5.4,5,5.3c1.1,0,3.5-0.2,3.5-1.2l-0.1-4.2C32.6,21.6,32.5,21.5,32,21.5z"/><path fill="#00FFFF" d="M39.6,19.3c-1.7-6-8-9.5-14-7.8c-6,1.7-9.5,8-7.8,14c0.2,0.7,0.5,1.3,0.8,1.9l-7.7,6.8c-0.6,0.5-1,1.2-1,2			c0,1.4,1.2,2.6,2.6,2.6c0.6,0,1.1-0.2,1.5-0.5c0.1,0,0.2-0.1,0.3-0.2l7.6-6.7c2.7,2.1,6.4,2.9,10,1.9			C37.9,31.6,41.4,25.4,39.6,19.3z M31.2,31c-4.7,1.3-9.6-1.4-11-6.1c-1.3-4.7,1.4-9.6,6.1-10.9c4.7-1.3,9.6,1.4,11,6.1			C38.6,24.7,35.9,29.6,31.2,31z"/></svg>';
							var str=value;
							if(Frame[current].Correlation){str=Frame[current].Correlation}
							$(".correlation").eq(index).append("<div data-correlation=\""+ str +"\" data-type='GR'>"+ iconSvg +"<span>Grammar Book</span></div>");return false;	
						}	
					});}catch(err){}	
					
					try{$.each(Infos.Vocabulary_Correlation, function( index2, value2 ) {
						if(value==value2){
							var iconSvg=' <svg  width="50px" height="50px" viewBox="0 0 50 50"><circle opacity="0.6" fill="#1E1E1E" cx="25" cy="25" r="25"/><path fill="#00FFFF" d="M22.7,17.6c0-0.2-0.1-0.9-0.1-0.9h0c0,0-0.2,0.6-0.3,0.9l-1,2.4h2L22.7,17.6z"/><path fill="#00FFFF" d="M30,22.1c0.5,0,0.9-0.4,1.1-0.8l-0.2-2.4c-0.2-0.5-0.6-0.8-1-0.8c-0.8,0-1.1,0.7-1.1,2			 C28.8,21.4,29.2,22.1,30,22.1z"/><path fill="#00FFFF" d="M15.3,27.7h22c0.4,0,0.7-0.2,1-0.5c0.2-0.3,0.3-0.7,0.2-1l-3.3-13.3c-0.3-1.1-1.4-1.9-2.6-1.9H18.7			c-1.2,0-2.2,0.8-2.5,1.9c-0.2,0.8-4.1,15.3-4.3,16c-0.2,0.6-0.3,1.1-0.3,1.9c0,2.6,1.7,4.7,3.7,4.7h13.4v3.6l2.5-1.7l2.6,1.7v-3.6			h2.8c0.9,0,1.7-0.8,1.7-1.7h-4.5v-4.4h-5v4.4H15.3c-1.1,0-2-1.4-2-3.1S14.2,27.7,15.3,27.7z M29.1,16.5c0.7,0,1.4,0.6,1.6,0.9			l0-0.3c0-0.3,0-0.6,0.5-0.6h0.3c0.5,0,0.7,0.1,0.8,0.4l0.6,4.3c0.2,1.4,0.4,1.7,0.4,2c0,0.3-1.2,0.4-1.5,0.4			c-0.5,0-0.5-0.6-0.7-0.9c-0.3,0.6-0.9,1-1.8,1c-1.5,0-2.7-1.3-2.7-3.6C26.8,17.9,27.6,16.5,29.1,16.5z M17.6,23.2l4.2-8.7			c0.1-0.2,0.4-0.3,0.7-0.3h0.6c0.3,0,0.6,0.1,0.6,0.3l2.4,8.7c0,0.1,0,0.2,0,0.2c0,0.2-0.2,0.3-0.7,0.3h-0.6			c-0.4,0-0.7-0.1-0.8-0.3l-0.5-1.7h-3.2l-0.8,1.7c-0.1,0.2-0.4,0.3-0.7,0.3h-0.6c-0.6,0-0.8-0.1-0.8-0.3			C17.6,23.3,17.6,23.2,17.6,23.2z"/></svg> ';
							var str=value;
							if(Frame[current].Correlation){str=Frame[current].Correlation}
							$(".correlation").eq(index).append("<div data-correlation=\""+ str +"\" data-type='VC' >"+ iconSvg +"<span>Vocabulary List</span></div>");return false;	
						}	
					});}catch(err){}
					
							
			});
			
			//Worksheet Correlation
			if(Frame[current].Worksheet){
			
					
		
				var iconSvg=' <svg width="50px" height="50px" viewBox="0 0 50 50"><circle opacity="0.6" fill="#1E1E1E" cx="25" cy="25" r="25"/><path fill="#00FFFF" d="M38.4,21.6l-5.2,4.1v-2.4c0-1.7-1.3-3-3-3H16.1c-1.7,0-3,1.3-3,3v9.7c0,1.7,1.3,3,3,3h14.1c1.7,0,3-1.3,3-3			v-2.4l5.2,4.1c0.8,0.6,1.8-0.2,1.8-1.4V23.1C40.3,21.8,39.3,21,38.4,21.6z"/><path fill="#00FFFF" d="M18.1,18.9c2.4,0,4.3-1.9,4.3-4.3s-1.9-4.3-4.3-4.3c-2.4,0-4.3,1.9-4.3,4.3S15.8,18.9,18.1,18.9z"/><path fill="#00FFFF" d="M27.6,18.9c2.4,0,4.3-1.9,4.3-4.3s-1.9-4.3-4.3-4.3c-2.4,0-4.3,1.9-4.3,4.3S25.3,18.9,27.6,18.9z"/></svg> ';
					
				$(".correlation").eq(0).append("<div class=\"portalCor\" data-correlation=\"1\" data-type=\"EX\">"+ iconSvg +"</div>");
			
			
			}
			
			//Game References
			if(Frame[current].ReferenceGame){
				$.each(Frame[current].ReferenceGame, function( index, value ){
					$(".reference").eq(value.id-1).append("<div data-game=\""+ value.Game +"\" data-gamelesson=\""+ value.Lesson +"\" data-type=\"RE\"><span>"+ value.Name +"</span></div>");
				});
			}
			
			//Interactive References
			if(Frame[current].ReferenceInter){
				$.each(Frame[current].ReferenceInter, function(index, value){
					if(Frame[current].ReferenceInter[0].state==true){
					$(".reference").eq(value.id-1).append("<div  data-sticker data-type=\"IA\" class=\"stickerInter\"><span>Interactive Activity</span></div>");
					}
				});
			}
			
			
			
			// if(Frame[current].ReferenceInter){
				// $.each(Frame[current].ReferenceInter, function( index, value ){
					// $(".reference").eq(value.id-1).append("<div  data-sticker=\""+ value.target +"\" class=\"stickerInter\"><span>Interactive Activity</span></div>");
					// console.log(value.target);
				// });
			// }
			
			//Set Portal Correlation
			try{
				if(Frame[current].Portal.length==1){					
					$.each(Frame[current].Portal, function( index, value ) {		
					var iconSvg=' <svg width="50px" height="50px" viewBox="0 0 50 50"><circle opacity="0.6" fill="#1E1E1E" cx="25" cy="25" r="25"/><path fill="#00FFFF" d="M38.4,21.6l-5.2,4.1v-2.4c0-1.7-1.3-3-3-3H16.1c-1.7,0-3,1.3-3,3v9.7c0,1.7,1.3,3,3,3h14.1c1.7,0,3-1.3,3-3			v-2.4l5.2,4.1c0.8,0.6,1.8-0.2,1.8-1.4V23.1C40.3,21.8,39.3,21,38.4,21.6z"/><path fill="#00FFFF" d="M18.1,18.9c2.4,0,4.3-1.9,4.3-4.3s-1.9-4.3-4.3-4.3c-2.4,0-4.3,1.9-4.3,4.3S15.8,18.9,18.1,18.9z"/><path fill="#00FFFF" d="M27.6,18.9c2.4,0,4.3-1.9,4.3-4.3s-1.9-4.3-4.3-4.3c-2.4,0-4.3,1.9-4.3,4.3S25.3,18.9,27.6,18.9z"/></svg> ';
					$(".correlation").eq(value.id-1).append("<div class=\"portalCor\" data-correlation=\"\" data-video=\""+ value.Video +"\" data-targetsubs=\""+ value.id +"\">"+ iconSvg + "<span>" + value.Worksheet + "</span><span>Video</span></div>");
					if(Infos.Type!="Video Worksheet"){
						iconSvg=' <svg width="50px" height="50px" viewBox="0 0 50 50"><circle opacity="0.6" fill="#1E1E1E" cx="25" cy="25" r="25"/><path fill="#00FFFF" d="M43.2,23.7L39,27v-2c0-1.3-1.1-2.4-2.4-2.4H25.1c-1.4,0-2.4,1.1-2.4,2.4V33c0,1.3,1.1,2.4,2.4,2.4h11.4c1.3,0,2.4-1.1,2.4-2.4v-2l4.3,3.3c0.7,0.5,1.5-0.1,1.5-1.2v-8.3C44.7,23.8,43.9,23.2,43.2,23.7z"/><path fill="#00FFFF" d="M34.5,21.5c1.9,0,3.5-1.6,3.5-3.5s-1.6-3.5-3.5-3.5c-1.9,0-3.5,1.5-3.5,3.5S32.5,21.5,34.5,21.5z"/><path fill="#00FFFF" d="M26.7,21.5c1.9,0,3.5-1.6,3.5-3.5c0-1.4-0.8-2.6-2-3.1l-4.1,5.4C24.7,21,25.6,21.5,26.7,21.5z"/><path fill="#00FFFF" d="M20,13.4c-2.5-2.1-4.3-2-4.3-2L6.8,22.9c0,0,0,0.2,0,0.3l-1.6,9.5l8.7-3.8c0.1,0,0.3-0.1,0.3-0.1L23,17.3C23,17.3,22.6,15.5,20,13.4z M13.5,28c0,0-2.6,1.1-4.8,2.1l-2-1.6c0.4-2.3,0.9-5.2,0.9-5.2c0,0,0-0.1,0-0.1c0.8,0.3,2,0.9,3.3,1.9C12.2,26.2,13.1,27.3,13.5,28C13.6,28,13.6,28,13.5,28z"/><path fill="#00FFFF" d="M23.9,15.9c1.6-2,1.2-4.9-0.8-6.5c-2-1.6-4.8-1.3-6.4,0.7c0,0,2.5,0.5,4.4,2C22.9,13.7,23.9,15.9,23.9,15.9z"/></svg> ';

						 $(".correlation").eq(value.id-1).append("<div class=\"portalCor\" data-correlation=\""+ value.Worksheet +"\"  data-type=\"PO\">"+ iconSvg +"<span>"+ value.Worksheet +"</span><span>Worksheet</span></div>");
					 }
					});
				}
				
				else if(Frame[current].Portal.length>1){
					var pTxt="";
					if(Frame[current].Portal[0].Worksheet.indexOf("Grammar")!=-1){pTxt="Portal to Grammar"}
					if(Infos.Type!="Video Worksheet"){
						var iconSvg=' <svg width="50px" height="50px" viewBox="0 0 50 50"><circle opacity="0.6" fill="#1E1E1E" cx="25" cy="25" r="25"/><path fill="#00FFFF" d="M38.4,21.6l-5.2,4.1v-2.4c0-1.7-1.3-3-3-3H16.1c-1.7,0-3,1.3-3,3v9.7c0,1.7,1.3,3,3,3h14.1c1.7,0,3-1.3,3-3			v-2.4l5.2,4.1c0.8,0.6,1.8-0.2,1.8-1.4V23.1C40.3,21.8,39.3,21,38.4,21.6z"/><path fill="#00FFFF" d="M18.1,18.9c2.4,0,4.3-1.9,4.3-4.3s-1.9-4.3-4.3-4.3c-2.4,0-4.3,1.9-4.3,4.3S15.8,18.9,18.1,18.9z"/><path fill="#00FFFF" d="M27.6,18.9c2.4,0,4.3-1.9,4.3-4.3s-1.9-4.3-4.3-4.3c-2.4,0-4.3,1.9-4.3,4.3S25.3,18.9,27.6,18.9z"/></svg> ';
						$(".correlation").eq(0).append("<div class=\"portalCor\" data-correlation=\"\" data-videotarget='video'>"+ iconSvg +"<span>"+ pTxt +"</span><span>Videos</span></div>");
						iconSvg=' <svg width="50px" height="50px" viewBox="0 0 50 50"><circle opacity="0.6" fill="#1E1E1E" cx="25" cy="25" r="25"/><path fill="#00FFFF" d="M43.2,23.7L39,27v-2c0-1.3-1.1-2.4-2.4-2.4H25.1c-1.4,0-2.4,1.1-2.4,2.4V33c0,1.3,1.1,2.4,2.4,2.4h11.4c1.3,0,2.4-1.1,2.4-2.4v-2l4.3,3.3c0.7,0.5,1.5-0.1,1.5-1.2v-8.3C44.7,23.8,43.9,23.2,43.2,23.7z"/><path fill="#00FFFF" d="M34.5,21.5c1.9,0,3.5-1.6,3.5-3.5s-1.6-3.5-3.5-3.5c-1.9,0-3.5,1.5-3.5,3.5S32.5,21.5,34.5,21.5z"/><path fill="#00FFFF" d="M26.7,21.5c1.9,0,3.5-1.6,3.5-3.5c0-1.4-0.8-2.6-2-3.1l-4.1,5.4C24.7,21,25.6,21.5,26.7,21.5z"/><path fill="#00FFFF" d="M20,13.4c-2.5-2.1-4.3-2-4.3-2L6.8,22.9c0,0,0,0.2,0,0.3l-1.6,9.5l8.7-3.8c0.1,0,0.3-0.1,0.3-0.1L23,17.3C23,17.3,22.6,15.5,20,13.4z M13.5,28c0,0-2.6,1.1-4.8,2.1l-2-1.6c0.4-2.3,0.9-5.2,0.9-5.2c0,0,0-0.1,0-0.1c0.8,0.3,2,0.9,3.3,1.9C12.2,26.2,13.1,27.3,13.5,28C13.6,28,13.6,28,13.5,28z"/><path fill="#00FFFF" d="M23.9,15.9c1.6-2,1.2-4.9-0.8-6.5c-2-1.6-4.8-1.3-6.4,0.7c0,0,2.5,0.5,4.4,2C22.9,13.7,23.9,15.9,23.9,15.9z"/></svg> ';
						$(".correlation").eq(0).append("<div class=\"portalCor\" data-correlation=\"\" data-videotarget='worksheet'>"+ iconSvg +"<span>"+ pTxt +"</span><span>Worksheets</span></div>");
					}
					else{						
						$.each(Frame[current].Portal, function( index, value ) {		
							var iconSvg=' <svg width="50px" height="50px" viewBox="0 0 50 50"><circle opacity="0.6" fill="#1E1E1E" cx="25" cy="25" r="25"/><path fill="#00FFFF" d="M38.4,21.6l-5.2,4.1v-2.4c0-1.7-1.3-3-3-3H16.1c-1.7,0-3,1.3-3,3v9.7c0,1.7,1.3,3,3,3h14.1c1.7,0,3-1.3,3-3			v-2.4l5.2,4.1c0.8,0.6,1.8-0.2,1.8-1.4V23.1C40.3,21.8,39.3,21,38.4,21.6z"/><path fill="#00FFFF" d="M18.1,18.9c2.4,0,4.3-1.9,4.3-4.3s-1.9-4.3-4.3-4.3c-2.4,0-4.3,1.9-4.3,4.3S15.8,18.9,18.1,18.9z"/><path fill="#00FFFF" d="M27.6,18.9c2.4,0,4.3-1.9,4.3-4.3s-1.9-4.3-4.3-4.3c-2.4,0-4.3,1.9-4.3,4.3S25.3,18.9,27.6,18.9z"/></svg> ';
							$(".correlation").eq(index).append("<div class=\"portalCor\" data-correlation=\"\" data-video=\""+ value.Video +"\" data-targetsubs=\""+ value.id +"\">"+ iconSvg + "<span>" + value.Worksheet + "</span><span>Video</span></div>");
						});					
					}				
				}			
			}catch(err){}
			
			//Set Teaser Correlation
			try{
				if(Frame[current].Teaser.length==1){					
					$.each(Frame[current].Teaser, function( index, value ) {		
					var iconSvg=' <svg width="40" height="37.86" viewBox="0 0 40 37.86"><path d="M37.29,16.66l-7.71,6.05V19.14a4.43,4.43,0,0,0-4.43-4.42H4.43A4.42,4.42,0,0,0,0,19.14V33.5a4.43,4.43,0,0,0,4.43,4.43H25.15a4.44,4.44,0,0,0,4.43-4.43V29.93l7.71,6c1.2,1,2.71-.23,2.71-2.12V18.79C40,16.9,38.49,15.72,37.29,16.66Z" transform="translate(0 -0.07)"/><path d="M7.35,12.66a6.3,6.3,0,1,0-6.3-6.3A6.3,6.3,0,0,0,7.35,12.66Z" transform="translate(0 -0.07)" /><path d="M21.39,12.66a6.3,6.3,0,1,0-6.29-6.3A6.3,6.3,0,0,0,21.39,12.66Z" transform="translate(0 -0.07)" /></svg>';
					$(".correlation").eq(index).append("<div class=\"portalCor\" data-correlation=\"\" data-video=\""+ value.Video +"\" data-targetsubs=\""+ value.id +"\">"+ iconSvg +"</div>");
 					if(Infos.Type!="Video Worksheet"){
						iconSvg=' <svg width="50px" height="50px" viewBox="0 0 50 50" > <g class="sCircle"> <path fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M24.988,50C13.9,49.998,4.023,42.544,0.969,31.877c-3.792-13.244,3.9-27.106,17.146-30.904C20.367,0.329,22.685,0,25.006,0 c11.085,0,20.96,7.453,24.014,18.111c1.839,6.423,1.071,13.174-2.167,19.014c-3.237,5.837-8.557,10.063-14.97,11.902 C29.627,49.671,27.31,50,24.991,50H24.988z"/> </g> <g class="sBlack" fill="#FFFFFF"> <path  d="M39.885,24.363l-3.468,2.718v-1.603c0-1.099-0.895-1.987-1.994-1.987h-9.326 c-1.101,0-1.992,0.889-1.992,1.987v6.446c0,1.097,0.892,1.989,1.992,1.989h9.326c1.1,0,1.994-0.893,1.994-1.989v-1.604 l3.468,2.718c0.541,0.424,1.22-0.106,1.22-0.953v-6.768C41.104,24.471,40.426,23.94,39.885,24.363z"/> <path  d="M32.73,22.567c1.564,0,2.83-1.266,2.83-2.828c0-1.562-1.266-2.825-2.83-2.825 c-1.566,0-2.832,1.264-2.832,2.825C29.898,21.302,31.164,22.567,32.73,22.567z"/>  <path d="M27.629,17.198l-3.356,4.376c0.52,0.604,1.28,0.993,2.139,0.993c1.564,0,2.832-1.266,2.832-2.828 C29.243,18.615,28.581,17.653,27.629,17.198z"/> <path  d="M17.446,14.35c0,0,1.452-0.044,3.53,1.634c2.079,1.68,2.433,3.184,2.433,3.184l-7.239,9.357 c0,0-0.137,0.027-0.209,0.054l-7.064,3.084l1.305-7.736c0.012-0.076,0.004-0.217,0.004-0.217L17.446,14.35z M24.101,18.068 c0,0-0.783-1.871-2.277-3.078c-1.495-1.209-3.558-1.64-3.558-1.64c1.27-1.64,3.603-1.912,5.213-0.608 C25.092,14.044,25.369,16.431,24.101,18.068 M15.681,27.918c0.026-0.013,0.056-0.014,0.08-0.018 c-0.418-0.592-1.163-1.521-2.211-2.367c-1.028-0.83-2.018-1.318-2.651-1.579c0.004,0.033,0.004,0.064-0.004,0.098 c0,0-0.394,2.345-0.714,4.24l1.626,1.316C13.54,28.851,15.681,27.918,15.681,27.918"/>  </g></svg> ';

						$(".correlation").eq(index).append("<div class=\"portalCor\" data-correlation=\""+ value.Worksheet +"\" data-type=\"PO\">"+ iconSvg +"<span>"+ value.Worksheet +"</span><span>Worksheet</span></div>");
					} 
					});
				}
							
			}catch(err){}
			
			//Set direct Correlation
			if(Frame[current].SkipCorrelation){
				
				$.each(Frame[current].SkipCorrelation, function( index, value ) {
					$.each(value.Correlation, function( index2, value2 ) {
						$(".correlation [data-type='"+ value.Type +"']").eq(index2).attr("data-skip",value2).attr("data-module",value.Module);
					});	
				});	
			}
		}
		else{
			$(".mainImg").fadeIn(0);
			$(".salonShadow").fadeOut(0);
			$(".IWB").addClass("mainFrame");
			
			
			if(parseFloat(this.width)>1000){		
				$(".main").addClass("containerExpanded");
			}
			else{
				$(".main").removeClass("containerExpanded");
			}
			
			if(parseFloat(this.height)<=740){		
				$(".scroll").fadeOut(0);		
				}
			else{
				$(".scroll").fadeIn(0);	
				}
		}
		
		if(Frame[current].ImageAlign) {			
				img.style.right="0";
				img.style.left="unset";					//na ginei 552		
			}
		
		
		
		if(Frame[current].Flashcard){
				$(".main").addClass("containerExpanded");
				var top=($(".container").height()-parseFloat(this.height))/2;
				var left=($(".container").width()-parseFloat(this.width))/2;				
				$(this).css({"top":top+"px","left":left+"px"});
			}
		
		//Preload Static image
			if(Frame[current].StaticImage){
				$(".txtmcBtn").removeAttr("data-disabled");
				$(".preLoad").append("<img  src='../Images/"+ url +"/"+ Frame[current].StaticImage +".jpg'/>");
			}
		
		
	}
	img.src = "../Images/"+ url +"/"+ Frame[current].Image +".jpg";
		
		
		//Check if Image is Salon
		if(Frame[current].Salon == true){
			
			
			if(zoomFlag==0){
			
				//Set Stickers	
				if(Frame[current].Stickers){	
					$.each(Frame[current].Stickers, function( index, value ) {
					if(value.icon){
						container.append("<div class = 'stickerAnimation' data-icon='"+ value.icon+"' data-sticker='"+ value.target +"' style='left:"+ value.left +"px;top:"+ value.top +"px;'></div>");
						if(value.target==null) {
							$(".stickerAnimation").addClass("disabled-icon");							
						}
					}
					else{
						container.append("<div data-sticker='"+ value.target +"' style='width:"+ value.width +"px;height:"+ value.height +"px;left:"+ value.left +"px;top:"+ value.top +"px;'></div>");
						}
					});
				}
			
			}
			else{
				//Zoomed stickers
				if(Frame[current].Stickers){	
					$.each(Frame[current].Stickers, function( index, value ) {
					if(value.icon){
						container.append("<div class = 'stickerAnimation' data-icon='"+ value.icon+"' data-sticker='"+ value.target +"' style='left:"+ parseInt(value.left*1.12) +"px;top:"+ parseInt(value.top*1.12) +"px;'></div>");
						if(value.target==null) {
							$(".stickerAnimation").addClass("disabled-icon");							
						}
						
						}
					else{
						container.append("<div data-sticker='"+ value.target +"' style='width:"+ parseInt(value.width*1.15) +"px;height:"+ parseInt(value.height*1.15) +"px;left:"+ parseInt(value.left*1.12) +"px;top:"+ parseInt(value.top*1.12) +"px;'></div>");
					}
					});
				}
			}
			
			
			
			
			
		}
		else{
			
				
			
			//Set Audio
			
			if(Frame[current].Audio){
				$(".extraInfo audio source").attr("src","../Audio/"+ Frame[current].Audio +".mp3");			
				$(".extraInfo audio")[0].load();
				$(".extraInfo").fadeIn(0);	
			}
		
			
			
			
			//Set Video
			if(Frame[current].Video){		
				$(".videoBtn").removeAttr("data-disabled");	
			}
			else{
				$(".videoBtn").attr("data-disabled","true");
			}
			
			
			
			//Set Interactive activity
			if(Frame[current].Interactive){
				
				if(Frame[current].Interactive.type=="multiple"){
					$.each(Frame[current].Interactive.Choices, function( index, value ) {
						var extra="";

						if(value.correct){
							extra="data-multiplecorrect='true'";
						}
						container.append("<div "+ extra + " data-keyshowI=\"" + value.num + "\" class=\"interactive choice\" data-multiplegroup=\""+ value.group +"\" style=\"width:"+ (value.width-6) +"px;height:"+ (value.height-6) +"px;left:"+ value.left +"px;top:"+ value.top +"px;\">"+ value.text +"</div>");
					});
				}		
				else{
					$.each(Frame[current].Interactive.Choices, function( index, value ) {
						var extra="";

						if(value.correct){
							container.append("<div data-keyshowI=\"" + value.num + "\" class=\"interactive dropInteractive\" data-dropint=\""+ value.correct +"\" style=\"width:"+ (value.width-6) +"px;height:"+ (value.height-6) +"px;left:"+ value.left +"px;top:"+ value.top +"px;\"></div>");
						}
						else{
							container.append("<div class=\"interactive dragInteractive\" data-dragint=\""+ value.text +"\" style=\"width:"+ (value.width-6) +"px;height:"+ (value.height-6) +"px;left:"+ value.left +"px;top:"+ value.top +"px;\">"+ value.text +"</div>");
						}				
					});			
				}
				$(".interactivePanel").fadeIn(0);
				$(".interactiveCheck").attr("class","interactiveCheck");
			}
			
			
			
			//Set Sound phrases
			if(Frame[current].Phrases){
				$.each(Frame[current].Phrases, function( index, value ) {
					var color="";
					if(value.color){color+= "background:"+value.color+";";}
					if(value.blending){color+= "mix-blend-mode:normal;";}
					container.append("<div data-phrase='"+ value.number +"' style='"+color+"left:"+ value.left +"px;top:"+ value.top +"px;width:"+ value.width +"px;height:"+ value.height +"px;'></div>");
				});			
			}
			
			
			//Auto-scrolling fixed
			if(Frame[current].ScrollTo){
				$.each(Frame[current].ScrollTo, function( index, value ) {
					var flag=0;
						$.each(Frame[current].SoundPhrases, function( index2, value2 ) {
							if(value2>value.sec){
								Frame[current].SoundPhrases.splice(index2,0,value.sec);
								Frame[current].SoundPhrases.splice(index2,0,value.sec);
								tempAS=index2;
								tempAS2=current;
								flag=index2/2+1;
								return false;
								}					
						});					
						$("[data-phrase]").each(function( index2, value2 ) {
							var inp=parseInt($(this).attr("data-phrase"));
							if(inp>=flag){$(this).attr("data-phrase",inp+1)}
						});		
						container.append("<div data-phrase='"+ flag +"' style='left:0px;top:"+ value.top +"px;width:0px;height:0px;'></div>");
	
					});			
				}
			

			//Set vocabulary button for lesson
			try{$.each(Infos.Vocabulary_Correlation, function( index2, value2 ) {
				if(Frame[current].Lesson==value2){
					
					$(".vocabularyBtn").attr("data-correlation",value2).removeAttr("data-disabled");
					}	
			});}catch(err){}
				
				
			//Key buttons (KeyShow)
			if(Frame[current].KeyShow){
				$.each(Frame[current].KeyShow, function (index, value) {

					var ks = "data-keyshow=\"" + value.num + "\"";

					container.append("<div " + ks + " style='left:" + value.left + "px;top:" + value.top + "px;'>" + justKeyT + "</div>");

				});
			}
			
			
			
			//Set Fills
			if(Frame[current].Fill){		
				var count=1;
				
				$.each(Frame[current].Fill, function( index, value ) {				
					var extra="";
					var inner="";
					var keyBtn="";

					if(value.target){					
						$(".showAnswers").removeAttr("data-disabled");	
						extra="data-fill='"+ count +"'";
						count++;		
						container.append("<div "+ extra +" style='left:"+ value.target.left +"px;top:"+ value.target.top +"px;width:"+ value.target.width +"px;height:"+ value.target.height +"px'></div>");
					}				
					if(value.svg){
						$(".showAnswers").removeAttr("data-disabled");
						inner="<svg width="+ value.width +" height="+ value.height +">"+value.svg+extra+"</svg>";
					}
					
					if(value.mode=="gr"){
						$(".showAnswers").removeAttr("data-disabled");
						container.append("<div class='fill gr' "+ extra +" data-keyshowL='" + value.num +"' style='left:"+ value.left +"px;top:"+ value.top +"px'><svg>"+ value.svg +"</svg></div>");
					}

					if(value.txt){
						$(".showAnswers").removeAttr("data-disabled");
						inner="<div class='txt'>"+value.txt+"</div>";
					}

					if(value.txtmc){
						$(".txtmcBtn").removeAttr("data-disabled");
						inner="<div class='txtmc'>"+value.txtmc+"</div>";									
					}	
					
					if(value.mode=="fillTxt"){
						container.append("<div "+ extra +" class='fill fillTxt' style='left:"+ value.left +"px;top:"+ value.top +"px;width:"+ value.width +"px;height:"+ value.height +"px'>"+ inner +"</div>");
					}
					
					if (value.mode == "circle") {

						container.append("<div data-keyshowC='"+ value.num +"' class='fill circle' style='left:" + value.left + "px;top:" + value.top + "px;width:" + value.width + "px;height:" + value.height + "px'>" + inner + "</div>");
                    
					}
					
					if(value.mode=="check"){
						var fSvg="";
						$(".showAnswers").removeAttr("data-disabled");
						if(!value.tick){
							fSvg="<svg width='100%' height='100%' viewBox='0 0 22 22'><polygon fill='#FF0000' points='10.999,14.088 3.09,21.999 0.003,18.911 7.912,11.001 0,3.086 3.087,0 11.001,7.914 18.913,0 	22,3.086 14.086,11.001 21.998,18.911 18.911,22 '></polygon></svg>";
						}
						else{
							fSvg="<svg width='100%' height='100%' viewBox='0 0 30 22'><polygon fill='#64E564' points='0,11.417 3.142,8.34 10.578,15.556 26.784,0 29.963,3.083 10.688,22 '></polygon></svg>";
						}
						
						container.append("<div data-keyshowT='" + value.num +"' class='fill check' style='left:"+ value.left +"px;top:"+ value.top +"px;width:"+ value.width +"px;height:"+ value.height +"px'>"+ fSvg +"</div>");
					}
					
					if(value.mode=="fillImg"){
						$(".showAnswers").removeAttr("data-disabled");
						container.append("<div "+ extra +" class='fill fillImg' style='left:"+ value.left +"px;top:"+ value.top +"px;width:"+ value.width +"px;height:"+ value.height +"px'><img src='../Images/Fill/"+ value.img +"'/></div>");
					}
				});
			}
			
			
			
			//Set Match
			if(Frame[current].Line){
				$.each(Frame[current].Line, function( index, value ) {
					var inner="";
					if(value.svg){inner="<svg width="+ value.width +" height="+ value.height +">"+value.svg+"</svg>";}
					container.append("<div class='line' style='left:"+ value.left +"px;top:"+ value.top +"px;'>"+ inner +"</div>");
				});	
			$(".showAnswers").removeAttr("data-disabled");
			}
			
			
			
			//Set Audio Button (irregular fix)
			if(Frame[current].Audiobtn){
				if (Infos.ModuleText == "Irregular Verbs") {
					irrV=1;
					$.each(Frame[current].Audiobtn, function (index, value) {
						container.append('<div class="audioL" data-phraseA="' + (index+1) + '" style="left:' + (value.left) + 'px;top:' + value.top + 'px"><svg width="19px" height="15px" viewbox="0 0 19 15"> <g fill="#010101" class="justPlayBtn">	 <path  d="M10.877,10.639c-0.143,0-0.285-0.063-0.385-0.18c-0.176-0.213-0.148-0.527,0.064-0.705 c0.711-0.594,1.117-1.451,1.117-2.354c0-0.83-0.324-1.608-0.916-2.192c-0.197-0.194-0.199-0.51-0.004-0.707 c0.193-0.196,0.51-0.199,0.707-0.004c0.783,0.773,1.213,1.805,1.213,2.903c0,1.2-0.537,2.338-1.477,3.122 C11.104,10.6,10.99,10.639,10.877,10.639z"/> <path d="M12.846,12.605c-0.137,0-0.273-0.055-0.371-0.164c-0.186-0.205-0.17-0.521,0.035-0.707 c1.229-1.109,1.934-2.689,1.934-4.334c0-1.57-0.615-3.044-1.73-4.15c-0.195-0.194-0.197-0.511-0.002-0.707 c0.195-0.196,0.512-0.198,0.707-0.003c1.307,1.295,2.025,3.021,2.025,4.86c0,1.926-0.824,3.776-2.264,5.077 C13.084,12.563,12.965,12.605,12.846,12.605z"/> <path d="M15.146,14.908c-0.133,0-0.266-0.053-0.365-0.158c-0.188-0.201-0.178-0.518,0.023-0.707 c1.867-1.746,2.895-4.105,2.895-6.643c0-2.439-0.953-4.731-2.684-6.454c-0.195-0.195-0.195-0.512-0.002-0.707 c0.195-0.196,0.512-0.196,0.707-0.002c1.922,1.912,2.979,4.456,2.979,7.163c0,2.819-1.141,5.436-3.211,7.374 C15.393,14.863,15.27,14.908,15.146,14.908z"/> <path d="M8.3,2.27c0-0.55-0.318-0.682-0.707-0.293L5.148,4.422C4.759,4.811,3.991,5.129,3.441,5.129H1.3 c-0.55,0-1,0.45-1,1v3c0,0.551,0.45,1,1,1h2.024c0.55,0,1.318,0.318,1.707,0.707l2.562,2.563C7.982,13.787,8.3,13.654,8.3,13.105 V2.27z"/>	 </g></svg></div>');
					});
				}
				else{
					$.each(Frame[current].Audiobtn, function (index, value) {
						container.append('<div class="audioL" style="top:' + value.top + 'px;left:' + value.left + 'px" data-alstart="' + value.start + '" data-alend="' + value.end + '"><svg width="19px" height="15px" viewbox="0 0 19 15"> <g fill="#010101" class="justPlayBtn">	 <path  d="M10.877,10.639c-0.143,0-0.285-0.063-0.385-0.18c-0.176-0.213-0.148-0.527,0.064-0.705 c0.711-0.594,1.117-1.451,1.117-2.354c0-0.83-0.324-1.608-0.916-2.192c-0.197-0.194-0.199-0.51-0.004-0.707 c0.193-0.196,0.51-0.199,0.707-0.004c0.783,0.773,1.213,1.805,1.213,2.903c0,1.2-0.537,2.338-1.477,3.122 C11.104,10.6,10.99,10.639,10.877,10.639z"/> <path d="M12.846,12.605c-0.137,0-0.273-0.055-0.371-0.164c-0.186-0.205-0.17-0.521,0.035-0.707 c1.229-1.109,1.934-2.689,1.934-4.334c0-1.57-0.615-3.044-1.73-4.15c-0.195-0.194-0.197-0.511-0.002-0.707 c0.195-0.196,0.512-0.198,0.707-0.003c1.307,1.295,2.025,3.021,2.025,4.86c0,1.926-0.824,3.776-2.264,5.077 C13.084,12.563,12.965,12.605,12.846,12.605z"/> <path d="M15.146,14.908c-0.133,0-0.266-0.053-0.365-0.158c-0.188-0.201-0.178-0.518,0.023-0.707 c1.867-1.746,2.895-4.105,2.895-6.643c0-2.439-0.953-4.731-2.684-6.454c-0.195-0.195-0.195-0.512-0.002-0.707 c0.195-0.196,0.512-0.196,0.707-0.002c1.922,1.912,2.979,4.456,2.979,7.163c0,2.819-1.141,5.436-3.211,7.374 C15.393,14.863,15.27,14.908,15.146,14.908z"/> <path d="M8.3,2.27c0-0.55-0.318-0.682-0.707-0.293L5.148,4.422C4.759,4.811,3.991,5.129,3.441,5.129H1.3 c-0.55,0-1,0.45-1,1v3c0,0.551,0.45,1,1,1h2.024c0.55,0,1.318,0.318,1.707,0.707l2.562,2.563C7.982,13.787,8.3,13.654,8.3,13.105 V2.27z"/>	 </g></svg></div>');

					});
				}
			}
			
			
			//Set Justification Image 
			if(Frame[current].JustificationImage){
				$(".referenceBtn").removeAttr("data-disabled");	
				$(".justMask").html("<img src='../Images/Frames/"+ Frame[current].JustificationImage +".jpg'/>");
				
				//Set Justification Audio
				if(Frame[current].JustificationAudio){
					$(".justificationWrapper audio source").attr("src","../Audio/"+ Frame[current].JustificationAudio +".mp3");
					$(".justificationWrapper audio")[0].load();			
				}
			}
				
				//Set Justification Buttons
				if(Frame[current].Justifications){
					$.each(Frame[current].Justifications, function( index, value ) {
						var jTemp;
						switch(value.jusicon) {
							case "tip":
								jTemp=justTips;
								break;
							case "key":
								jTemp=justKey;
								break;
							default:
								 jTemp=justF;
							}
							var ex = ""; if (value.justText) { ex = "data-justext=\"" + value.justText + "\"" }
						var ex2="";
						if(value.keyImg){
							ex2="data-keyImg='"+ value.keyImg +"'";
							
							$(".keyMask").addClass("keyMaskBig").html("<img src='../Images/Frames/" + value.keyImg + ".jpg'/>");

						}
						container.append("<div " + ex + " class='justification' "+ ex2 +" data-jusicon='" + value.jusicon + "'data-justification='" + (index + 1) + "' style='left:" + value.left + "px;top:" + value.top + "px;'>" + jTemp + "</div>");
						if(value.Highlights){
						$.each(value.Highlights, function( index2, value2 ) {
							var extra="";
							if(value2.justiPhrase){extra= "data-justiphrase='"+ value2.justiPhrase +"'";}
							var color="";
							if(value2.color){color= "background:"+value2.color+";";}						
							$(".justMask").append("<div class='highlight' data-highlight='"+ (index+1) +"' "+ extra +" style='"+ color +"top:"+ value2.top +"px;left:"+ value2.left +"px;width:"+ value2.width +"px;height:"+ value2.height +"px'></div>");
							});
						}							
					});
				}
			
			
			//Set Justification Phrases
			if(Frame[current].jPhrases){
				$.each(Frame[current].jPhrases, function( index, value ) {
				var color="";
				if(value.color){color= "background:"+value.color+";";}
				$(".justMask").append("<div data-phrase='"+ value.number +"' style='"+ color +"left:"+ value.left +"px;top:"+ value.top +"px;width:"+ value.width +"px;height:"+ value.height +"px;'></div>");
				});
				}			
			
			
			
			
			
			
			

			//Set Lesson Header	
			
			if(Infos.ModuleText=="Cambridge Young Learners Exam Practice" || Frame[current].Lesson.indexOf("Modules")!= -1 || Infos.ModuleText=="Readers" || Infos.ModuleText=="Hello" || Infos.ModuleText=="Stream Reading"){
				$(".mainSvgs .mModule").html("");
			}
			else{
				$(".mainSvgs .mModule").html(Infos.ModuleText);
			}
			
			if( Infos.ModuleText=="Readers"){
				$(".mainSvgs .ReaderLesson").html(Frame[current].Lesson);
			}

			
			if(Infos.Type!="Video Worksheet"){
				if(Frame[current].Lesson.length==1){
					$(".mainSvgs .mModule").append(Frame[current].Lesson);
					console.log("1")

				}

				else{							
					$(".mainSvgs .mModule").append(" "+Frame[current].Lesson);

					
				}	
			}
			else{
				$(".mainSvgs .mModule").html(Frame[current].Lesson);
				
			}


			
		}		
	
	container.append("<div id='sketch'></div>"); //sketch appended in container for scrolling in tools
	
	try{$(".preLoad").html("<img src='../Images/"+ url +"/"+ Frame[current+1].Image +".jpg' />")}catch(err){}
	
	currentFrame=current;
	
	
}



//Video tab
var pId=0;
$(document).on("click", "[data-video]", function () {
	clearSound();
	clearJustiSound();
	$(".IWB").addClass("loading");
	$(".videoWrapper").removeClass("worksheetSelect");
	$(".videoExtra").remove();
	$(".videoWrapper source").attr("src","../Video/"+ $(this).attr("data-video") +".mp4");
	$(".videoWrapper").css("display","block");	
	vFlag=1;
	pId=$(this).attr("data-targetsubs");
	
	if(Frame[currentFrame].Portal){
		$.each(Frame[currentFrame].Portal, function( index, value ) {
			if(pId==value.id){
				if(value.SubsArray){		
					subs=value.SubsArray;				
				};
				if(value.TargetSub){
					$.each(Subs, function( index2, value2 ) {
						if(value2.id==value.TargetSub){subs=value2.SubsArray; return false;}
					});			
				};
			}
		});
	}
	else{
		$.each(Frame[currentFrame].Teaser, function( index, value ) {
			if(pId==value.id){
				if(value.SubsArray){		
					subs=value.SubsArray;				
				};
				if(value.TargetSub){
					$.each(Subs, function( index2, value2 ) {
						if(value2.id==value.TargetSub){subs=value2.SubsArray; return false;}
					});			
				};
			}
		});
	}
	$(".videoWrapper video")[0].load();
	$(".videoWrapper video")[0].play();
	videoCurrent=1;
});

$(document).on("click", ".worksheetSelect", function (e) {
	if($(e.target).hasClass("worksheetSelect")){
		clearVideo();
	$(".videoWrapper").fadeOut(0);
	$(".videoExtra").remove();}
});


//Portal multiple video tabs
$(document).on("click", "[data-videotarget]", function () {
	$(".videoWrapper").prepend("<div class='videoExtra'></div>").addClass("worksheetSelect");
	
		var exitSvg = '<svg id="Layer_1" width="60" height="60" viewBox="0 0 60 60"><title>button-exit</title><circle cx="30" cy="30" r="30" style="fill:#fff"></circle><path d="M32.9,30.93l9.38-9.37a2.15,2.15,0,0,0-1.52-3.66,2.12,2.12,0,0,0-1.51.63l-9.73,9.73-9.73-9.73a2.14,2.14,0,0,0-3,3l9.38,9.38-9.38,9.38a2.14,2.14,0,1,0,3,3l9.73-9.73,9.73,9.73a2.14,2.14,0,0,0,3-3Z" transform="translate(-0.09)" style="fill:#737373"></path></svg>'
		$(".videoExtra").append('<div class="videoExit">'+exitSvg +'</div>');
		
	if($(this).attr("data-videotarget")=="video"){
		$(".videoExtra").append("<img src=\"../css/Images/icon-videos.png\"><span>Videos</span>");
		
		$.each(Frame[currentFrame].Portal, function( index, value ) {
			var str="";
			if(value.Video){str="data-video=\""+ value.Video +"\""}
			$(".videoExtra").append("<div "+ str +" data-targetsubs=\""+ value.id +"\" data-module=\""+ value.Module +"\"><span>"+ value.Worksheet +  Infos.Module +"</span></div>");
			
			
		});
	}
	
	else{
		$(".videoExtra").append("<img src=\"../css/Images/icon-worksheets.png\"><span>Worksheets</span>");
		$.each(Frame[currentFrame].Portal, function( index, value ) {
			var str="";
			if(value.Video){str="data-correlation=\""+ value.Worksheet +"\" data-type=\"PO\""}
			$(".videoExtra").append("<div "+ str +" data-module=\""+ value.Module +"\"><span>"+ value.Worksheet +  Infos.Module +"</span></div>");
			
			
		});		
	}	
	$(".videoWrapper").css("display","block");
});	

/* Video Wrapper */
$(document).on("click", ".videoExit svg", function () {
	$(".videoWrapper").fadeOut(0);
	$(".videoExtra").remove();
});

//Auto-scroll fixed
function removeAutoscroll(){
	$.each(Frame[tempAS2].ScrollTo, function( index, value ) {
		$.each(Frame[tempAS2].SoundPhrases, function( index2, value2 ) {
			if(value2 === value.sec){
				Frame[tempAS2].SoundPhrases.splice(index2,2);
				return false;
			}					
		});
	});
}




//Next-previous buttons
$(document).on("click", "[data-frame]:not([data-disabled])", function () {	
	if (Frame[currentFrame].Salon==false && Frame[currentFrame].ScrollTo){removeAutoscroll();}//fix auto-scroll
	var minus=1;
	if(Infos.SalonDisabled){minus=0;}	
	var frame;var flag=-1;	
	clearSound();
	switch($(this).attr("data-frame")) {
    case "previous":
        if((Frame[currentFrame].Lesson!=Frame[currentFrame-1].Lesson || Frame[currentFrame].SpreadPrevious) && (typeof Infos.SalonDisabled === 'undefined' || Infos.SalonDisabled === null)){
				$.each(Frame, function( index, value ) {
					try{
					$.each(value.Lessons, function( index2, value2 ) {
						
						if(value2==Frame[currentFrame-minus].Lesson){
							$(".returnSallon").attr("data-disabled","true");
							if(Frame[currentFrame].SpreadPrevious){flag=Frame[currentFrame].SpreadPrevious-1;}
							else{flag=index;}
						}
					});
					}catch(err){}
					
				});
			if(flag!=-1){$(".mainFrames").removeClass("mainFrames");$(".mainOptionsSpread").fadeIn(0);$(".modulesMoreSpread").fadeIn(0);$(".containerExpanded").removeClass("containerExpanded");InitialSalon(flag);}
			
			}
		else{InitialSalon(currentFrame-1);}			
        break;
    case "next":
		if((Frame[currentFrame].Lesson!=Frame[currentFrame+1].Lesson || Frame[currentFrame].SpreadNext) && (typeof Infos.SalonDisabled === 'undefined' || Infos.SalonDisabled === null)){
			$.each(Frame, function( index, value ) {
				try{
				$.each(value.Lessons, function( index2, value2 ) {
					if(value2==Frame[currentFrame+minus].Lesson){
						$(".returnSallon").attr("data-disabled","true");
            if(Frame[currentFrame].SpreadNext){InitialSalon(Frame[currentFrame].SpreadNext-1);}
            else{InitialSalon(index);}
						$(".mainFrames").removeClass("mainFrames");$(".mainOptionsSpread").fadeIn(0);$(".modulesMoreSpread").fadeIn(0);$(".containerExpanded").removeClass("containerExpanded");
						flag=0;return false;
          }
				});
				}catch(err){}
				if(flag==0){return false;}
			});	
			
			}
		else{InitialSalon(currentFrame+1);}		
        break;
    default:
        InitialSalon($(this).attr("data-frame"));
}	
$(".interactiveCheck").attr("class","interactiveCheck");
});	


//Salon sticker to frame
$(document).on("click", "[data-sticker]:not(.disabled-icon)", function () {
	
	$(".mainGroupLeft").fadeIn(0);
	$(".mainGroupRight").fadeIn(0);
	$(".homeBtn").fadeIn(0);
	$(".toolsWrapper").addClass("toolFrame");
	$(".mainBg").addClass("mainFrames");
	$(".mainOptionsSpread").fadeOut(0);
	$(".modulesMoreSpread").fadeOut(0);
	
	var inp=$(this).attr("data-sticker");
	$.each(Frame, function( index, value ) {		
		if(value.id==inp){
			currentFrame=index;
			InitialSalon(index);
			$(".returnSallon").removeAttr("data-disabled");
			return false;
			}
	});
});





//Return to salon button
$(document).on("click", ".returnSallon:not([data-disabled])", function () {
	$(".mainGroupLeft").fadeOut(0);
	$(".mainGroupRight").fadeOut(0);
	$(".containerExpanded").removeClass("containerExpanded");
	$(".container img").addClass("unzoomedBI");
	$(".homeBtn").fadeOut(0);
	$(".toolFrame").removeClass("toolFrame");
	$(".mainFrames").removeClass("mainFrames");
	$(".mainOptionsSpread").fadeIn(0);
	$(".modulesMoreSpread").fadeIn(0);
	$(".videoBtn").attr("data-disabled","true");
	if (Frame[currentFrame].Salon==false && Frame[currentFrame].ScrollTo){removeAutoscroll();}//fix auto-scroll
	var flag=1;var sMin=100;var sIndex=0;
	$.each(Frame, function( index, value ) {
		try{
		$.each(value.Stickers, function( index2, value2 ) {
			if(value2.target==Frame[currentFrame].id){InitialSalon(index);flag=0;return false;}
			if(Math.abs(Frame[currentFrame].id-value2.target)<sMin){sMin=Math.abs(Frame[currentFrame].id-value2.target);sIndex=index;}			
		});
		}catch(err){}
		if(flag==0){return false;}
	});	
	if(flag==1){InitialSalon(sIndex);}
	clearSound();
	clearJustiSound();
	$(".mainFrame").removeClass("mainFrame");
	$(".returnSallon").attr("data-disabled","true");
});



//Audio play-pause button
$(document).on("click", ".audioBtn svg", function () {	
	$(this).parent().toggleClass("audioPause");
	if(!$(this).parent().hasClass("audioPause")){
		$(".extraInfo audio")[0].pause();
		try{
			clearInterval(soundInterval);}
		catch(err){}}		
	else{
		if($(".extraInfo audio[data-start]").length==0){
			$(".extraInfo audio").attr("data-start","0");
			$(".extraInfo audio").attr("data-end",$(".extraInfo audio")[0].duration);
		}
		$(".extraInfo audio")[0].play();		
		clearJustiSound();
		soundInterval=setInterval(soundPhrases,20);
	}	
});	


//Audio stop button
$(document).on("click", ".stopBtn svg", function () {	
		clearSound();
});	



//Video stop button
$(document).on("click", ".videoPause ~ .videostopBtn svg", function () {	
	clearVideo();
	$(".videoPlayBtn").removeClass("videoPause");
	$(".subsSpan").html("");		
});	



//Sound phrase click trigger
$(document).on("click", "[data-phrase]", function () {	
if($(".txtmcBtn[data-disabled]").length==1||$(".txtmcBtn.textEnabled").length==1){	
	if(!$(this).hasClass("phraseActive")){
		clearSound();
		clearJustiSound();
		soundCurrent=$(this).attr("data-phrase")*2-1;	
		$(".extraInfo audio")[0].currentTime=Frame[currentFrame].SoundPhrases[soundCurrent-1];
		$(this).addClass("phraseActive");
		$(".extraInfo audio").attr("data-start",Frame[currentFrame].SoundPhrases[soundCurrent-1]);
		$(".extraInfo audio").attr("data-end",Frame[currentFrame].SoundPhrases[soundCurrent]);
		$(".extraInfo audio")[0].play();
		$(".playBtnWrapper").addClass("audioPause");	
		soundInterval=setInterval(soundPhrases,20);
	}
	else{
		clearSound();
	}
}	

});


//irregular fix
$(document).on("click", "[data-phraseA]", function () {	
if($(".txtmcBtn[data-disabled]").length==1 || $(".txtmcBtn.textEnabled").length==1){	
	$(this).parent().toggleClass("audioPause");
	if(!$(this).hasClass("audioPause")){
		clearSound();
		clearJustiSound();
		soundCurrent=$(this).attr("data-phraseA")*2-1;	
		$(".extraInfo audio")[0].currentTime=Frame[currentFrame].SoundPhrases[soundCurrent-1];
		$(this).addClass("soundSelected");
		$(".extraInfo audio").attr("data-start",Frame[currentFrame].SoundPhrases[soundCurrent-1]);
		$(".extraInfo audio").attr("data-end",Frame[currentFrame].SoundPhrases[soundCurrent]);
		$(".extraInfo audio")[0].play();
		$(".playBtnWrapper").addClass("audioPause");	
		soundInterval=setInterval(soundPhrases,20);
	}
	else{
		clearSound();
	}
}	

});


//Video trigger
$(document).on("click", ".videoBtn:not([data-disabled])", function () {
	clearSound();
	clearJustiSound();
	$(".IWB").addClass("loading");	
	$(".videoWrapper").removeClass("worksheetSelect");
	$(".videoExtra").remove();
	$(".videoWrapper source").attr("src","../Video/"+ Frame[currentFrame].Video +".mp4");
	$(".videoWrapper").css("display","block");	
	vFlag=1;
	$(".videoWrapper video")[0].load();
	$(".videoWrapper video")[0].play();
});	


//On video load
$('.videoWrapper video').on('canplay', function(){	
	if(vFlag==1){
	$(".playBtn").removeClass("playBtn").addClass("pauseBtn");
	$(".subsOn").addClass("subsOff");
	$(".subsSpan").html("");	
	$(".subsSpan").fadeOut(0);
	$("[data-videopart]").remove();
	if(Frame[currentFrame].Parts){
		$.each(Frame[currentFrame].Parts, function( index, value ) {
			var left=value.time/1000/$(".videoWrapper video")[0].duration*265+"px";
			$(".videoBar").append("<div data-videopart="+ value.time +" style='left:"+ left +"'>"+ String.fromCharCode((index+65)) +"</div>");
			if(value.enabled){$(".videoWrapper video")[0].currentTime=value.time/1000;}			
		});	
	}	
	if(Frame[currentFrame].SubsArray){		
		subs=Frame[currentFrame].SubsArray;			
	};	
	if(Frame[currentFrame].TargetSub){
		$.each(Subs, function( index, value ) {
			if(value.id==Frame[currentFrame].TargetSub){subs=value.SubsArray; return false;}
		});			
	};	
	var RLCM=parseInt(pId)+100;
	if(Frame[currentFrame].Portal){
		console.log(RLCM);
		$.each(Frame[currentFrame].Portal, function( index, value ) {
				if(value.TargetSub==(RLCM)){
					$.each(Subs, function( index2, value2 ) {
						if(value.TargetSub==value2.id){
							subs=value2.SubsArray; 
							if(value2.Parts){
								console.log(value2.Parts);
								$.each(value2.Parts, function( index3, value3 ) {
									var left4=value3.time/1000/$(".videoWrapper video")[0].duration*200-12.5+"px";
									$(".videoBar").append("<div data-videopart="+ value3.time +" style='left:"+ left4 +"'>"+ String.fromCharCode((index3+65)) +"</div>");
								});
							}
							
							return false;
						}
					});	
					return false;
				}
		});
	}
	vFlag=0;
	videoInterval=setInterval(videoBar,20);
		$(".IWB").removeClass("loading");
	}

});


//Video pause trigger
$(document).on("click", ".videoPause", function () {	
	$(".videoWrapper video")[0].pause();
	$(".videoPause").removeClass("videoPause");	
	clearInterval(videoInterval);	
});

//Video play trigger
 $(document).on("click", ".videoPlayBtn:not(.videoPause)", function () {	
	$(".videoWrapper video")[0].play();
	$(this).addClass("videoPause");
	videoInterval=setInterval(videoBar,20);
}); 

//Close Video
$(document).on("click", ".closeVideo", function () {	
	clearVideo();
	$("[data-videopart]").remove();
	$(".videoWrapper").fadeOut(0);
});

//Enable subtitles 
$(document).on("click", ".subsOff", function () {	
	$(".subsOff").removeClass("subsOff");
	$(".subsSpan").fadeIn(0);
});

//Disable subtitles
$(document).on("click", ".subsOn:not(.subsOff)", function () {	
	$(".subsOn").addClass("subsOff");
	$(".subsOn").addClass("subsOff");
	$(".subsSpan").fadeOut(0);
});


//Reset interactive activity
$(document).on("click", ".interactiveReset", function () {	
	$(".dropInteractive").html("");		
	$(".dragTransparent").removeClass("dragTransparent");
	$(".interactive").removeClass("selected");	
	$(".interactiveCheck").attr("class","interactiveCheck");
	$(".interactiveCorrect,.interactiveWrong").fadeOut(0);
	$(".intWrong,.intCorrect").removeClass("intWrong intCorrect");
	$("[data-keyshow]").removeAttr("data-disabled");
});



//Show correct interactive values
$(document).on("click", ".interactiveShow", function () {
	$(".dropInteractive").html("");		
	$(".dragTransparent").removeClass("dragTransparent");
	$(".interactive").removeClass("selected");	
	$(".interactiveCheck").attr("class","interactiveCheck");
	$(".interactiveCorrect,.interactiveWrong").fadeOut(0);
	$(".intWrong,.intCorrect").removeClass("intWrong intCorrect");
	$("[data-keyshow]").attr("data-disabled","true");
	if($(".intCorrect").length==0||$(".intWrong").length>0){
	$(".dropInteractive").each( function( index, value ) {
		$(this).html($("[data-dragint=\""+ $(this).attr("data-dropint") +"\"]")[0].outerHTML);
		$(this).children().css({top:$(this).css("top"),left:$(this).css("left")});
		if(!Frame[currentFrame].Interactive.dragMore){$(".container>.dragInteractive[data-dragint=\""+ $(this).attr("data-dropint") +"\"]").addClass("dragTransparent");}	
	});	
	$("[data-multiplecorrect=\"true\"]").addClass("selected");
	
	
	$(".interactiveCheck").attr("class","interactiveCheck interactiveEnabled");
	$(".interactiveEnabled").click();
	$(".interactiveCheck").attr("class","interactiveCheck");

	$(".interactiveCorrect,.interactiveWrong").fadeOut(0);
	}
	else{
		$(".interactiveReset").click();
		
	}
	
});

//Teacher's Key Btn Interactive 
$(document).on("click", "[data-keyshow]:not([data-disabled])", function () {
	var curDrop = $(this).attr("data-keyshow");
	//console.log(curDrop);

	//Drag and drop
	$(".dropInteractive").each( function( index, value ) {
		var wordDrop = $(this).attr("data-dropint")
		if (curDrop == $(this).attr("data-keyshowI")) {
			if ($(this).children().hasClass("intCorrect")) {
				$(this).html("");
				$(".dragInteractive").each( function( index, value ) {
					if (wordDrop == $(this).attr("data-dragint")) {
						$(this).removeClass("dragTransparent");
					}
				});
			}
			else {
				$(this).html($("[data-dragint=\""+ $(this).attr("data-dropint") +"\"]")[0].outerHTML);
				$(this).children().css({top:$(this).css("top"),left:$(this).css("left")});
				$(this).children().addClass("intCorrect");
				if(!Frame[currentFrame].Interactive.dragMore){
					$(".container>.dragInteractive[data-dragint=\""+ $(this).attr("data-dropint") +"\"]").addClass("dragTransparent");
				}
			}
		}
	});	
	
	//Multiple choice
	$("[data-multiplecorrect='true'].choice").each( function( index, value ) {
		if (curDrop == $(this).attr("data-keyshowi")) {
			$(this).toggleClass("intCorrect");
		}
	});
	
	$(".interactiveCheck").attr("class","interactiveCheck interactiveEnabled");
	$(".interactiveCheck").attr("class","interactiveCheck");
	$(".interactiveCorrect,.interactiveWrong").fadeOut(0);
	
});


//Check interactive anwers
$(document).on("click", ".interactiveEnabled", function () {	
	var correct=0;var wrong=0;
	correct+=$("[data-multiplecorrect].selected").length;
	wrong+=$("[data-multiplecorrect]:not(.selected)").length;
	$("[data-multiplecorrect].selected").addClass("intCorrect");
	$(".selected:not([data-multiplecorrect])").addClass("intWrong");
	
	$(".dragging").removeClass("dragging");
	$(".dropInteractive").each( function( index, value ) {
		if($(this).attr("data-dropint")==$(this).children("[data-dragint]").attr("data-dragint")){
			correct++;	
			$(this).children("[data-dragint]").addClass("intCorrect")
		}
		else{wrong++;
		$(this).children("[data-dragint]").addClass("intWrong")
		}
	});	
	
	$(".interactiveCorrect > span").html(correct);
	$(".interactiveWrong > span").html(wrong);
	$(".interactiveCorrect,.interactiveWrong").fadeIn(0);
});



//Drag and drop interactive mousedown trigger
$(document).on("mousedown touchstart", ".dragInteractive", function (e) {
	if (!$("[data-keyshow]").data("disabled")) {
		$(".dropInteractive").html("");
		$(".dragTransparent").removeClass("dragTransparent");
	}
	
	$(".intWrong,.intCorrect").removeClass("intWrong intCorrect");
	$("[data-keyshow]").attr("data-disabled","true");
	$(".interactiveCorrect,.interactiveWrong").fadeOut(0);
	$(".dragging").removeClass("dragging");
	
	$(this).addClass("dragging");
	
	$(".container").append($(this)[0].outerHTML);
	
	if(!Frame[currentFrame].Interactive.dragMore){$(".dragging").eq(0).addClass("dragTransparent");}	

	$(".dragging").eq(0).removeClass("dragging");
	if($(this).closest(".dropInteractive").length>0){$(this).remove();}
	
	inter=coords(e,".dragging");
	$(document).on("mousemove touchmove", onInteractive);
	$(document).on("mouseup touchend", onInteractiveUp);
});

/* $(document).on("click", ".dragInteractive", function () {
	$(".intWrong,.intCorrect").removeClass("intWrong intCorrect");

	$(".interactiveCorrect,.interactiveWrong").fadeOut(0);
	$(".dragging").removeClass("dragging");
	
	$(this).addClass("dragging");
	
	$(".container").append($(this)[0].outerHTML);
	
	if(!Frame[currentFrame].Interactive.dragMore){$(".dragging").eq(0).addClass("dragTransparent");}	

	$(".dragging").eq(0).removeClass("dragging");
	if($(this).closest(".dropInteractive").length>0){$(this).remove();}
	
}); */

//On drag interactivetrigger
var onInteractive = function(e) {	
	var dim=coords(e,".container");
	
	$(".dragging").css({'left': (dim.left-inter.left) +'px','top': (dim.top-inter.top) +'px'});

};


//On mouse up interactive trigger
var onInteractiveUp = function(e) {
	e.preventDefault;
	var dim=coords(e,".container");
	var flag=0;var inp;
	$(".dropInteractive").each( function( index, value ) {
		var left = parseFloat($(this).css("left").replace("px"));
		var top = parseFloat($(this).css("top").replace("px"));
		if(dim.left>left&&dim.left<(left+$(this).width())&&dim.top>top&&dim.top<(top+$(this).height())){			
			if($(this).children().length==1){
				$(".container>[data-dragint=\""+ $(this).children().attr("data-dragint") +"\"]").removeClass("dragTransparent");
				$(this).html("");
			}	
			$(this).append($(".dragging")[0].outerHTML);
			inp=$(this);flag=1;			
			
		}
		
		if(!Frame[currentFrame].Interactive.dragMore){try{$(".container>[data-dragint=\""+ $(this).children().attr("data-dragint") +"\"]").addClass("dragTransparent");}catch(err){}
}					
	});
	
	if(flag==0){$(".container>[data-dragint=\""+ $(".container>.dragging").attr("data-dragint") +"\"]").removeClass("dragTransparent");
		}	
	$(".container>.dragging").remove();
	
		
	if($(".dropInteractive .dragInteractive").length==$(".dropInteractive").length){
		$(".interactiveCheck").attr("class","interactiveCheck interactiveEnabled");		
	}
	else{
		$(".interactiveCheck").attr("class","interactiveCheck");	
		
	}	
	$(document).off("mousemove touchmove", onInteractive);
	$(document).off("mouseup touchend", onInteractiveUp);
};


//Go to vocabulary
// $(document).on("click", "[data-type='VC']:not([data-disabled])", function () {	
	// var glCor=$(this).attr("data-correlation").toUpperCase();var type="SB";
	// if(Infos.Module=="Hello"){glCor="Hello";}
	// if(Infos.Workbook_Correlation.length==0&&Infos.Studentsbook_Correlation.length>0){glCor+=" WB";type="WB"}
	
	// if($(this).attr("data-correlation")){
		// window.name = '{"GlossaryModule":"'+ Infos.Module +'","GlossaryLesson":"'+glCor+'","Type":"'+type+'","Return":"'+(parseInt(currentFrame)+1)+'"}'		
	// }		
	// setTimeout(function(){ window.location.href = "../EX/Vocabulary.html";}, 200);	
// });

//Go to vocabulary
$(document).on("click", "[data-type='VC']:not([data-disabled])", function () {	
	var glCor=$(this).attr("data-correlation").toUpperCase();
	var type="SB";
	var modRedirect = -1; //module redirection
	
	if(Infos.Module=="15"){modRedirect="14";}
	if(Infos.Module=="16"){modRedirect="15";}
	if(Infos.Module=="18"){modRedirect="16";}
	if(Infos.Module=="20"){modRedirect="17";}
	if(Infos.Module=="21"){modRedirect="18";}
	
	if(Infos.Workbook_Correlation.length==0&&Infos.Studentsbook_Correlation.length>0){glCor="WB";type="WB"}
	
	if($(this).attr("data-correlation")){
		if (modRedirect != -1) {
			window.name = '{"GlossaryModule":"'+ modRedirect +'","GlossaryLesson":"'+glCor+'","Type":"'+type+'","Return":"'+(parseInt(currentFrame)+1)+'"}'	
		}
		else {
			window.name = '{"GlossaryModule":"'+ Infos.Module +'","GlossaryLesson":"'+glCor+'","Type":"'+type+'","Return":"'+(parseInt(currentFrame)+1)+'"}'	
		}	
	}		
	setTimeout(function(){ window.location.href = "../EX/Vocabulary.html";}, 200);	
});




//Go to vocabulary (Modules and more)
$(document).on("click", "[data-typemore='VC']:not([data-disabled])", function () {
	let modRedirect = $(this).closest("[data-extramodule]").attr("data-extramodule");
	
	if(modRedirect == "15"){modRedirect = "14";}
	if(modRedirect == "16"){modRedirect = "15";}
	if(modRedirect == "18"){modRedirect = "16";}
	if(modRedirect == "20"){modRedirect = "17";}
	if(modRedirect == "21"){modRedirect = "18";}
	
	if($(this).parents("[data-extramodule]").length>0){
		window.name = '{"GlossaryModule":"'+ modRedirect +'"}';
	}
	setTimeout(function(){window.location.href = "../EX/Vocabulary.html";}, 200);
});

//Workbook-Student's book correlation
$(document).on("click", "[data-type='WB'],[data-type=SB]", function () {
	var loc=""
	if(!$(this).is("[data-skip]")){
		var mCor=$(this).attr("data-correlation");	
		window.name = '{"Lesson":"'+mCor+'"}';	
	}
	else{
		window.name = '{"Frame":"'+$(this).attr("data-skip")+'"}';		
	}
	var url = $(this).attr("data-type");
	
	if(Infos.Module=="0"||Infos.Module=="Hello"){
		loc = "../"+url+"/Module0.html";
	}
	else{
		
	//correlation to another module
		var SkipModule = $(this).attr("data-module");
		loc = "../"+url+"/Module"+ SkipModule +".html";	
		
		if(SkipModule==undefined) {
			loc = "../"+url+"/Module"+ Infos.Module +".html";	
		}
		
		
	}
	
	setTimeout(function(){ window.location.href = loc;}, 200);
	
	
});	

$(document).on("click", "[data-type='EX']", function () {
	
	window.name = "Lesson:"+$(this).attr("data-correlation");
	var url = $(this).attr("data-type");
	window.location.href = "../EX/Module"+ Infos.Module +".html";	
});	


//Portal to correlation
$(document).on("click", "[data-type='PO']", function () {
	
	window.name = '{"Lesson":"'+$(this).attr("data-correlation")+" "+Infos.Module+'"}';
	
	if ($(this).attr("data-correlation") == "Portal to Grammar") {window.name = '{"Lesson":"'+$(this).attr("data-correlation")+" "+Infos.Module+Frame[currentFrame].Lessons[0]+'"}';}
	
	var url = $(this).attr("data-type");
				
	var exModule = $(this).attr("data-module");	
	
	setTimeout(function(){window.location.href = "../EX/Module"+ exModule +".html";	}, 200);
	
	if(exModule === undefined){	
		setTimeout(function(){window.location.href = "../EX/Module"+ Infos.Module +".html";	}, 200);
		
	}
});	

//Game reference
$(document).on("click", "[data-game]", function () {
	//window.name = "GameModule:"+$(this).closest("[data-gamemodule]").attr("data-gamemodule");
	if($(this).attr("data-game")==""){
		window.name = '{"Module":"'+Infos.Module+'","Type":"GA"}';
		setTimeout(function(){window.location.href = "../MainMenu.html";}, 200);
	}
	else{
		window.name = '{"GameModule":"'+Infos.Module+'","GameLesson":"'+$(this).attr("data-gamelesson")+'","Return":"'+(parseInt(currentFrame)+1)+'"}';	//game lesson 
		var loc="../Games/"+ $(this).attr("data-game") +"/"+$(this).attr("data-game")+".html";
		setTimeout(function(){window.location.href =loc;}, 200);
	}
});


//Interactive reference
$(document).on("click", "[data-type='IA']", function () {
		$(".mainFrames").removeClass("mainFrames");
		var loc = "../IA/Module"+ Infos.Module +".html";
		setTimeout(function(){window.location.href =loc;}, 200);
});

//Grammarbook correlation
$(document).on("click", "[data-type='GR']", function () {
	var loc=""
	if(!$(this).is("[data-skip]")){
		var mCor=$(this).attr("data-correlation");	
		window.name = '{"Lesson":"'+mCor+'"}';	
	}
	else{
		window.name = '{"Frame":"'+$(this).attr("data-skip")+'"}';		
	}
	
		loc = "../GB/Module"+ Infos.Module +".html";	
	
	
	setTimeout(function(){ window.location.href = loc;}, 200);
	
});	

$(document).on("click", ".mainBack", function () {
	// (".bottomBar").css("display","block");
	var str=window.location.href;
	var type=str.substring(str.lastIndexOf("\/")-2,str.lastIndexOf("\/"));
	
	
	
	if(Infos.MainBack){
		type=Infos.MainBack;
		}
		
	if(str.indexOf("ABC")>0){
		type="ABC";
		}
		
	if(Infos.Type=="Video Worksheet"){
		type="VW";
		}

	if(Infos.Type=="Reader"){
		type="Reader";
	}	

	if(Infos.Type=="Grammar Tests" || Infos.Type=="Module Tests"){
		type="TE";
	}
	
	if((Infos.ModuleText.indexOf("View")>0)||(Infos.ModuleText.indexOf("view")>0)){
		type="PG";
	}	
	
	if(Infos.ModuleText.indexOf("Master")>0){
		type="PV";
	}
	
	$(".primary .secondLevel").fadeIn(0);
	var Main={Module:Infos.Module,Type:type};
	window.name = '{"Module":"'+Infos.Module+'","Type":"'+type+'"}';
	
	setTimeout(function(){window.location.href = "../MainMenu.html";}, 200);
	
	
});	

//Zoom In spread
$(document).on("click", ".zoomSpread:not(.zoomOut)", function () {
		$(".unzoomedBI").removeClass("unzoomedBI");
		$(".mainBg").addClass("zoomed");
		$(".container").addClass("zoomedCont");
		$(".mainWrapper").addClass("zoomedWr");	
//new-buttons	
		$(".zoomSpread").html('<svg width="50px" height="50px" viewBox="0 0 50 50" class="zoomOutSpreadbtn"><path fill="#00052D" d="M35,70.001c-19.299,0-35-15.701-35-35C0,15.7,15.701-0.001,35-0.001c19.301,0,35,15.701,35,35.002	C70,54.3,54.301,70.001,35,70.001L35,70.001z"/><path fill="#FFFFFF" d="M37.768,32.921c-0.16-0.064-0.301-0.158-0.42-0.277l-0.08-0.1c-0.086-0.102-0.15-0.207-0.195-0.318c-0.064-0.156-0.096-0.318-0.098-0.484V20.657c0-0.705,0.574-1.277,1.277-1.277c0.705,0,1.279,0.572,1.279,1.277v8l11.598-11.584c0.5-0.494,1.311-0.492,1.807,0.004c0.24,0.242,0.373,0.563,0.373,0.904c0,0.34-0.133,0.66-0.375,0.902L41.342,30.462h7.994c0.705,0,1.277,0.574,1.277,1.279c0,0.703-0.572,1.277-1.277,1.277H38.254C38.086,33.019,37.922,32.985,37.768,32.921z"/><path fill="#FFFFFF" d="M20.682,38.265c0,0.705,0.574,1.279,1.277,1.279h7.996L18.361,51.122c-0.482,0.48-0.482,1.322-0.002,1.807c0.496,0.498,1.307,0.5,1.809,0.002l11.598-11.582v8c0,0.705,0.572,1.277,1.277,1.277s1.277-0.572,1.277-1.277V38.265c0-0.166-0.031-0.33-0.098-0.488c-0.129-0.313-0.381-0.564-0.693-0.691c-0.156-0.064-0.32-0.098-0.486-0.098H21.959C21.256,36.987,20.682,37.562,20.682,38.265z"/></svg>');
		$(".zoomSpread").addClass("zoomOut");
		$(".correlation").fadeOut(0);
		$(".salonShadow").addClass("zoomedShadow");
		zoomFlag=1;
		InitialSalon(currentFrame);
});

//Zoom Out spread
$(document).on("click", ".zoomOut", function () {
		$(".container img").addClass("unzoomedBI");
		$(".zoomed").removeClass("zoomed");
		$(".zoomedCont").removeClass("zoomedCont");
		$(".zoomedWr").removeClass("zoomedWr");	
//new-buttons	
		$(".zoomSpread").html('<svg width="70px" height="70px" viewBox="0 0 70 70" class="zoomSpreadbtn "><path fill="#00052D" d="M35.002,70.001C15.701,70.001,0,54.3,0,35.001C0,15.7,15.701-0.001,35.002-0.001S70,15.7,70,35.001	C70,54.3,54.303,70.001,35.002,70.001L35.002,70.001z"/><path fill="#FFFFFF" d="M21.064,19.249h8c0.705,0,1.277-0.572,1.277-1.277s-0.572-1.277-1.277-1.277H17.982c-0.168,0-0.334,0.033-0.49,0.098c-0.131,0.055-0.258,0.137-0.373,0.244l0.006,0.008l-0.1,0.094			c-0.07,0.08-0.158,0.191-0.221,0.342c-0.068,0.16-0.102,0.33-0.1,0.496v11.08c0,0.703,0.572,1.277,1.277,1.277s1.277-0.574,1.277-1.277V21.06l11.584,11.594c0.242,0.242,0.563,0.375,0.904,0.375c0.34,0,0.66-0.133,0.902-0.375			c0.242-0.24,0.375-0.561,0.375-0.9c0.002-0.342-0.133-0.664-0.375-0.906L21.064,19.249z"/><path fill="#FFFFFF" d="M53.203,17.485c-0.064-0.158-0.158-0.299-0.277-0.418l-0.1-0.08c-0.104-0.086-0.207-0.15-0.318-0.197			c-0.156-0.063-0.318-0.096-0.486-0.096H40.938c-0.703,0-1.277,0.572-1.277,1.277s0.574,1.277,1.277,1.277h8l-11.584,11.6c-0.494,0.498-0.492,1.309,0.006,1.807c0.242,0.24,0.563,0.373,0.902,0.373c0.342,0,0.662-0.133,0.904-0.375L50.744,21.06v7.996c0,0.703,0.572,1.277,1.277,1.277s1.277-0.574,1.277-1.277V17.972C53.299,17.804,53.266,17.64,53.203,17.485z"/><path fill="#FFFFFF" d="M30.844,37.347L19.26,48.94v-7.996c0-0.703-0.572-1.277-1.277-1.277s-1.277,0.574-1.277,1.277v11.074c-0.002,0.174,0.031,0.344,0.098,0.5c0.063,0.15,0.156,0.264,0.172,0.273l0.156,0.182c0.117,0.104,0.234,0.18,0.363,0.234c0.156,0.064,0.32,0.098,0.488,0.098h11.082c0.705,0,1.277-0.572,1.277-1.277s-0.572-1.277-1.277-1.277h-8L32.65,39.153c0.242-0.242,0.377-0.564,0.375-0.906c0-0.342-0.133-0.662-0.373-0.9C32.17,36.862,31.328,36.864,30.844,37.347z"/><path fill="#FFFFFF" d="M52.021,39.667c-0.705,0-1.277,0.574-1.277,1.277v7.996L39.166,37.347c-0.482-0.482-1.324-0.482-1.807-0.002c-0.498,0.496-0.5,1.307-0.004,1.809l11.582,11.598h-8c-0.703,0-1.277,0.572-1.277,1.277	s0.574,1.277,1.277,1.277h11.084c0.166,0,0.33-0.031,0.49-0.098c0.311-0.129,0.563-0.381,0.691-0.693c0.064-0.156,0.096-0.32,0.096-0.486V40.944C53.299,40.241,52.727,39.667,52.021,39.667z"/></svg>');
		$(".zoomOut").removeClass("zoomOut");
		$(".correlation").fadeIn(0);
		$(".zoomedShadow").removeClass("zoomedShadow");
		$(".stickerZoom").removeClass("stickerZoom");
		zoomFlag=0;
		InitialSalon(currentFrame);
});


//drop-Curtain button On/Off Click

function clickDropButton()
{
	$(".drop-Curtain").click(function(){	

	if(!$(".white-curtain").hasClass('bounceCurtainDown')){
		clearTimeout(BouncingTimeOff);
		$(".drop-Curtain").addClass('activated');
		$(".white-curtain").append("<div id='sketch' class='sketchCurtain'></div>");
		$(".mainOptionsSpread").css("z-index","auto");
		$(".mainGroupLeft").css("z-index","9702");
		$(".white-curtain").removeClass('bounceCurtainUp');
		var BouncingTime = setTimeout(function()
		{
			$(".white-curtain").addClass('bounceCurtainDown');
			$(".drop-Curtain").addClass('activated');

			$(".mainGroupLeft .returnSallon,.mainGroupLeft .showAnswers,.mainGroupLeft .videoBtn,.mainGroupLeft .homeBtn").css("visibility","hidden");
		
		},400);
		
		$(".white-curtain").css("height","100%");
		$(".white-curtain .MM-logo").css("display","block");
		$(".curtExit polygon").css("fill","black");

	}
	else 
	{
		
		clearTimeout(BouncingTime);
		$(".curtExit polygon").css("fill","#ff0000");
		$(".white-curtain").removeClass('bounceCurtainDown');
		$(".drop-Curtain").removeClass('activated');
		var BouncingTimeOff = setTimeout(function() 
		{

		$(".white-curtain").addClass('bounceCurtainUp');
		$(".white-curtain .MM-logo").css("display","none");
		$(".white-curtain .exitbtn").css("display","none");
		},100);
		$(".white-curtain").css("height","0%");
		$(".mainOptionsSpread").css("z-index","1");
		$(".mainGroupLeft").css("z-index","0");
		$(".mainGroupLeft .returnSallon,.mainGroupLeft .showAnswers,.mainGroupLeft .videoBtn,.mainGroupLeft .homeBtn").css("visibility","visible");
		$(".white-curtain #sketch").remove();

		}

	});
	}

clickDropButton();

$(".toolsWrapper>svg").click(function(event){
	var targetElem = $(event.target).closest(".toolsWrapper");
	if($(".white-curtain").hasClass('bounceCurtainDown'))
	{

		if(!targetElem.hasClass('enabledTool'))
		{
			$(".drop-Curtain").off("click");
			$('.drop-Curtainbtn').css("pointer-events","none");
		}
		else
		{
			clickDropButton();
			$('.drop-Curtainbtn').css("pointer-events","all");
		}	
	}
});


//Module more
$(document).on("click", "[data-extramodule]>span", function () {
	if($(this).parent().hasClass("modulesExtraExp")){
		$(".modulesExtraExp .modulesExtraSub").slideUp();
		$(".modulesExtraExp").removeClass("modulesExtraExp");
		}
	else{$(".modulesExtraExp .modulesExtraSub").slideUp();
		$(".modulesExtraExp").removeClass("modulesExtraExp");
		$(this).parent().addClass("modulesExtraExp");
		$(this).siblings(".modulesExtraSub").slideDown();

	}
});

$(document).on("click", ".modulesTrigger", function () {
	$(".modulesExtra").slideToggle();
	$(".modulesExtraExp .modulesExtraSub").slideToggle();
	$(".modulesExtraExp").removeClass("modulesExtraExp");
});

$(document).mouseup(function (e) {
   if (!$(".modulesMore").is(e.target) // if the target of the click isn't the container...
   && $(".modulesMore").has(e.target).length === 0) // ... nor a descendant of the container
   {
     $(".modulesExtra").slideUp();
  }
});

/* $('.IWB').on('click',function(event){
   if(!$(event.target).is('.modulesMore')){
     $(".modulesExtra").slideToggle();
   }
}); 

/* $(document).on("click", ".IWB:not(.mainOptions)", function () {
	if($(".modulesExtra").css("display") != "none"){
		$(".modulesExtra").slideUp();
	}
}); */


$(document).on("click", "[data-extra]", function () {
	var str=window.location.href;
	var type=str.substring(str.lastIndexOf("\/")-2,str.lastIndexOf("\/"));
	//if(Infos.MainBack){type=Infos.MainBack;}
	//if(str.indexOf("ABC")>0){type="ABC"}
	if(Infos.Type=="Video Worksheet"){type="VW";}
	console.log($(this).closest("[data-extramodule]").attr("data-extramodule"));
	console.log($(this).attr("data-extra"));
	
	var Main={Module:$(this).closest("[data-extramodule]").attr("data-extramodule"),Type:$(this).attr("data-extra")};
	window.name = '{"Module":"'+$(this).closest("[data-extramodule]").attr("data-extramodule")+'","Type":"'+$(this).attr("data-extra")+'"}';
	
	setTimeout(function(){window.location.href = "../MainMenu.html";}, 200);
});

$(document).on("click", "[data-secondmodule][data-gotoframe]", function () {
	var pre="Module";
	window.name = '{"Frame":"'+ $(this).attr("data-gotoframe")+'"}';
	if($(this).closest("data-second")=="GB"){pre="Module"}
	var loc="../EX/"+pre + $(this).attr("data-secondmodule") +".html";
	setTimeout(function(){window.location.href = loc;}, 200);


});




$(document).on("click", "[data-goto]", function () {
	
	var splitTxt=$(this).attr("data-goto").split(";");
	if(splitTxt[1]){window.name = '{"Frame":"'+splitTxt[1]+'"}';}
	setTimeout(function(){window.location.href = splitTxt[0] +".html";}, 200);
});


//Sound bar click trigger
$(document).on("click", ".soundBar", function (e) {	
	$(".extraInfo audio")[0].pause();
	clearInterval(soundInterval);
	if($(".extraInfo audio[data-start]").length==0){
			$(".extraInfo audio").attr("data-start","0");
			$(".extraInfo audio").attr("data-end",$(".extraInfo audio")[0].duration);
		}
	var left=coords(e,".soundBar").left;
	var percentage = (left)/$(this).width();	
	var start=parseFloat($(".extraInfo audio").attr("data-start"));
	var end=parseFloat($(".extraInfo audio").attr("data-end"));
	var soundWidth = (end-start);	
	var cr=percentage*soundWidth+start;
	$(".phraseActive").removeClass("phraseActive");	
	 try{$.each(Frame[currentFrame].SoundPhrases, function( index, value ) {
		if(cr<=value){			
			soundCurrent=index+1;
			if(soundCurrent%2==0){soundCurrent--;}			
			return false;}			
	});}
	catch(err){}			
	$(".extraInfo audio")[0].currentTime=cr;
	$(".extraInfo audio")[0].play();
	$(".audioBtn").addClass("audioPause");
	clearJustiSound();
	soundInterval=setInterval(soundPhrases,20);
});	


//Videobar
$(document).on("click", ".videoBar", function (e) {
	$(".subsSpan").html("");
	if(!$(e.target).is("[data-videopart]")){
    clearInterval(videoInterval);
	var left=coords(e,".videoBar").left;
	var percentage = (left)/$(this).width();
	var crTime=percentage*$(".videoContainer video")[0].duration*1000;
	$(".videoContainer video")[0].currentTime=percentage*$(".videoContainer video")[0].duration;
	
	$.each(subs, function( index, value ) {
		if(index==0&&value.Start>crTime){
			$(".subsSpan").html("");videoCurrent=1;return false;
			}
		try{
			if(value.Start<crTime){
				videoCurrent=index+1;
				if(value.End>crTime){
					$(".subsSpan").html(subs[videoCurrent-2].Text);
				}
				return false;
			}
		}catch(err){}
	});
	videoInterval=setInterval(videoBar,20);
	}
});

	
//Video part click
$(document).on("click", "[data-videopart]", function (e) {
	$(".subsSpan").html("");
    clearInterval(videoInterval);
	
	$(".videoContainer video")[0].currentTime=$(this).attr("data-videopart")/1000;
	var crTime=$(".videoContainer video")[0].currentTime;
	$.each(subs, function( index, value ) {
		if(index==0&&value.Start>crTime){$(".subsSpan").html("");videoCurrent=1;return false;}
		try{if(value.Start<crTime){videoCurrent=index+1;if(value.End>crTime){$(".subsSpan").html(subs[videoCurrent-2].Text);}return false;}
		}catch(err){}
	});
	videoInterval=setInterval(videoBar,20);
});

//On end of sound
$('.extraInfo audio').on('ended', function() {	
   clearSound();
});


//On end of video
$('.videoContainer video').on('ended', function() {
	clearVideo();
	$(".pauseBtn").removeClass("pauseBtn").addClass("playBtn");
	$(".videoWrapper").fadeOut(0);
});


//Fill fade in
$(document).on("click", ".fill:not([data-fill])", function () {
	if($(this).find(".txtmc").length==0){
		$(this).toggleClass("fillVisible");
		$(".clickSound")[0].play();
		}
	
});	

//Fill fade out
$(document).on("click", ".fillVisible:not([data-fill])", function () {
	if($(this).find(".txtmc").length==0){
		$(this).removeClass("fillVisible");
		$(".clickSound")[0].play();
		}	
});	

//Line fade in-out
$(document).on("click", ".line circle", function () {
	$(this).closest(".line").toggleClass("lineVisible");
	$(".clickSound")[0].play();
});	

//Fill with target fade in out
$(document).on("click", "[data-fill]:not(.fill)", function () {
	$(".fill[data-fill="+ $(this).attr("data-fill") +"]").toggleClass("fillVisible");
	$(".clickSound")[0].play();
});	

//Fill key button fade in out (fixed for more than one keys per number)
$(document).on("click", "[data-keyshow]", function () {
	var flag=0;

	if ( $(".fill[data-keyshowC="+ $(this).attr("data-keyshow") +"]").length + $(".fill[data-keyshowL="+ $(this).attr("data-keyshow") +"]").length + $(".fill[data-keyshowT="+ $(this).attr("data-keyshow") +"]").length == $(".fill.fillVisible[data-keyshowC="+ $(this).attr("data-keyshow") +"]").length + $(".fill.fillVisible[data-keyshowL="+ $(this).attr("data-keyshow") +"]").length + $(".fill.fillVisible[data-keyshowT="+ $(this).attr("data-keyshow") +"]").length ){
		flag=1;
	}
	console.log(flag);
	$(".fill[data-keyshowC="+ $(this).attr("data-keyshow") +"]").addClass("fillVisible");
	$(".fill[data-keyshowT="+ $(this).attr("data-keyshow") +"]").addClass("fillVisible");
	$(".fill[data-keyshowL="+ $(this).attr("data-keyshow") +"]").addClass("fillVisible");
	
	if (flag==1){
		$(".fill[data-keyshowC="+ $(this).attr("data-keyshow") +"]").removeClass("fillVisible");
		$(".fill[data-keyshowT="+ $(this).attr("data-keyshow") +"]").removeClass("fillVisible");
		$(".fill[data-keyshowL="+ $(this).attr("data-keyshow") +"]").removeClass("fillVisible");
	}
	
	$(".clickSound")[0].play();
});	

//Show justifications (diorthwmeno gia na ftiaxnei keno image)
$(document).on("click", "[data-justification]", function () {
	
	var inp=$(this);
	$(".highlightActive").removeClass("highlightActive");
	$(".justSound").html("");	
	$(".keyMask").html("");
	$(".txtImgMask").removeAttr("style");
	if(!inp.hasClass("justActive")){
		
		$(".justActive").removeClass("justActive");		
		$(this).addClass("justActive");
		
		if(!$(this).attr("data-justext") && !$(this).attr("data-keyImg")){ //an den exei justification key, MONO Justifications

			$("[data-highlight='"+ $(this).attr("data-justification") +"']").addClass("highlightActive");
			$(".keyMask").html("");
			$(".keyMask").height(80);
			
			$(".justMask").fadeIn(0);
			$(".keyMask").fadeOut(0);
			var mintop=100000;
			$(".highlightActive").each( function( index2, value2 ) {	
			 
				if(mintop>parseFloat($(this).css("top"))){mintop=parseFloat($(this).css("top"))}
				if($(this).attr("data-justiphrase")){$(".justSound").append("<svg width='19px' height='15px' viewBox='0 0 19 15' data-justiphrase='"+ $(this).attr("data-justiphrase") +"' style='top:"+ (parseFloat($(this).css("top")) -5) +"px'>"+ justSound +"</svg>");}
			});	
			
			if(parseFloat($(".justMask img").height())<=740){		
				$(".justScroll").fadeOut(0);
			}
			else{
				$(".justScroll").fadeIn(0);	
				srl.Container=$(".justificationWrapper");
				srl.Handle=$(".justScrollHandle");		
				scrollTo(mintop-80);
			}
			
		}
		else{ //an exei justification keimeno i key image
			$(".justMask").fadeOut(0);
			$(".keyMask").fadeIn(0);
			$(".keyMask").html("");
			$(".keyMask").height(80);
			
			if(!$(this).attr("data-keyImg")){ //an exei justification keimeno kai den exei justification othoni (key image)
				$(".keyMask").css("height","unset");
				$(".keyMask").html($(this).attr("data-justext")+"<img class='txtImgMask'>");
				if($(".keyMask").height()>740){var imgTxtHeight = $(".keyMask").height();}
				$(".txtImgMask").height(imgTxtHeight);
				$(".keyMaskBig").removeClass("keyMaskBig");

				//console.log(parseInt($(".keyMask").children("div").last().position().top)+$(".keyMask").children("div").last().height()+40);
				//console.log(parseInt($(".keyMask").height())+80);
				//console.log($(".keyMask img").height());
				var mintop3=0;

				if($(".keyMask").height() <= 740){
					console.log($(".keyMask img").height());
					console.log("lala");
					$(".justScroll").fadeOut(0);
					$(".txtImgMask").height(740);
					$(".keyMask").css("height","100%");
				}
				else{
					console.log("asfa");
					$(".keyMask").css("height","auto");
					$(".justScroll").fadeIn(0);	
					srl.Container=$(".justificationWrapper");
					srl.Handle=$(".justScrollHandle");			
					scrollToTxt(mintop3);
				}
			}
			else{ //an exei justification keimeno kai justification othoni (key image)
				$(".keyMaskBig").removeClass("keyMaskBig");
				$(".keyMask").addClass("keyMaskBig").html("<img src='../Images/Frames/" + $(this).attr("data-keyImg") + ".jpg'/>");
				//$(".keyMask").html("<img style='position:absolute;top:260px;left:0;z-index:-1;' src='../Images/Frames/" + $(this).attr("data-keyImg") + ".jpg'/>"+$(this).attr("data-justext"));
				//$(".keyMask").css("padding-top","0");
				console.log($(this).attr("data-keyImg"));
				var mintop2=0;
				$(".keyMask").css("height","unset");
				if(parseFloat($(".keyMask").height())<=740){		
					$(".justScroll").fadeOut(0);
				}
				else{
					$(".justScroll").fadeIn(0);	
					srl.Container=$(".justificationWrapper");
					srl.Handle=$(".justScrollHandle");		
					scrollTo(mintop2);
				}
			}
		}
		$(".justificationWrapper").fadeIn(0);
		$(".justHide").addClass("justDisabled justRemovePhrases");
	}
	else{	
		$(".highlightActive").removeClass("highlightActive");	
		$(".justActive").removeClass("justActive");
		$(".justHide").removeClass("justDisabled justRemovePhrases");
		if($(this).attr("data-justext")){$(".justHide").removeClass("justDisabled");}		
	}
});	







//Play justification sound
$(document).on("click", ".justSound [data-justiphrase]:not(.justiActive)", function () {
	
	$('audio').each(function () {
		 try{this.pause();this.currentTime = 0;}catch(err){}
	});
	try{clearInterval(justiInterval);}
	catch(err){}	
	try{$(".justiActive")[0].classList.remove("justiActive");}catch(err){}
	$(this)[0].classList.add("justiActive");	
		
	
	soundCurrent=$(this).attr("data-justiphrase")*2-1;
	
	$(".justificationWrapper audio")[0].currentTime=Frame[currentFrame].JustiPhrases[soundCurrent-1];
	
	$(".justificationWrapper audio").attr("data-end",Frame[currentFrame].JustiPhrases[soundCurrent]);
	
	$(".justificationWrapper audio")[0].play();
	clearSound();
	justiInterval=setInterval(justiPhrases,20);
	
});

//Stop justification sound
$(document).on("click", "[data-justiphrase].justiActive", function () {
	clearJustiSound();
});

//Interactive, choice click trigger
$(document).on("click", ".choice", function () {
	$("[data-keyshow]").attr("data-disabled","true");
	$(".interactiveCorrect,.interactiveWrong").fadeOut(0);	
	$(".intWrong,.intCorrect").removeClass("intWrong intCorrect");

	$("[data-multiplegroup='"+ $(this).attr("data-multiplegroup") +"']").removeClass("selected");	
	$(this).addClass("selected");
	if($("[data-multiplegroup].selected").length==$("[data-multiplecorrect]").length){
		$(".interactiveCheck").attr("class","interactiveCheck interactiveEnabled");		
		}	
});







//Show split screen
$(document).on("click", ".referenceBtn:not([data-disabled])", function (e) {
	$(".justHide").toggleClass("justDisabled");
	$(".highlightActive").removeClass("highlightActive");		
	$(".justActive").removeClass("justActive");
	$(".justHide").removeClass("justRemovePhrases");
	$(".keyMask").fadeOut(0);
	$(".justMask").fadeIn(0);
	$(".justSound").html("");
	$(".keyMask").html("");
	if(parseFloat($(".justMask img").height())<=740){		
		$(".justScroll").fadeOut(0);		
	}
	else{
		$(".justScroll").fadeIn(0);
		$(".justScroll").fadeIn(0);	
		srl.Container=$(".justificationWrapper");
		srl.Handle=$(".justScrollHandle");		
		scrollTo(0);
	}
});	

	
//Show-hide answers	
$(document).on("click", ".showAnswers:not([data-disabled])", function (e) {	
	var flag=0;
	if(($(".fill").length+$(".line").length)-$(".fill .txtmc").length==$(".fillVisible").length+$(".lineVisible").length-$(".fillVisible .txtmc").length){flag=1;}	
	$(".fill").each( function (index, value) {		
		if($(this).find(".txtmc").length==0){$(this).addClass("fillVisible")}
	});	
	$(".line").addClass("lineVisible");
	$(this).attr("class","showAnswers hideAnswers");
	if(flag==1){$(".lineVisible").removeClass("lineVisible");
	$(".fill").each( function (index, value) {		
		if($(this).find(".txtmc").length==0){$(this).removeClass("fillVisible")}
	});	
	$(this).attr("class","showAnswers");}
});	




//Show-hide text button
$(document).on("click", ".txtmcBtn:not([data-disabled])", function (e) {
	if($(".fillVisible .txtmc").length==0){
			$(".phraseActive").fadeIn(0);
			$(".txtmc").parent().addClass("fillVisible").css("z-index","2");
	}
	else{
		$(".phraseActive").fadeOut(0);
		$(".txtmc").parent().removeClass("fillVisible").css("z-index","60");
		if(Frame[currentFrame].StaticImage){
			$(".backgroundImage").attr("src","../Images/Frames/"+ Frame[currentFrame].Image +".jpg")
		}

	}

	if(Frame[currentFrame].StaticImage){	
		if($(".staticImage").length==0){
			$(".backgroundImage").attr("src","../Images/Frames/"+ Frame[currentFrame].StaticImage +".jpg").addClass("staticImage")
			}
		else{
			$(".backgroundImage").attr("src","../Images/Frames/"+ Frame[currentFrame].Image +".jpg").removeClass("staticImage");
			$(".phraseActive").fadeOut(0);
			}	
	}


	this.classList.toggle('textEnabled');

});





//Sticker on hover
$(document).on("mouseenter touchstart", "[data-sticker]", function () {
	$("[data-sticker='"+ $(this).attr("data-sticker") +"']").addClass("hovered");		
});

//Sticker on hover out
$(document).on("mouseleave touchend", "[data-sticker]", function () {
	   $(".hovered").removeClass("hovered");
});



//Mouse down styles
$(document).on("mousedown", "[data-keyshow]:not([data-disabled]) .justKeyT,.saveTool,[data-video],.portalCor,[data-type],[data-game],[data-extramodule]>span,.modulesExtraSub>span,.secondBackbtn,.secondBackbtn,.secondBackbtn2,.zoomSpreadbtn,.drop-Curtainbtn,.spreadHomeBtn,.zoomOutSpreadbtn,.toolsWrapper>svg,.justmaskClose,[data-justification],[data-sticker]:not(.disabled-icon),.homeBtn.mainActive,.exitBtn.mainActive,[data-frame]:not([data-disabled]),.mainGroupLeft svg:not([data-disabled],.alwaysDisabled),.mainGroupRight svg:not([data-disabled]),.audioBtn svg,.videoPlayBtn svg,.stopBtn svg,.videoPause ~ .videostopBtn svg,.closeVideo,.interactiveShow,.interactiveReset,.videoExit", function (e) {
	try{$(".pressed")[0].classList.remove("pressed");}catch(err){}
	$(this)[0].classList.add("pressed");
	$(".clickSound")[0].play();
});

//Hover styles
$(document).on("mouseenter touchstart", "[data-keyshow]:not([data-disabled]) .justKeyT,.saveTool,.portalCor,[data-video],[data-game],[data-extramodule]>span,.modulesExtraSub>span,[data-type]:not([data-disabled]),.secondBackbtn,.secondBackbtn2,.zoomSpreadbtn,.drop-Curtainbtn,.spreadHomeBtn,.zoomOutSpreadbtn,.toolsWrapper>svg,.justmaskClose,[data-justification],[data-sticker]:not(.disabled-icon),.homeBtn.mainActive,.exitBtn.mainActive,[data-frame]:not([data-disabled]),.mainGroupLeft svg:not([data-disabled]),.mainGroupRight svg:not([data-disabled]),.audioBtn svg,.videoPlayBtn svg,.stopBtn svg,.videoPause ~ .videostopBtn svg,.closeVideo,.interactiveShow,.interactiveReset,.videoExit", function (e) {
	try{$(".pressed")[0].classList.remove("pressed");}catch(err){}
	$(this)[0].classList.add("pressed");
	
});

//Mouse up reset 
$(document).on("mouseup", function () {	
	
	try{$(".pressed")[0].classList.remove("pressed");}catch(err){}	
});

//Hover out reset
$(document).on("mouseleave touchend", "[data-keyshow]:not([data-disabled]) .justKeyT,.saveTool,[data-video],[data-game],[data-extramodule]>span,.modulesExtraSub>span,.secondBackbtn,.secondBackbtn2,.zoomSpreadbtn,.drop-Curtainbtn,.spreadHomeBtn,.zoomOutSpreadbtn,.toolsWrapper>svg,.justmaskClose,.secondButton,[data-extramodule]>span,.modulesExtraSub>span,[data-correlation],[data-justification],[data-sticker]:not(.disabled-icon),.homeBtn.mainActive,.exitBtn.mainActive,[data-frame]:not([data-disabled]),.mainGroupLeft svg:not([data-disabled]),.mainGroupRight svg:not([data-disabled]),.audioBtn svg,.videoPlayBtn svg,.stopBtn svg,.videoPause ~ .videostopBtn svg,.closeVideo,.interactiveShow,.interactiveReset,.videoExit", function (e) {
	
	try{$(".pressed")[0].classList.remove("pressed");}catch(err){}
	
});


//Return to Main menu
$(document).on("click", ".homeBtn", function () {
	setTimeout(function(){window.location.href = "../MainMenu.html";}, 200);		
});	

//new-buttons
$(document).on("click", ".spreadHomeBtn", function () {
	setTimeout(function(){window.location.href = "../MainMenu.html";}, 200);		
});	


$('.alwaysDisabled').prop('disabled', true);

//Save sticker
$(document).on("click", ".saveTool,.toolX", function (e) {
	
	try{
	var inp="";
	
	$(".textTool").each(function( index, value ) {
		inp+=$(".textTool")[index].outerHTML;			
	});
	
	
	var root=JSON.parse(localStorage.getItem("project"));
	var flag=-1;
	$.each(root.Projects, function( index, value ) {
		if(value.Project==projectName){
			var sFlag=-1;
			
			if(value.save){
				$.each(value.save, function( index2, value2 ) {
					if(value2.id==Frame[currentFrame].id&&value2.mode==Infos.Type){sFlag=index2;
						root.Projects[index].save[index2].tool=inp;
						return false;
					}
					
					
				});
					if(sFlag==-1){ root.Projects[index].save.push({"id":Frame[currentFrame].id,"tool":inp,"mode":Infos.Type});}		
				
			}
			else{
				root.Projects[index].save=[{"id":Frame[currentFrame].id,"tool":inp,"mode":Infos.Type}];
				}
				
				return false;
			}		
	}); 
	localStorage.setItem("project", JSON.stringify(root));
	}
	
	catch(err){}


});



//Load sticker
$(document).on("click", ".toolsWrapper>svg", function () {	
	
	try{
	var root=JSON.parse(localStorage.getItem("project"));
	var flag=-1;
	if($(".textLoaded").length==0){
	$.each(root.Projects, function( index, value ) {
		if(value.Project==projectName){
			var sFlag=-1;
			
			if(value.save){
				$.each(value.save, function( index2, value2 ) {
					if(value2.id==Frame[currentFrame].id&&value2.mode==Infos.Type){
						
						$("#sketch").append(value2.tool);
					}
					
					
				});
						
				
			}
			
				
				return false;
			}		
	}); }
	$(".textTool").addClass("textLoaded");
	
	localStorage.setItem("project", JSON.stringify(root));}
	catch(err){tlTip=1;}
});



//Mouse wheel Scroll
$(document).on( 'mousewheel DOMMouseScroll', '.container,.justificationWrapper,.scroll,.justScroll', function(e){
		var delta;var inp;var inpScroll;
		 if (e.originalEvent) {
			if (e.originalEvent.wheelDelta) delta = e.originalEvent.wheelDelta / -40;
			if (e.originalEvent.deltaY) delta = e.originalEvent.deltaY;
			if (e.originalEvent.detail) delta = e.originalEvent.detail;
		}
		delta = (delta<0 ? -1 : 1);
			
		if($(this).hasClass("container")||$(this).hasClass("scroll")){			
			
			srl.Container=$(".container");
			srl.Handle=$(".scrollHandle");			
			}
		else{
			srl.Container=$(".justificationWrapper");
			srl.Handle=$(".justScrollHandle");
			}
		
		scrollTo(srl.Container.scrollTop() + 100 * delta);				   
});


//Scrollbars Scroll
$(document).on("mousedown touchstart", ".scroll,.justScroll", function (e) {	
	if($(this).hasClass("container")||$(this).hasClass("scroll")){			
		srl.Container=$(".container");
		srl.Handle=$(".scrollHandle");
		scrollY=$(".container>img").height()-$(".container").height();	
		}
	else{
		srl.Container=$(".justificationWrapper");
		srl.Handle=$(".justScrollHandle");
		scrollY=$(".justificationWrapper img").height()-$(".justificationWrapper").height();
		}	
	$(document).on("mousemove touchmove",scrollMove);	
	$(document).on("mouseup touchend",scrollUp);	
});

function scrollMove(e)
{		
	var top=coords(e,srl.Handle.parent()).top-10;
	
	scrollTo(scrollY*top/115);	
	
}	

function scrollUp(e)
{	
	e.preventDefault;
	var top=coords(e,srl.Handle.parent()).top-10;	
	scrollTo(scrollY*top/115);
    $(document).off("mousemove touchmove",scrollMove);	
	$(document).off("mouseup touchend",scrollUp);	
}


//Scroll to Position
function scrollTo(position){	
	if(srl.Container.find("img").last().height()>740){
		if(position<0){
			position=0;
		}
		else if(position>srl.Container.find("img").last().height()-740){
			position=srl.Container.find("img").last().height()-740;
		}
		
		srl.Container.scrollTop( position);
		srl.Handle.css("top",115*position/(srl.Container.find("img").last().height()-740)+"px");		
	}	
}

function scrollToTxt(position2){	
	if(srl.Container.find(".keyMask").height()+80>740){
		if(position2<0){
			position2=0;
		}
		else if(position2>srl.Container.find(".keyMask").height()+80-740){
			position2=srl.Container.find(".keyMask").height()+80-740;
			
		}
		srl.Container.find(".keyMask").scrollTop( position2);
		srl.Handle.css("top",115*position2/(srl.Container.find(".keyMask").height()+80-740)+"px");		
	}	
}



//Keyboard keys next-previous (Tools scroll added)
$(document).keyup(function(e) {
	if(e.which == 37 || e.which == 39 || e.which == 38 || e.which == 40) {
		var frame;var flag=1;	
		clearSound();
		if((e.which == 39&& $("[data-frame='next'][data-disabled='true']").length==0)||(e.which == 37&& $("[data-frame='previous'][data-disabled='true']").length==0))
		{
			switch(e.which) {
			case 37:
				if(Frame[currentFrame].Lesson!=Frame[currentFrame-1].Lesson){

					$.each(Frame, function( index, value ) {
						try{
						$.each(value.Lessons, function( index2, value2 ) {					
							if(value2==Frame[currentFrame-1].Lesson){$(".returnSallon").attr("data-disabled","true");InitialSalon(index);flag=0;return false;}
						});
						}catch(err){}
						if(flag==0){return false;}
					});				
					}
				else{InitialSalon(currentFrame-1);}			
				break;
			case 39:
				if(Frame[currentFrame].Lesson!=Frame[currentFrame+1].Lesson){
					$.each(Frame, function( index, value ) {
						try{
						$.each(value.Lessons, function( index2, value2 ) {
							if(value2==Frame[currentFrame+1].Lesson){
								$(".returnSallon").attr("data-disabled","true");
								InitialSalon(index);flag=0;return false;}
						});
						}catch(err){}
						if(flag==0){return false;}
					});	
					
					}
				else{InitialSalon(currentFrame+1);}		
				break;
			default:
				InitialSalon($(this).attr("data-frame"));
			}	
		}

		if(scrollEnd > 740){
			switch(e.which) {
				
				case 40:
					if ((scrollCounter+740) < scrollEnd){
						if (scrollCounter+740 > scrollEnd){scrollCounter = scrollCounter + (scrollCounter+740-scrollEnd);}
						else{scrollCounter = scrollCounter + 240;}
						
						$(".container").animate({scrollTop:(scrollCounter)}, 600);

						console.log(scrollCounter+740);
					}
					break;
					
				case 38:
					if(scrollCounter >= 0){
						if (scrollCounter < 240){scrollCounter = 0;}
						else{scrollCounter = scrollCounter - 240;}
						
						$(".container").animate({scrollTop:(scrollCounter)}, 600);
					}
					break;
			}
		}
		
	}
});







//Sound Phrases, soundbar and autoscrolling function
function soundPhrases(){
var currentTime=$(".extraInfo audio")[0].currentTime;	
if(Frame[currentFrame].SoundPhrases && irrV==0){	
	if(soundCurrent%2==1){
		if(currentTime>=Frame[currentFrame].SoundPhrases[soundCurrent-1]){		
		if($(".txtmcBtn[data-disabled]").length==1||$(".txtmcBtn.textEnabled").length==1){
			$("[data-phrase="+  parseInt((soundCurrent+1)/2) +"]").addClass("phraseActive");
			if($(".phraseActive").closest(".justificationWrapper").length>0){
				srl.Container=$(".justificationWrapper");
				srl.Handle=$(".justScrollHandle")
			}else{
			srl.Container=$(".container");
			srl.Handle=$(".scrollHandle");
			}
			var top=parseFloat($(".phraseActive").css("top"));
			var height=parseFloat($(".phraseActive").css("height"));			 
			 if( top + height > srl.Container.scrollTop() + 720 || top < srl.Container.scrollTop())
				 {	
					top-=40;
					srl.Container.animate({ scrollTop: top }, 100);
					scrollTo(top);		
					
				 }	
		}
			soundCurrent++;
			}
		}
	else{
		if(currentTime>=Frame[currentFrame].SoundPhrases[soundCurrent-1]){		
			$(".phraseActive").removeClass("phraseActive");
			soundCurrent++;		
			}
	} 
} 

if($("[data-txtmc]:not(.fillVisible)").length>0){
	$(".phraseActive").removeClass("phraseActive");
}

if($(".extraInfo audio").attr("data-end")<=$(".extraInfo audio")[0].currentTime){
	clearSound();	
}
else{
	var start=parseFloat($(".extraInfo audio").attr("data-start"));
	var end=parseFloat($(".extraInfo audio").attr("data-end"));
	var soundWidth = (end-start);	
	var soundBarWidth=$(".soundBar").width();
	var percentage=(currentTime-start)/soundWidth;
	if(percentage>1){percentage=1;}
	var bWidth=percentage*soundBarWidth;
	$(".soundBar .barRed").css("width",bWidth+"px");
	$(".barRedBall").css("left",(bWidth-7)+"px");
	

	
	var tr = minTwoDigits(Math.floor(((currentTime-start) + 1) / 60)) + ":" + minTwoDigits(Math.ceil((currentTime-start)) % 60);
	$(".soundTimer").html(tr);	
	
		$('.barRedBall').each(function() {
		var left = parseFloat($(this).css("left").replace("px"));
		  if (left > 255) {
			$(this).css("left","255px");
		  }
		});
}

}




//Video Interval, videobar and subs
function videoBar(){
var percentage=$(".videoContainer video")[0].currentTime/$(".videoContainer video")[0].duration;
var phrTime=$(".videoContainer video")[0].currentTime*1000;
if(percentage>1){percentage=1;}
var soundBarWidth=$(".videoBar").width();
var bWidth=percentage*soundBarWidth;
$(".videoBar .videobarRed").css("width",bWidth+"px");
$(".videoBar .barRed").css("width",bWidth+"px");
$(".barRedBall").css("left",(bWidth-7)+"px");

var tr = minTwoDigits(Math.floor(($(".videoContainer video")[0].currentTime + 1) / 60)) + ":" + minTwoDigits(Math.ceil($(".videoContainer video")[0].currentTime) % 60);
$(".videoTimer").html(tr);	

	$('.barRedBall').each(function() {
	var left = parseFloat($(this).css("left").replace("px"));
	  if (left > 255) {
		$(this).css("left","255px");
	  }
	});
if(subs){
	try{if(phrTime>=subs[videoCurrent-1].Start){
			$(".subsSpan").html(subs[videoCurrent-1].Text);
		}	
	}catch(err){}

	try{if(phrTime>=subs[videoCurrent-1].End){
			$(".subsSpan").html("");
			videoCurrent++;		
		}
	}catch(err){}
}	
}



	

function minTwoDigits(n) {
		return (n < 10 ? '0' : '') + n;
	}



//Justifications inerval
function justiPhrases(){
var currentTime=$(".justificationWrapper audio")[0].currentTime*1000;	
var intervalFlag=0;

 if(currentTime>=$("[data-end]").attr("data-end")*1000){
	clearJustiSound();
	intervalFlag=1;} 
}


//Sound button (fixed audio btn)
$(document).on("click", "[data-alstart]", function () {	
	
	
	if(!$(this).hasClass("soundSelected")){
		clearSound();
		clearJustiSound();
		
		$(".extraInfo audio")[0].currentTime=$(this).attr("data-alstart");
		$(this).addClass("soundSelected");
		$(".extraInfo audio").attr("data-start",$(this).attr("data-alstart"));
		$(".extraInfo audio").attr("data-end",$(this).attr("data-alend"));
		
		$(".playBtnWrapper").addClass("audioPause");
		$(".extraInfo audio")[0].play();
		
		$.each(Frame[currentFrame].SoundPhrases, function(index, value){
			if( $(".extraInfo audio")[0].currentTime <= value ){		
				//console.log(value, index/2, index*2-1, index);
				soundCurrent = index+1;
				$("[data-phrase="+  parseInt(index/2+1) +"]").addClass("phraseActive");
				if($(".phraseActive").closest(".justificationWrapper").length>0){
					srl.Container=$(".justificationWrapper");
					srl.Handle=$(".justScrollHandle")
				}else{
					srl.Container=$(".container");
					srl.Handle=$(".scrollHandle");
				}
				var top=parseFloat($(".phraseActive").css("top"));
				var height=parseFloat($(".phraseActive").css("height"));			 
				if( top + height > srl.Container.scrollTop() + 720 || top < srl.Container.scrollTop()){	
					top-=40;
					srl.Container.animate({ scrollTop: top }, 0);
					scrollTo(top);		
				 }
				
				return false;
			}
		});
		
		soundInterval=setInterval(soundPhrases,20);
		
	}
	else{
		clearSound();
	}
	
});



//Clear all sound variables and reset
function clearSound(){
	try{
	clearInterval(soundInterval);
	}
	catch(err){}
	$(".extraInfo audio").removeAttr("data-start").removeAttr("data-end")
	$(".extraInfo audio")[0].pause();
	try{$(".extraInfo audio")[0].currentTime=0;}catch(err){}
	soundCurrent=1;
	$(".audioPause").removeClass("audioPause");
	$(".phraseActive").removeClass("phraseActive");
	$(".soundTimer").html("00:00");
	$(".barRed").css("width","0px");
	$(".barRedBall").css("left","-7px");
	$(".soundSelected").removeClass("soundSelected");	
}

//Clear video variables and reset
function clearVideo(){
try{
clearInterval(videoInterval);
}
	catch(err){}
$(".videoContainer video")[0].pause();
try{$(".videoContainer video")[0].currentTime=0;}catch(err){}
$(".videoPlayBtn").addClass("videoPause");
$(".videoTimer").html("00:00");
$(".videobarRed").css("width","0px");
videoCurrent=1;	
	
}


//Clear all sound variables and reset
function clearJustiSound(){
try{
clearInterval(justiInterval);
}
catch(err){}
$(".justificationWrapper audio")[0].pause();
try{$(".justificationWrapper audio")[0].currentTime=0;}catch(err){}
$(".justificationWrapper audio").removeAttr("data-end");
try{$(".justiActive").attr("class",$(".justiActive").attr("class").replace("justiActive",""));}catch(err){}	
	
	
}



//On windows resize apply scaling
$(window).resize(function() {
	


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
		window.scale=scale;
}

else{
$('.IWB').css({'-webkit-transform': 'scale(1)'});
	$('.IWB').css({'-ms-transform': 'scale(1)'});
	$('.IWB').css({'transform': 'scale(1)'});	
$('.IWB').css({'left': ($(window).width()-1280)/2+ 'px'});
$('.IWB').css({'top': ($(window).height()-960)/2+ 'px'});
}
   
});



});