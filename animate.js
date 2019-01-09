	/*global $ */
		$("document").ready(function () {
			"use strict";
				$('.animate .login_colon').animate({  borderSpacing: -180 }, {
					step: function(now,fx) {
						$(this).css('-webkit-transform','translate(-50%, -50%) rotate('+now+'deg)'); 
						$(this).css('-moz-transform','translate(50%, 50%) rotate('+now+'deg)');
						$(this).css('transform','translate(-50%, -50%) rotate('+now+'deg)');
					},
					duration:'slow'
				});
				$('.animate .login_colon').animate({
					right: "-40px"
				}, 1000, function () {
					$('.animate .login_panel').slideDown(1000);
				});
		});