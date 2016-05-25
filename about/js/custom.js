jQuery(document).ready(function($) {

	//===============================================	
	// 		MOBILE NAVIGATION
	//===============================================
	
	/* prepend menu icon */
	$('body header nav').prepend('<a id="mobile_nav" title="Navigation"><i class="icon-align-justify"></i></a>');
	
	/* toggle navigation */
	$("#mobile_nav").click(function(){
		$(".navigation").slideToggle();
		$(this).toggleClass("active");
	});
	
	//===============================================	
	// 		DROPDOWN MENU ICON
	//===============================================	
	
	$('.navigation li ul').parent().children('a').append(' <i class="icon-caret-down"></i>');	
	
	//===============================================	
	// 		TOOLTIP
	//===============================================
	
	// Display link title as a tooltip
	$("#social_icons li a[title], a.tooltip[title]").tooltip({effect: 'slide', slideSpeed: 200});
	
	//===============================================	
	// 		TABS (ABOUT SECTION)
	//===============================================	
	
	$("ul.tabs").tabs("div.panes > div", {effect: 'fade', fadeInSpeed:800});
		
});