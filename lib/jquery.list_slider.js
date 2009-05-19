/**
* list_slider - jQuery Plugin
*
* Version - 0.1
*
* Copyright (c) 2009 Terry M. Schmidt
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*
*/
(function(jQuery) {
	
	jQuery.fn.list_slider = function (options) {
		
		var opts = jQuery.extend({
			speed		: 250,
			showText 	: "Show Info",
			hideText	: "Hide Info"
		}, options);
		
		return this.each(function () {
			
			var $main 		= jQuery(this);
			var additional	= $main.next();
			var origHeight	= additional.find("ol").outerHeight() +
			 				  parseInt(additional.find("ol").css('marginTop')) +
							  parseInt(additional.find("ol").css('marginBottom')),
				additionalLink = jQuery('<a href="#" class="more"></a>');
			
			console.log(additional);
			
			additional.css({
				height : 0,
				overflow: 'hidden'
			}).hide();
			
			additionalLink.wrap(jQuery('<span/>')).text(opts.showText);
			$main.find('.info').append(additionalLink);
			
			additionalLink.click(function (e) {
				e.preventDefault();
				var $this = jQuery(this);
				jQuery(".additional").not(additional).animate({ height : 0 }, opts.speed, function () {
					jQuery(this).hide().prev().find('.more').text(opts.showText);
				});
				
				if (additional.is(":visible")) {
					$this.text(opts.showText);
					additional.stop().animate({ height : 0 }, opts.speed, function () {
						jQuery(this).hide();
					});
				} else {
					$this.text(opts.hideText);
					additional.show().stop().animate({
						height : origHeight + 'px'
					}, opts.speed);
				}
			})
			
		});
	}
	
})(jQuery);