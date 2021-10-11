var scrollY;
var scale=1;
var srl={};
var svg='<svg width="50px" height="50px" viewBox="0 -12.5 50 50" class="soundPlay "> <circle fill="rgba(0,0,0,0)" cx="25" cy="12.5" r="24.5"></circle> <g fill="#231F20"> <path d="M27.896,18.119c-0.271,0-0.542-0.117-0.731-0.342c-0.334-0.404-0.281-1.004,0.123-1.34 c1.352-1.131,2.125-2.76,2.125-4.479c0-1.577-0.618-3.059-1.744-4.17c-0.373-0.37-0.377-0.973-0.007-1.346 s0.972-0.378,1.346-0.007c1.489,1.472,2.308,3.433,2.308,5.522c0,2.284-1.022,4.448-2.809,5.938 C28.327,18.047,28.11,18.119,27.896,18.119z"></path>  <path d="M31.642,21.861c-0.261,0-0.52-0.105-0.707-0.313c-0.349-0.389-0.319-0.99,0.07-1.344 c2.337-2.111,3.676-5.119,3.676-8.247c0-2.986-1.169-5.79-3.29-7.892c-0.371-0.374-0.376-0.975-0.007-1.348 c0.374-0.368,0.973-0.378,1.35-0.006c2.482,2.463,3.85,5.748,3.85,9.245c0,3.665-1.568,7.184-4.305,9.659 C32.097,21.781,31.87,21.861,31.642,21.861z"></path>  <path d="M36.02,26.242c-0.254,0-0.507-0.1-0.694-0.301c-0.359-0.385-0.337-0.986,0.045-1.346 c3.55-3.32,5.506-7.809,5.506-12.637c0-4.64-1.813-9-5.105-12.276c-0.373-0.372-0.373-0.975-0.004-1.346 c0.372-0.375,0.973-0.372,1.347-0.004c3.653,3.638,5.666,8.478,5.666,13.626c0,5.362-2.17,10.34-6.108,14.028 C36.486,26.158,36.251,26.242,36.02,26.242z"></path>  <path d="M22.996,2.201c0-1.046-0.605-1.296-1.345-0.557l-4.65,4.651c-0.74,0.738-2.203,1.344-3.248,1.344H9.681 c-1.047,0-1.901,0.856-1.901,1.904v5.705c0,1.047,0.854,1.902,1.901,1.902h3.85c1.048,0,2.508,0.605,3.248,1.346l4.873,4.873 c0.739,0.738,1.345,0.488,1.345-0.559V2.201z"></path> </g> </svg>';

