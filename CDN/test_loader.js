(function () {
	var folder = "https://raw.githubusercontent.com/aculligan/aculligan.github.io/master/CDN/assets/";
	$.ajax({
	    url : folder,
	    success: function (data) {
	        $(data).find("a").attr("href", function (i, val) {
	            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
	                $("body").append( "<img src='"+ folder + val +"'>" );
	            } 
	        });
	    }
	});
})();
