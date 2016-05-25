jQuery(document).ready(function($) {

	//===============================================	
	// 		STELLAR.JS (PARALLAX EFFECT)
	//===============================================
	
    // Initialise Stellar.js
    $(window).stellar();	

	//===============================================	
	// 		WAYPOINT SCROLLING
	//===============================================
			
	// Set waypoints for slides
	$('.slide').waypoint({ offset: '50%' });

	$('body').delegate('.slide', 'waypoint.reached', function(event, direction) {
		var $active = $(this);
		
		if (direction === "up") {
			$active = $active.prev();
		}
		if (!$active.length) $active.end();
		
		// Remove or add 'section-active' class to slides
		$('.section-active').removeClass('section-active');
		$active.addClass('section-active');
		
		// Remove or add 'active' class to navigation list items
		$('ul.navigation .active').removeClass('active');
		$('a[href=#'+$active.attr('id')+']').parent().addClass('active');
	});
	
	
	// Add 'active' class to navigation list item when clicked
	$('.navigation li').click(function() {
		$(this).addClass('active');
	}).eq(0).addClass('active');	
	
	
	var scrollElement = 'html, body';
	$('html, body').each(function () {
		var initScrollTop = $(this).attr('scrollTop');
		$(this).attr('scrollTop', initScrollTop + 1);
		if ($(this).attr('scrollTop') == initScrollTop + 1) {
			scrollElement = this.nodeName.toLowerCase();
			$(this).attr('scrollTop', initScrollTop);
			return false;
		}    
	});	
	
	// Smooth scrolling for internal links
	$("a[href^='#']").click(function(event) {
		event.preventDefault();
		
		var $this = $(this),
		target = this.hash,
		$target = $(target);
		
		$(scrollElement).stop().animate({
			'scrollTop': $target.offset().top
		}, 1000, 'swing', function() {
			window.location.hash = target;
		});
		
	});
	
	//===============================================	
	// 		FLEXSLIDER
	//===============================================
		
	$('.flexslider').flexslider({
		slideshowSpeed: 8000,           // Set the speed of the slideshow cycling, in milliseconds
		animationDuration: 600,         // Set the speed of animations, in milliseconds
		directionNav: true,             // Create navigation for previous/next navigation? (true/false)
		controlNav: true,               // Create navigation for paging control of each clide? Note: Leave true for manualControls usage
		keyboardNav: true,              // Allow slider navigating via keyboard left/right keys
		mousewheel: false,  			// Allow slider navigating via mousewheel
		prevText: "<i class='icon-chevron-left'></i>",     //String: Set the text for the "previous" directionNav item
		nextText: "<i class='icon-chevron-right'></i>", 	//String: Set the text for the "next" directionNav item
		animation: "fade",
	});		
		
	//===============================================	
	// 		QUICKSAND + GALLERIFFIC PLUGINS
	//===============================================
	
	// Quicksand function
	function portfolio_quicksand() {
		
		// Setting Up Our Variables
		var $filter;
		var $container;
		var $containerClone;
		var $filterLink;
		var $filteredItems
		
		// Set Our Filter
		$filter = $('.filter li.active a').attr('class');
		
		// Set Our Filter Link
		$filterLink = $('.filter li a');
		
		// Set Our Container
		$container = $('#thumbs ul');
		
		// Clone Our Container
		$containerClone = $container.clone();
		
		// Apply our Quicksand to work on a click function
		// for each for the filter li link elements
		$filterLink.click(function(e) 
		{
			// Remove the active class
			$('.filter li').removeClass('active');
			
			// Split each of the filter elements and override our filter
			$filter = $(this).attr('class').split(' ');
			
			// Apply the 'active' class to the clicked link
			$(this).parent().addClass('active');
			
			// If 'all' is selected, display all elements
			// else output all items referenced to the data-type
			if ($filter == 'all') {
				$filteredItems = $containerClone.find('li'); 
			}
			else {
				$filteredItems = $containerClone.find('li[data-type~=' + $filter + ']'); 
			}
			
			// Finally call the Quicksand function
			$container.quicksand($filteredItems, 
			{
				// The Duration for animation
				duration: 700,
				// the easing effect when animation
				easing: 'easeInOutCirc',
				// height adjustment becomes dynamic
				adjustHeight: 'dynamic'
			});
			
			//Initalize Galleriffic slideshow Script When Filtered
			$container.quicksand($filteredItems, 
				function () { slideshow(); }
			);		
		});
	}	
		
	// Start quicksand funtion if Quicksand is active
	if(jQuery().quicksand) {
		portfolio_quicksand();	
	}
	
	// Galleriffic slideshow function	
	function slideshow() {
		$('#thumbs').galleriffic({ 
			delay:                     3000, // in milliseconds
			numThumbs:                 40, // The number of thumbnails to show page
			preloadAhead:              0, // Set to -1 to preload all images
			enableTopPager:            false,
			enableBottomPager:         false,
			maxPagesToShow:            6,  // The maximum number of pages to display in either the top or bottom pager
			imageContainerSel:         '#slideshow', // The CSS selector for the element within which the slideshow controls should be rendered
			controlsContainerSel:      '#controls', // The CSS selector for the element within which the controls should be rendered
			captionContainerSel:       '#caption',// The CSS selector for the element within which the captions should be rendered
			loadingContainerSel:       '#loading', // The CSS selector for the element within which should be shown when an image is loading
			renderSSControls:          true, // Specifies whether the slideshow's Play and Pause links should be rendered
			renderNavControls:         true, // Specifies whether the slideshow's Next and Previous links should be rendered
			playLinkText:              "<i class='icon-play'></i>",
			pauseLinkText:             "<i class='icon-pause'></i>",
			prevLinkText:              "<i class='icon-chevron-left'></i>",
			nextLinkText:              "<i class='icon-chevron-right'></i>",
			renderSSControls:          true, // Specifies whether the slideshow's Play and Pause links should be rendered
			renderNavControls:         true, // Specifies whether the slideshow's Next and Previous links should be rendered		
			nextPageLinkText:          'Next &rsaquo;',
			prevPageLinkText:          '&lsaquo; Previous',
			enableHistory:             false, // Specifies whether the url's hash and the browser's history cache should update when the current slideshow image changes
			enableKeyboardNavigation:  false, // Specifies whether keyboard navigation is enabled
			autoStart:                 false, // Specifies whether the slideshow should be playing or paused when the page first loads
			syncTransitions:           false, // Specifies whether the out and in transitions occur simultaneously or distinctly
			defaultTransitionDuration: 500, // If using the default transitions, specifies the duration of the transitions
			onSlideChange:             undefined, // accepts a delegate like such: function(prevIndex, nextIndex) { ... }
			onTransitionOut:           undefined, // accepts a delegate like such: function(slide, caption, isSync, callback) { ... }
			onTransitionIn:            undefined, // accepts a delegate like such: function(slide, caption, isSync) { ... }
			onPageTransitionOut:       undefined, // accepts a delegate like such: function(callback) { ... }
			onPageTransitionIn:        undefined, // accepts a delegate like such: function() { ... }
			onImageAdded:              undefined, // accepts a delegate like such: function(imageData, $li) { ... }
			onImageRemoved:            undefined  // accepts a delegate like such: function(imageData, $li) { ... }		
		});
		
		// At first, slideshow container is hidden				
		$("#portfolio_preview").css('display', 'none');
		
		// When thumbnail link is clicked...		
		$(".thumb").click(function () {		
			// show slideshow container
			$("#portfolio_preview").slideDown(500,"swing");
			// hide Quicksand filter links
			$(".portfolio_toggle").slideUp(200,"swing");
			// scroll to the top where slideshow preview starts, so that loaded image is visible 
			$('html,body').animate({scrollTop: $(this).closest('section').offset().top+170}, 500);
		});
		
		// Prepend 'close' button to slideshow controls
		$('#controls').prepend('<a class="close"><i class="icon-remove"></i></a>');		
		
		// When 'close' button is clicked		
		$("#controls a.close").click(function () {
			// hide slideshow container
			$("#portfolio_preview").slideUp(500,"swing");
			// show Quicksand filter links
			$(".portfolio_toggle").slideDown(200,"swing");
			// scroll to the top of portfolio div, so that title and filter links are visible
			$('html,body').animate({scrollTop: $(this).closest('section').offset().top}, 500);
		});	
	
	}			
		
	// Start slideshow function	
	if(jQuery().galleriffic) {
		slideshow()	
	}		
	
	
	//===============================================
	// 		GOOGLE MAP
	//===============================================
	
	// Google map div is hidden at first...
	$("#google_map").css('display', 'none');
		
	// But when 'map_canvas_load' link is clicked...
	$(".map_canvas_load").click(function () {
		
	   // scroll to the top			
	 //  $('html,body').animate({scrollTop: $(this).closest('section').offset().top+150}, 500);				
		
	   // h2 title becomes hidden		
	   $(".contact_toggle").slideUp(300,"swing");
	   // Google map div becomes visible, and the map funtion get started 
	   $('#google_map').slideToggle(function initialize() {
	
		  // Create some styles for Google map (make it black and white)
		  var styles = [
			{
			  featureType: "all",
			  	stylers: [
				  // desaturate map
				  { saturation: -100 },
				  // make it a bit brighter
				  { lightness: 20 },
			  ]
			}
		  ];
		
		  // Create a new StyledMapType object, passing it the array of styles,
		  // as well as the name to be displayed on the map type control.
		  var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
		
		  // Here you can define your latitude and longitude	
		  var myLatlng = new google.maps.LatLng(-37.812537,144.969041);
		 
		  // Create a map object, and include the MapTypeId to add to the map type control.
		  var mapOptions = {
			// zoom amount  
			zoom: 15,
			// remove enitire UI except zoom control
			streetViewControl: false,
			panControl: false,
			scaleControl: false,
		 	mapTypeControl: false,
			zoomControl: true,
			// center map on previously defined lat and lng
			center: myLatlng,
		  };
		  
		  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);	
		  var marker;
		  
		  // Image file for the marker
		  var image = 'images/marker.png';
				
		  // Create new marker				  
		  marker = new google.maps.Marker({
			map:map,
			// animate marker by droping it on the map
			animation: google.maps.Animation.DROP,
			position: myLatlng,
			icon: image,
		  });
		  
		  //Associate the styled map with the MapTypeId and set it to display.
		  map.mapTypes.set('map_style', styledMap);
		  map.setMapTypeId('map_style');
				
		});
	});	
	
	// Add 'close' button inside map container
	$("#google_map").prepend("<a class='close'><i class='icon-remove'></i></a><br class='clear'/>");	
	
	// When 'close' button inside map container is clicked
	$("#google_map .close").click(function () {
		
		// scroll to the top
		$('html,body').animate({scrollTop: $(this).closest('section').offset().top}, 500);						
		// map container becomes hidden
	    $('#google_map').slideUp(300,"swing");
		// and h2 title becomes shown again
	  	$(".contact_toggle").slideDown(200,"swing");
		
	});		
			
});

//===============================================
// 		CONTACT FORM AJAX
//===============================================

$(function() {
    // These first three lines of code compensate for Javascript being turned on and off. 
    // It simply changes the submit input field from a type of "submit" to a type of "button".

    var paraTag = $('input#submit').parent('div');
    $(paraTag).children('input').remove();
    $(paraTag).append('<input type="button" name="submit" id="submit" value="Submit!" />');

    $('input#submit').click(function() {
        $('#preloader').append('<img src="images/loading.gif" class="loaderIcon" alt="Loading..." />');

        var name = $('input#name').val();
        var email = $('input#email').val();
		var subject = $('input#subject').val();
        var message = $('textarea#message').val();

        $.ajax({
            type: 'post',
            url: 'sendEmail.php',
            data: 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message,

            success: function(results) {
                $('#preloader img.loaderIcon').fadeOut(1000);
                $('ul#response').html(results);
            }
        }); // end ajax
    });
});