function coords(e,rel){
	var IWB= $(".IWB").offset();
	var click={};
	var box={};	
	var str={};
	try{
		click.top=e.originalEvent.changedTouches[0].clientY;
		click.left=e.originalEvent.changedTouches[0].clientX;
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
console.log("Start: "+(performance.now()/1000).toFixed(2)+" seconds");	


$(document).ready(function () {
	
	//intro fix
 	if(typeof year === 'undefined' || year === null){window.location.href = "../Intro.html";}
	var today = new Date();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	if(yyyy>year||(yyyy==year&&mm>12)){
		window.location.href = "../Intro.html";
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
	
function scrollTo(position){
		
		if(position<0){
			position=0;
		}
		else if(position>$(".glossaryWordWrapper").height()-760){
			position=$(".glossaryWordWrapper").height()-760;
		} 
		
		$(".glossaryWordScrollWrapper").scrollTop(position);
		$(".wlScrollHandle").css("top",115*position/($(".glossaryWordWrapper").height()-760)+"px");		
	
}

function scrollToCont(position){
		
		if(position<0){
			position=0;
		}
		else if(position>$(".glossaryExtraCont").height()-690){
			position=$(".glossaryExtraCont").height()-690;
		} 
		
		$(".glossaryExtra").scrollTop(position);
		$(".wlScrollHandleCont").css("top",115*position/($(".glossaryExtraCont").height()-690)+"px");		
	
}
	document.fonts.ready.then(function () {
		document.getElementsByClassName("glossaryWords")[0].style.maxHeight = document.getElementsByClassName("glossaryWords")[0].scrollHeight + "px";
	});
	

	
    AllWords2 = [];
    Modules = [];
    Lessons = [];
	var flagLesson=null;
	
    var prevMod = -1;
    var prevLes = -1;
    

    if (AllWords[0].GreekDef != null) { $("<div class=\"greekDef\"><div class=\"showgreekDef\">Show Greek definition</div><div class='glossaryExample'></div></div>").insertAfter(".glexName .glossaryDefinition"); }
	if (AllWords[0].Opposite != null) { $("<div class=\"Opposite\"><div>opposite:</div><div></div></div>").insertAfter(".glexExample"); }
    if (AllWords[0].Deriv != null) { $("<div class=\"Deriv\"><div></div></div>").insertAfter(".glexExample"); }


    $.each(AllWords, function (index, value) {
        value.Num = index;
        try { value.Example = value.Example.replace("A:", "<br/><b>A:</b>"); } catch (err) { }
        try { value.Example = value.Example.replace("B:", "<br/><b>B:</b>"); } catch (err) { }
        
		value.Title=value.Mod;
		//if(value.Mod=="0"){value.Title="Classroom language";}
		if(value.Mod=="13"){value.Title="Task Modules 1-2";}
		if(value.Mod=="14"){value.Title="Task Modules 3-4";}
		if(value.Mod=="15"){value.Title="Task Modules 5-6";}
		if(value.Mod=="16"){value.Title="Task Modules 7-8";}
		if(value.Mod=="17"){value.Title="Task Modules 9-10";}
		if(value.Mod=="18"){value.Title="Task Modules 11-12";}
		try {if (value.Example.substr(0, 5) == "<br/>") { value.Example = value.Example.substr(5);} }catch (err) { }
		
	
        var glFlag = -1;
        var glFlag2 = -1;
        $.each(Modules, function (index2, value2) {
            if (value2.module == value.Mod) { glFlag = index2; }

        });
        if (glFlag != -1) {
            if (prevLes != value.Lesson) { Modules[glFlag].lesson.push(value.Lesson); prevLes = value.Lesson; }
        }
        if (glFlag == -1) {
            var obj = { module: value.Mod.toString(), lesson: [value.Lesson], title: [value.Title] }
            Modules.push(obj);
            prevMod = value.Mod;
            prevLes = value.Lesson;
        }
        $.each(Lessons, function (index2, value2) {
            if (value2.lesson == value.Lesson) { glFlag2 = index2 }
        });

        if (glFlag2 == -1) {
            var obj = { lesson: value.Lesson }
            Lessons.push(obj);
        }


    });
	
	
	Modules.sort(function(a, b){ 
	
	return parseInt(a.module)-parseInt(b.module)});

    $.each(Modules, function (index, value) {

        var unique = [];
        $.each(value.lesson, function (index2, value2) {
            if ($.inArray(value2, unique) === -1) unique.push(value2);
        });



        Modules[index].lesson = unique;

    });

    console.log("Arrays constructed: "+(performance.now()/1000).toFixed(2)+" seconds");	



    

    AllWords2 = AllWords.slice();
    AllWords2 = sortArray(AllWords2);
	console.log("Arrays sorted: "+(performance.now()/1000).toFixed(2)+" seconds");	

    $.each(AllWords2, function (index, value) {
		
			printWord(value);
		});
	console.log("Words printed: "+(performance.now()/1000).toFixed(2)+" seconds");		
	try{
	if(JSON.parse(window.name)){	
	var cor=JSON.parse(window.name);
	console.log(cor);
	if(cor.GlossaryMain){
		var modIndex=0;
		$('.wordSelected').removeClass("wordSelected");
        $(".wbyModule").addClass("wordSelected");
		$('.glossaryAlpha').fadeOut(0);		
        $.each(Modules, function (index, value) {
			
			$('.glossaryModules .glossaryModsWrapper').append('<span class="selectMods" data-selectmod=' + index + '>' + value.title + '</span>'); 
			if(value.module==cor[1]){modIndex=index}
		});		
		$("[data-selectmod='"+ modIndex +"']").addClass("modSelected");		
		$.each(Modules[modIndex].lesson, function (index2, value2) {			
			$('.glossaryLessons .glossaryModsWrapper').append('<span class="selectMods" data-selectles=' + index2 + '>' + value2 + '</span>');
        });
		 sortLes();
		sortMods();
		$(".word:not([data-modid=" + $(".glossaryModules .modSelected").html() + "])").fadeOut(0);
		setTimeout(function(){$('.glossaryModules,.glossaryLessons').fadeIn(0)}, 200);
        $('.glossaryExtra').fadeOut(0);
		$(".wlScrollHandle").css("top","0px");
		$(".glossaryWordScrollWrapper").scrollTop(0);
		if(parseFloat($(".glossaryWordWrapper").height())<=760){$(".wlScroll").fadeOut(0);}
		else{$(".wlScroll").fadeIn(0);}
		
		$(".wlScrollHandleCont").css("top","0px");		
		$(".glossaryExtra").scrollTop(0);
		if(parseFloat($(".glossaryExtraCont").height())<=690){$(".wlScrollCont").fadeOut(0);}
		else{$(".wlScrollCont").fadeIn(0);}
	}
	
	if(cor.GlossaryModule){
		var modIndex=0;
		$('.wordSelected').removeClass("wordSelected");
        $(".wbyModule").addClass("wordSelected");
		$('.glossaryAlpha').fadeOut(0);
		
		
        $.each(Modules, function (index, value) {
			
			$('.glossaryModules .glossaryModsWrapper').append('<span class="selectMods" data-selectmod=' + (value.module-1) + '>' + value.title + '</span>'); 
			if((value.module-1)==(cor.GlossaryModule-1)){modIndex=(value.module-1)}
		});
		
		$("[data-selectmod='"+ modIndex +"']").addClass("modSelected");
		
		$.each(Modules[modIndex].lesson, function (index2, value2) {
			if (value2.toUpperCase() == cor.GlossaryLesson){flagLesson=value2.toUpperCase();}
			try{if(value2.toUpperCase()==cor.GlossaryLesson.toUpperCase()){$('.glossaryLessons .glossaryModsWrapper').append('<span class="selectMods modSelected" data-selectles=' + index2 + '>' + value2 + '</span>');}
			else{ $('.glossaryLessons .glossaryModsWrapper').append('<span class="selectMods" data-selectles=' + index2 + '>' + value2 + '</span>');}
           }catch(err){$('.glossaryLessons .glossaryModsWrapper').append('<span class="selectMods" data-selectles=' + index2 + '>' + value2 + '</span>');}
        });
		 sortLes();
		sortMods();
		$(".word:not([data-modid=" + (modIndex+1) + "])").fadeOut(0);
		if(flagLesson != null){$(".word:not([data-lesid=\"" + $(".glossaryLessons .modSelected").html() + "\"])").fadeOut(0);}
		setTimeout(function(){
			$('.glossaryModules,.glossaryLessons').fadeIn(0);
			
			document.getElementsByClassName("glossaryWords")[0].style.maxHeight = document.getElementsByClassName("glossaryWords")[0].scrollHeight + "px";
			document.getElementsByClassName("blockPanel")[0].style.display = "block";
			document.getElementsByClassName("glossaryWordInfos")[0].style.maxHeight = null;
			document.getElementsByClassName("glossaryArrows")[0].style.display = "none";
			$(".glossaryArrowDown").removeClass("glossaryArrowDownRed");
			$(".glossaryArrowUp").addClass("glossaryArrowUpRed");
			
			//$('.glossaryModules,.glossaryLessons').hide().fadeIn(0);
			$('.glossaryExtra').fadeOut(0);
			$(".wlScrollHandle").css("top","0px");
			$(".glossaryWordScrollWrapper").scrollTop(0);
			if(parseFloat($(".glossaryWordWrapper").height())<=760){$(".wlScroll").fadeOut(0);}
			else{$(".wlScroll").fadeIn(0);}
			
			$(".wlScrollHandleCont").css("top","0px");		
			$(".glossaryExtra").scrollTop(0);
			if(parseFloat($(".glossaryExtraCont").height())<=690){$(".wlScrollCont").fadeOut(0);}
			else{$(".wlScrollCont").fadeIn(0);}
		}, 200);
		
		
		
						
	}



	
	}	
}catch(err){}
window.name = null;
	
	
		 var img=0;
		
	
			
		
	
		
	
	
	
	
	
	


	
	
	
	
	
	
	


    $(document).on("click", "[data-wordid]", function () {
		var abbr="";
		if(AllWords[$(this).attr("data-wordid")].KindOf){abbr=AllWords[$(this).attr("data-wordid")].KindOf;}
		$(".vocListWrapper,.glossaryDefinition").html("");
        $(".glName").html(AllWords[$(this).attr("data-wordid")].Word + " <span>" + abbr + "</span>");
        $(".glossaryDefinition").html(AllWords[$(this).attr("data-wordid")].Definition);
        $(".glossaryExample").html(AllWords[$(this).attr("data-wordid")].Example);
		if(AllWords[$(this).attr("data-wordid")].Image){$(".vocListWrapper").html("<img src='../Images/Frames/"+AllWords[$(this).attr("data-wordid")].Image+".jpg' /><span class='helper'>");}
        $(".glossaryExtra").fadeIn(0);
        $(".wordSound source").attr("src", "../Audio/Companion/"+ AllWords[$(this).attr("data-wordid")].File + ".mp3");
        $(".wordSound")[0].load();
        if(AllWords[$(this).attr("data-wordid")].ExFile){$(".exampleSound source").attr("src", "../Audio/Companion/"+ AllWords[$(this).attr("data-wordid")].ExFile + ".mp3");}
        $(".exampleSound")[0].load();
        $(".wordselected").removeClass("wordselected");
		try{$(".glPlaying").attr("class",$(".glPlaying").attr("class").replace("glPlaying",""));}catch(err){}
        try { if (AllWords[$(this).attr("data-wordid")].GreekDef.length > 0) { $(".greekDef>div:last-child").html(AllWords[$(this).attr("data-wordid")].GreekDef).fadeOut(0); $(".greekDef").fadeIn(0);$(".showgreekDef").removeClass("hidegreekDef").html("Show Greek definition");; } else { $(".greekDef").fadeOut(0) } } catch (err) { $(".greekDef").fadeOut(0)}
        try { if (AllWords[$(this).attr("data-wordid")].Opposite.length > 0) { $(".Opposite>div:last-child").html(AllWords[$(this).attr("data-wordid")].Opposite);$(".Opposite").fadeIn(0) } else { $(".Opposite").fadeOut(0) } } catch (err) { $(".Opposite").fadeOut(0)}
	    try { if (AllWords[$(this).attr("data-wordid")].Deriv.length > 0) { $(".Deriv>div:last-child").html(AllWords[$(this).attr("data-wordid")].Deriv.replace("Der.:","")); $(".Deriv").fadeIn(0) } else { $(".Deriv").fadeOut(0) } } catch (err) { $(".Deriv").fadeOut(0)}

		if(AllWords[$(this).attr("data-wordid")].vocExample){
			$(".vocListWrapper").html("<span class='showExampleBtn' ' >Show example</span>");
			$(".exampleSound source").attr("src", "../Audio/"+ AllWords[$(this).attr("data-wordid")].ExFile+".mp3");
			$(".vocListWrapper").append("<div class='vocExWrapper'><span class=''>"+AllWords[$(this).attr("data-wordid")].Example+"</span>"+svg+"</div>");
			
			}
		
		$(this).addClass("wordselected");
		
		//$(".glossaryWordInfos .glossaryWordInfosTxt").html("Module " + $(this).attr("data-modid") + " - " + "Lesson " + $(this).attr("data-lesid") );
			
	    $('.wordSelected').removeClass("wordSelected");
        $(".wbyModule").addClass("wordSelected");
        $('.glossaryModsWrapper').html("");
		$('.glossaryAlpha').fadeOut(0);
		var inp=$(this);
		
        $.each(Modules, function (index, value) {
            if (value.module == inp.attr("data-modid")) {

				$(".glossaryWordInfos .glossaryWordInfosTxt").html(value.title + " - " + inp.attr("data-lesid") ); // suntomografia module - lesson

                $('.glossaryModules .glossaryModsWrapper').append('<span class="selectMods modSelected" data-selectmod=' + index + '>' + value.title + '</span>');
                $.each(value.lesson, function (index2, value2) {
					
                   if (value2 == inp.attr("data-lesid")) { $('.glossaryLessons .glossaryModsWrapper').append('<span class="selectMods modSelected" data-selectles=' + index2 + '>' + value2 + '</span>');}
				   else{$('.glossaryLessons .glossaryModsWrapper').append('<span class="selectMods" data-selectles=' + index2 + '>' + value2 + '</span>');}
                });
            }
            else { $('.glossaryModules .glossaryModsWrapper').append('<span class="selectMods" data-selectmod=' + index + '>' + value.title + '</span>'); }

        });       
		sortLes();
		sortMods();
        $('.glossaryModules,.glossaryLessons').fadeIn(0);
		
		document.getElementsByClassName("glossaryArrows")[0].style.display = "block";
		document.getElementsByClassName("glossaryWordInfos")[0].style.maxHeight = document.getElementsByClassName("glossaryWordInfos")[0].scrollHeight + "px";
		document.getElementsByClassName("blockPanel")[0].style.display = "none";
		document.getElementsByClassName("glossaryWords")[0].style.maxHeight = null;
		$(".glossaryArrowDown").removeClass("glossaryArrowDownRed");
		$(".glossaryArrowUp").addClass("glossaryArrowUpRed");
		
		$(".wlScrollHandleCont").css("top","0px");$(".glossaryExtra").scrollTop(0);
		if(parseFloat($(".glossaryExtraCont").height())<=690){$(".wlScrollCont").fadeOut(0);}
		else{$(".wlScrollCont").fadeIn(0);}
    });
	
$(document).on("click", ".homeBtn", function () {
	window.location.href = "../MainMenu.html";	
});	


$(document).on("click", ".glossaryArrowDown.glossaryArrowDownRed", function () {
	$(this).removeClass("glossaryArrowDownRed");
	$(".glossaryArrowUp").addClass("glossaryArrowUpRed");
	//document.getElementsByClassName("glossaryWordInfos")[0].style.display = "block";
	//console.log(document.getElementsByClassName("glossaryWordInfos")[0].classList);
	
	//var panel = document.getElementsByClassName("glossaryWordInfos")[0];
	document.getElementsByClassName("blockPanel")[0].style.display = "none";
	document.getElementsByClassName("glossaryWordInfos")[0].style.maxHeight = document.getElementsByClassName("glossaryWordInfos")[0].scrollHeight + "px";
	document.getElementsByClassName("glossaryWords")[0].style.maxHeight = null;
});	

$(document).on("click", ".glossaryArrowUp.glossaryArrowUpRed", function () {
	$(this).removeClass("glossaryArrowUpRed");
	$(".glossaryArrowDown").addClass("glossaryArrowDownRed");
	//document.getElementsByClassName("glossaryWordInfos")[0].style.display = "none";
	document.getElementsByClassName("blockPanel")[0].style.display = "block";
	document.getElementsByClassName("glossaryWordInfos")[0].style.maxHeight = null;
	document.getElementsByClassName("glossaryWords")[0].style.maxHeight = document.getElementsByClassName("glossaryWords")[0].scrollHeight + "px";
});


$(document).on("click", ".showExampleBtn", function () { 

$(".vocExWrapper").fadeToggle(0);
		 $(this).toggleClass("hideex");
		 if($(this).hasClass("hideex")){$(this).html("Hide example");}else{$(this).html("Show example");}

 });

$(document).on("click", ".showgreekDef", function () {        
		 $(".greekDef .glossaryExample").fadeToggle(0);
		 $(this).toggleClass("hidegreekDef");
		 if($(this).hasClass("hidegreekDef")){$(this).html("Hide Greek definition");}else{$(this).html("Show Greek definition");}
		 
		 
    });
	
	
	
    $(document).on("click", ".glossaryExtra .glSvg", function () {
        $('audio').each(function () {
             try{this.pause();
            this.currentTime = 0;}catch(err){}
        });
        $(".wordSound")[0].play();
		try{$(".glPlaying").attr("class",$(".glPlaying").attr("class").replace("glPlaying",""));}catch(err){}
		var cl="";try{ cl=$(this).attr("class").trim();}catch(err){}
		if(cl==undefined){$(this).attr("class","glPlaying");}else{$(this).attr("class",cl+" glPlaying");}
    });

    $(document).on("click", ".glexExample .glSvg,.vocListWrapper svg", function () {
       $('audio').each(function () {
             try{this.pause();
            this.currentTime = 0;}catch(err){}
        });
        $(".exampleSound")[0].play();
		try{$(".glPlaying").attr("class",$(".glPlaying").attr("class").replace("glPlaying",""));}catch(err){}
		var cl="";try{ cl=$(this).attr("class").trim();}catch(err){}
		if(cl==undefined){$(this).attr("class","glPlaying");}else{$(this).attr("class",cl+" glPlaying");}
    });

    $(document).on("click", ".glossaryMod[data-modid]", function () {
        $(".word").fadeOut(0);
        $(".glossaryLes[data-modid=" + $(this).attr("data-modid") + "]").fadeIn(0);
		$(".wlScrollHandle").css("top","0px");$(".glossaryWordScrollWrapper").scrollTop(0);
		if(parseFloat($(".glossaryWordWrapper").height())<=760){$(".wlScroll").fadeOut(0);}
		else{$(".wlScroll").fadeIn(0);}
    });

    $(document).on("click", ".glossaryLes[data-lesid]", function () {
        $(".word").fadeOut(0);
        $(".word:not[data-lesid=" + $(this).attr("data-lesid") + "]").fadeOut(0);
		$(".wlScrollHandle").css("top","0px");$(".glossaryWordScrollWrapper").scrollTop(0);
		if(parseFloat($(".glossaryWordWrapper").height())<=760){$(".wlScroll").fadeOut(0);}
		else{$(".wlScroll").fadeIn(0);}
    });
	
	$(document).on("click", ".glossaryLes[data-lesid]", function () {
        $(".word").fadeOut(0);
        $(".word:not[data-lesid=" + $(this).attr("data-lesid") + "]").fadeOut(0);
		$(".wlScrollHandle").css("top","0px");$(".glossaryWordScrollWrapper").scrollTop(0);
		if(parseFloat($(".glossaryWordWrapper").height())<=760){$(".wlScroll").fadeOut(0);}
		else{$(".wlScroll").fadeIn(0);}
    });

    $(document).on("click", ".vocExit", function () {
		var type="SB";
		var modRedirect = -1;
		
		try{
			if(cor.GlossaryModule=="14"){modRedirect="15";}
			if(cor.GlossaryModule=="15"){modRedirect="16";}
			if(cor.GlossaryModule=="16"){modRedirect="18";}
			if(cor.GlossaryModule=="17"){modRedirect="20";}
			if(cor.GlossaryModule=="18"){modRedirect="21";}
			
			if(cor.GlossaryLesson){
				if(cor.Type=="WB"){
					type="WB";
				}
				window.name = '{"Frame":"'+cor.Return+'"}';		
			}
				
			if(cor.GlossaryModule){
				if (cor.Return == "menu"){
					window.location.href = "../MainMenu.html";
				}
				else{
					if (modRedirect != -1) {
						window.location.href = "../"+ type +"/Module"+ modRedirect +".html";
					}
					else {
						window.location.href = "../"+ type +"/Module"+ cor.GlossaryModule +".html";
					}
				}
			}			
			else{
				window.location.href = "../MainMenu.html";
			}
		}
		catch(err){
			window.location.href = "../MainMenu.html";
		}
	});
	
	$(document).on("mousedown", ".wordsoundPlay,.soundPlay,.homeBtn,.vocExit", function (e) {
	e.preventDefault();
	var cl="";
	try{ cl=$(this).attr("class").trim();}catch(err){}
	if(cl==undefined){$(this).attr("class","pressed");}else{$(this).attr("class",cl+" pressed");}
	
	});
	
	
	$('audio').on('ended', function (e) {
		 try{$(".glPlaying").attr("class",$(".glPlaying").attr("class").replace("glPlaying",""));}catch(err){}
	});

	$(document).on("mouseup", function () {	
		try{$(".pressed").attr("class",$(".pressed").attr("class").replace("pressed",""));}catch(err){}
	});



    $(document).on("click", ".wbyModule", function () {
		
		try{$(".glPlaying").attr("class",$(".glPlaying").attr("class").replace("glPlaying",""));}catch(err){}
        $('.wordSelected').removeClass("wordSelected");
        $(this).addClass("wordSelected");
        $('.glossaryModsWrapper').html("");
		$('.glossaryAlpha').fadeOut(0);
		
		
        $.each(Modules, function (index, value) {
            if (index == 0) {
                $('.glossaryModules .glossaryModsWrapper').append('<span class="selectMods modSelected" data-selectmod=' + index + '>' + value.title + '</span>');
                $.each(value.lesson, function (index2, value2) {
					
					
                    $('.glossaryLessons .glossaryModsWrapper').append('<span class="selectMods" data-selectles="' + index2 + '">' + value2 + '</span>');
					
                });
            }
            else { $('.glossaryModules .glossaryModsWrapper').append('<span class="selectMods" data-selectmod="' + index + '">' + value.title + '</span>'); }

        });
        $(".glossaryWordWrapper").html("");
		sortLes();
		sortMods();
        $.each(AllWords2, function (index, value) {
            if (value.Mod == Modules[0].module) {                
				printWord(value);}
		});
		
		$(".wlScrollHandle").css("top","0px");$(".glossaryWordScrollWrapper").scrollTop(0);
		if(parseFloat($(".glossaryWordWrapper").height())<=760){$(".wlScroll").fadeOut(0);}else{$(".wlScroll").fadeIn(0);}
        $('.glossaryModules,.glossaryLessons').fadeIn(0);
        $('.glossaryExtra').fadeOut(0);
		
		document.getElementsByClassName("glossaryWords")[0].style.maxHeight = document.getElementsByClassName("glossaryWords")[0].scrollHeight + "px";
		document.getElementsByClassName("blockPanel")[0].style.display = "block";
		document.getElementsByClassName("glossaryWordInfos")[0].style.maxHeight = null;
		document.getElementsByClassName("glossaryArrows")[0].style.display = "none";
		$(".glossaryArrowDown").removeClass("glossaryArrowDownRed");
		$(".glossaryArrowUp").addClass("glossaryArrowUpRed");
    });

    $(document).on("click", ".abModule", function () {
	try{$(".glPlaying").attr("class",$(".glPlaying").attr("class").replace("glPlaying",""));}catch(err){}
        $('.wordSelected').removeClass("wordSelected");
		$('.glLetterSelected').removeClass("glLetterSelected");
		
        $(this).addClass("wordSelected");
        $('.glossaryModsWrapper,.glossaryWordWrapper').html("");
        $('.glossaryModules,.glossaryLessons,.glossaryExtra').fadeOut(0);
		$('.glossaryAlpha').fadeIn(0);
        $.each(AllWords2, function (index, value) {
			printWord(value);
		});
		$(".wlScrollHandle").css("top","0px");$(".glossaryWordScrollWrapper").scrollTop(0);
		if(parseFloat($(".glossaryWordWrapper").height())<=760){$(".wlScroll").fadeOut(0);}else{$(".wlScroll").fadeIn(0);}
		
		document.getElementsByClassName("glossaryWords")[0].style.maxHeight = document.getElementsByClassName("glossaryWords")[0].scrollHeight + "px";
		document.getElementsByClassName("blockPanel")[0].style.display = "block";
		document.getElementsByClassName("glossaryWordInfos")[0].style.maxHeight = null;
		document.getElementsByClassName("glossaryArrows")[0].style.display = "none";
		$(".glossaryArrowDown").removeClass("glossaryArrowDownRed");
		$(".glossaryArrowUp").addClass("glossaryArrowUpRed");

    });

    





    $(document).on("click", "[data-selectmod]", function () {
        var inp = $(this).attr("data-selectmod");
        $('.glossaryModules .modSelected').removeClass("modSelected");
        $(this).addClass("modSelected");
        $('.glossaryLessons .glossaryModsWrapper').html("");
        $.each(Modules[inp].lesson, function (index2, value2) {
            $('.glossaryLessons .glossaryModsWrapper').append('<span class="selectMods" data-selectles=' + index2 + '>' + value2 + '</span>');
        });
		sortLes();
		sortMods();
        $(".glossaryWordWrapper").html("");
        $.each(AllWords2, function (index, value) {
            if (value.Mod == Modules[inp].module) {               
				printWord(value);}
        });
        $('.glossaryExtra').fadeOut(0);
		$(".wlScrollHandle").css("top","0px");$(".glossaryWordScrollWrapper").scrollTop(0);
		if(parseFloat($(".glossaryWordWrapper").height())<=760){$(".wlScroll").fadeOut(0);}else{$(".wlScroll").fadeIn(0);}
		
		document.getElementsByClassName("glossaryWords")[0].style.maxHeight = document.getElementsByClassName("glossaryWords")[0].scrollHeight + "px";
		document.getElementsByClassName("blockPanel")[0].style.display = "block";
		document.getElementsByClassName("glossaryWordInfos")[0].style.maxHeight = null;
		document.getElementsByClassName("glossaryArrows")[0].style.display = "none";
		$(".glossaryArrowDown").removeClass("glossaryArrowDownRed");
		$(".glossaryArrowUp").addClass("glossaryArrowUpRed");

    });

    $(document).on("click", "[data-selectles]", function () {
        var inp = $(".glossaryModules .modSelected").attr("data-selectmod");
        var inp2 = $(this).attr("data-selectles");
        $('.glossaryLessons .modSelected').removeClass("modSelected");
        $(this).addClass("modSelected");

        $(".glossaryWordWrapper").html("");

        $.each(AllWords2, function (index, value) {
            if (value.Mod == Modules[inp].module && value.Lesson == Modules[inp].lesson[inp2]) {
               
				printWord(value);
			}
				});
        $('.glossaryExtra').fadeOut(0);
		$(".wlScrollHandle").css("top","0px");$(".glossaryWordScrollWrapper").scrollTop(0);
		if(parseFloat($(".glossaryWordWrapper").height())<=760){$(".wlScroll").fadeOut(0);}else{$(".wlScroll").fadeIn(0);}
		
		document.getElementsByClassName("glossaryWords")[0].style.maxHeight = document.getElementsByClassName("glossaryWords")[0].scrollHeight + "px";
		document.getElementsByClassName("blockPanel")[0].style.display = "block";
		document.getElementsByClassName("glossaryWordInfos")[0].style.maxHeight = null;
		document.getElementsByClassName("glossaryArrows")[0].style.display = "none";
		$(".glossaryArrowDown").removeClass("glossaryArrowDownRed");
		$(".glossaryArrowUp").addClass("glossaryArrowUpRed");
    });
	
	$(document).on("click", ".glossaryAlphaNumbers span", function () {
		$(".shown").removeClass("shown");
		var flag=0;
		if($(this).hasClass("glLetterSelected")){$(".glLetterSelected").removeClass("glLetterSelected");flag=1;}
		else{$(".glLetterSelected").removeClass("glLetterSelected");$(this).addClass("glLetterSelected");}
		
		try{$(".glPlaying").attr("class",$(".glPlaying").attr("class").replace("glPlaying",""));}catch(err){}
		$(".glossaryExtra").fadeOut(0);
		$(".wordselected").removeClass("wordselected");
		
        var inp = $(this).html();
        if (flag==0) {
            $.each($(".glossaryWordWrapper .word"), function (index, value) {
				
                if ($(this).children("span:last-child").html().toLowerCase().indexOf(inp.toLowerCase()) != 1) { $(this).fadeOut(0); }
                else { $(this).fadeIn(0).addClass("shown"); }
            });
        }
        else { $(".glossaryWordWrapper .word").fadeIn(0); }
		
		for(i=0;i<13;i++){
			var wrd=$(".shown").eq(i);
			if(wrd.find("[data-image]").length>0){
				wrd.find("[data-image]").append("<img src='../Images/Frames/"+ wrd.find("[data-image]").attr("data-image") +".jpg'  onload = \"{console.log(this.previousSibling.remove()) };\"/>").removeAttr("data-image");
						
				
			}
						

		}
		
		$(".wlScrollHandle").css("top","0px");$(".glossaryWordScrollWrapper").scrollTop(0);
		if(parseFloat($(".glossaryWordWrapper").height())<=760){$(".wlScroll").fadeOut(0);}else{$(".wlScroll").fadeIn(0);}
		
	});

    $(document).on("input propertychange", ".glossarySearch input", function () {
		$(".shown").removeClass("shown");
		try{$(".glPlaying").attr("class",$(".glPlaying").attr("class").replace("glPlaying",""));}catch(err){}
        $(".glossaryExtra").fadeOut(0);
		$(".wordselected").removeClass("wordselected");
		
        var inp = $(this).val();
        if (inp) {
            $.each($(".glossaryWordWrapper .word"), function (index, value) {
                if ($(this).children("span:not(.vocImage)").html().toLowerCase().indexOf(inp.toLowerCase()) != 1) { $(this).fadeOut(0); }
                else { $(this).fadeIn(0).addClass("shown"); }
            });
        }
        else { $(".glossaryWordWrapper .word").fadeIn(0).addClass("shown"); }
		
		for(i=0;i<13;i++){
			var wrd=$(".shown").eq(i);
			if(wrd.find("[data-image]").length>0){
				wrd.find("[data-image]").append("<img src='../Images/Frames/"+ wrd.find("[data-image]").attr("data-image") +".jpg'  onload = \"{console.log(this.previousSibling.remove()) };\"/>").removeAttr("data-image");
						
				
			}
						

		}
		$(".wlScrollHandle").css("top","0px");$(".glossaryWordScrollWrapper").scrollTop(0);
		if(parseFloat($(".glossaryWordWrapper").height())<=760){$(".wlScroll").fadeOut(0);}else{$(".wlScroll").fadeIn(0);}
		
    });


//Words scroll
$(document).on("mousedown touchstart", ".wlScroll", function (e) {	
	
	e.preventDefault();
	var top=coords(e,".wlScroll").top-10;
	scrollY=$(".glossaryWordWrapper").height()-$(".glossaryWordScrollWrapper").height();
	var a=parseFloat(scrollY*top/115);	
	scrollTo(a);
	
	
	$(document).on("mousemove touchmove",wlScrollMove);	
	$(document).on("mouseup touchend",wlScrollUp);
	
	
	
});


function wlScrollMove(e)
{
	var top=coords(e,".wlScroll").top-10;
	scrollY=$(".glossaryWordWrapper").height()-$(".glossaryWordScrollWrapper").height();
	var a=parseFloat(scrollY*top/115);	
	scrollTo(a);
	
}	

function wlScrollUp(e)
{
	e.preventDefault();
	var top=coords(e,".wlScroll").top-10;
	scrollY=$(".glossaryWordWrapper").height()-$(".glossaryWordScrollWrapper").height();
	var a=parseFloat(scrollY*top/115);	
	scrollTo(a);
    $(document).off("mousemove touchmove",wlScrollMove);	
	$(document).off("mouseup touchend",wlScrollUp);
  		
}



$(document).on( 'mousewheel DOMMouseScroll', '.glossaryLeft', function(e){
		var delta;var inp;var inpScroll;
		 if (e.originalEvent) {
			if (e.originalEvent.wheelDelta) delta = e.originalEvent.wheelDelta / -40;
			if (e.originalEvent.deltaY) delta = e.originalEvent.deltaY;
			if (e.originalEvent.detail) delta = e.originalEvent.detail;
		}
		delta = (delta<0 ? -1 : 1);		
		
		scrollTo($(".glossaryWordScrollWrapper").scrollTop() + 100 * delta);				   
});

//Content scroll
$(document).on("mousedown touchstart", ".wlScrollCont", function (e) {	
	
	e.preventDefault();
	var top=coords(e,".wlScrollCont").top-10;
	scrollY=$(".glossaryExtraCont").height()-$(".glossaryExtra").height();
	var a=parseFloat(scrollY*top/115);	
	scrollToCont(a);
	
	
	$(document).on("mousemove touchmove",wlScrollContMove);	
	$(document).on("mouseup touchend",wlScrollContUp);
	
	
	
});


function wlScrollContMove(e)
{
	var top=coords(e,".wlScrollCont").top-10;
	scrollY=$(".glossaryExtraCont").height()-$(".glossaryExtra").height();
	var a=parseFloat(scrollY*top/115);	
	scrollToCont(a);
	
}	

function wlScrollContUp(e)
{
	e.preventDefault();
	var top=coords(e,".wlScrollCont").top-10;
	scrollY=$(".glossaryExtraCont").height()-$(".glossaryExtra").height();
	var a=parseFloat(scrollY*top/115);	
	scrollToCont(a);
    $(document).off("mousemove touchmove",wlScrollContMove);	
	$(document).off("mouseup touchend",wlScrollContUp);
  		
}



$(document).on( 'mousewheel DOMMouseScroll', '.glossaryExtra', function(e){
		var delta;var inp;var inpScroll;
		 if (e.originalEvent) {
			if (e.originalEvent.wheelDelta) delta = e.originalEvent.wheelDelta / -40;
			if (e.originalEvent.deltaY) delta = e.originalEvent.deltaY;
			if (e.originalEvent.detail) delta = e.originalEvent.detail;
		}
		delta = (delta<0 ? -1 : 1);		
		
		scrollToCont($(".glossaryExtra").scrollTop() + 100 * delta);				   
}); 



});



function printWord(value3){
	
		var extra="";
		var abbr="";
		if(value3.KindOf){abbr=value3.KindOf;}
		if(value3.Image){
			  
			if($('.word').length<20){extra="<span class='vocImage'><div class='loadingGif'><div class='loader' id='loader-1'><div class='loadingText'>Loading</div></div></div><img src='../Images/Frames/"+ value3.Image +".jpg' onload = \"{console.log(this.previousSibling.remove()) };\"/></span>";}
			else{extra="<span class='vocImage' data-image='"+ value3.Image +"'><div class='loadingGif'><div class='loader' id='loader-1'><div class='loadingText'>Loading</div></div></div></span>"; }
		}
		
		if(value3.vocExample){
			extra="<span class='vocImage' style='background:transparent'></span>"
		}
		
        $(".glossaryWordWrapper").append("<div class=\"word\" data-wordid=\"" + parseInt(value3.Num) + "\" data-modid=\"" + value3.Mod + "\" data-lesid=\"" + value3.Lesson + "\" >"+ extra +"<span> " + value3.Word + " <i>" + abbr + "</i></span></div>");
		
		
}



function sortArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i].Word.localeCompare(arr[j].Word) > 0) { var temp = arr[i]; arr[i] = arr[j]; arr[j] = temp }
        }
    }



    return arr;
}




