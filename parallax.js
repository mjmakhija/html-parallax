(function ($) {

	$.fn.parallax = function () {

		var varWidthWindow = $(window).width();

		if (varWidthWindow < 768)
		{
			$(this).css('background-position', "");
			return;
		}

		$(this).each(function () {

			var $obj = $(this);

			console.log(this);

			$(window).scroll(function () {

				var varTopScroll = $(window).scrollTop();
				var varTopElement = $obj.offset().top;
				var varHeightWindow = $(window).height();

				var varElementVisibilityStartPoint = varTopElement - varHeightWindow;
				varElementVisibilityStartPoint = (varElementVisibilityStartPoint < 0) ? 0 : varElementVisibilityStartPoint;

				if (varTopElement + varHeightWindow < varTopScroll || varTopElement > varTopScroll + varHeightWindow) {
					/* console.log("Out of view"); */
					return;
				}

				var yPos = -((varTopScroll - varElementVisibilityStartPoint) * $obj.data('speed'));
				var bgpos = '50% ' + yPos + 'px';

				$obj.css('background-position', bgpos);

			});
		});

		return this;

	};


}(jQuery));
