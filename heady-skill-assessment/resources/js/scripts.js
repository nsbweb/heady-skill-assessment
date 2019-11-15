/** Template Animations **/
jQuery(window).ready(function () {theme.init();});
jQuery(window).load(function () {theme.initAnimation(); });

'use strict';
var theme = function () {
    
    // INIT FUNCTIONS
    // ---------------------------------------------------------------------------------------
    return {
        onResize:function() {
            //resizePage();
        },
        init:function () {
            //handleToTopButton();
        },
        // Animation on Scroll
        initAnimation:function () {
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (isMobile == false) {
                $('*[data-animation]').addClass('animated');
                $('.animated').waypoint(function (down) {
                    var elem = $(this);
                    var animation = elem.data('animation');
                    if (!elem.hasClass('visible')) {
                        var animationDelay = elem.data('animation-delay');
                        if (animationDelay) {
                            setTimeout(function () {
                                elem.addClass(animation + ' visible');
                            }, animationDelay);
                        } else {
                            elem.addClass(animation + ' visible');
                        }
                    }
                }, {
                    offset:$.waypoints('viewportHeight')-60
                });
            }
        }
    }
}();



$(document).ready(function(){
   var currentttl = $('#side-nav .current').text();
    $('.sidebar .title').html(currentttl);
    $('#side-nav').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
	begin: function($currentListItem) {
		//var val = $currentListItem.find('a').text();
//       alert(val);
        //$('.sidebar .title').html(val);
	},
	end: function($currentListItem) {
        //var val = $currentListItem.find('a').text();
//        alert(val);
//        alert("hi");
//		$('body').append('<div id="device-dummy" style="height: 1px;"></div>');
       // $('.sidebar .title').html(val);
	},
	scrollChange: function($currentListItem) {
		var val = $currentListItem.find('a').text();
      $('.sidebar .title').html(val);
	}
});


$('#sidebar').stickySidebar({
    topSpacing: 0,
    bottomSpacing: 0
}); 
    
   
});