function sortMod(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i].localeCompare(arr[j]) > 0) { var temp = arr[i]; arr[i] = arr[j]; arr[j] = temp }
        }
    }
    return arr;
}

function sortLes() {
	
	$(".glossaryLessons .selectMods").each(function (index, value) {
		$(this).attr("data-temp",$(this).html());		
	});
	
	var list = $(".glossaryLessons .selectMods").get();
	
	list.sort(sort_by_name);
	
	
	$(".glossaryLessons .glossaryModsWrapper").html("");
	
	$.each(list, function (index, value) {
		
		$(".glossaryLessons .glossaryModsWrapper").append(value);
		
	});
	
	$(".glossaryLessons .selectMods").each(function (index, value) {
		$(this).html($(this).attr("data-temp")).removeAttr("data-temp");		
	});
	
}

function sortMods() {
	
	$(".glossaryModules .selectMods").each(function (index, value) {
		$(this).attr("data-temp",$(this).html());		
	});
	
	var list = $(".glossaryModules .selectMods").get();
	
	list.sort(sort_by_name_Modules);
	
	
	$(".glossaryModules .glossaryModsWrapper").html("");
	
	$.each(list, function (index, value) {
		
		$(".glossaryModules .glossaryModsWrapper").append(value);
		
	});
	
	$(".glossaryModules .selectMods").each(function (index, value) {
		$(this).html($(this).attr("data-temp")).removeAttr("data-temp");		
	});
	
}

function LessonOrder(a){
	
	var order=["Cover page", "a (pp. 8-9)", "a (pp. 10-11)", "a (pp. 12-13)", "b (pp. 14-15)", "b (pp. 16-17)", "b (pp. 18-19)", "b (pp. 20-22)", "Review (pp. 23-24)", "a (pp. 26-27)", "a (pp. 28-29)", "a (pp. 30-31)", "b (pp. 32-33)", "b (pp. 34-35)", "b (pp. 36-37)", "b (pp. 38-40)", "Review (pp. 41-42)", "a (pp. 44-45)", "a (pp. 46-47)", "a (pp. 48-49)", "b (pp. 50-51)", "b (pp. 52-53)", "b (pp. 54-55)", "b (pp. 56-58)", "a (pp. 62-63)", "a (pp. 64-65)", "a (pp. 66-67)", "b (pp. 68-69)", "b (pp. 70-71)", "b (pp. 72-73)", "b (pp. 74-76)", "a (pp. 80-81)", "a (pp. 82-83)", "a (pp. 84-85)", "b (pp. 86-87)", "b (pp. 88-89)", "b (pp. 90-91)", "b (pp. 92-93)", "Review (pp. 95-96)", "a (WB)", "b (WB)", "Review (WB)"];
	var returnvar=0;
	 $.each(order, function (index, value) {
		 returnvar=index;
		if($(a).html()==value){return false;}
	});
	return returnvar;
}

function ModuleOrder(a){
	
	var order=["1","2","Task Modules 1-2","3","4","Task Modules 3-4","5","6","Task Modules 5-6","7","8","Task Modules 7-8","9","10","Task Modules 9-10","11","12","Task Modules 11-12"];
	var returnvar=0;
	 $.each(order, function (index, value) {
		 returnvar=index;
		if($(a).html()==value){return false;}
	});
	return returnvar;
}


var sort_by_name = function(a, b) {
		return LessonOrder(a)-LessonOrder(b)
    }
	
var sort_by_name_Modules = function(a, b) {
		return ModuleOrder(a)-ModuleOrder(b)
    }

