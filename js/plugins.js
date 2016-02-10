// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
(function($){
     $.fn.extend({
         airport: function(array) {

			var self = $(this);
			var chars = ['A','a','b','c','d','e','f','g',' ','h','i','J','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','-'];
			var longest = 0;
			var items = items2 = array.length;

			function pad(a,b) { return a + new Array(b - a.length + 1).join(' '); }

			$(this).empty();

			while(items--)
				if(array[items].length > longest) longest = array[items].length;

			while(items2--)
				array[items2] = pad(array[items2],longest);

			spans = longest;
			while(spans--)
				$(this).prepend("<span class='c" + spans + "'></span>");


			function testChar(a,b,c,d){
				if(c >= array.length)
					setTimeout(function() { testChar(0,0,0,0); }, 5000);
				else if(d >= longest)
					setTimeout(function() { testChar(0,0,c+1,0); }, 5000);
				else {
					$(self).find('.c'+a).html((chars[b]==" ")?"&nbsp;":chars[b]);
					setTimeout(function() {
						if(b > chars.length)
							testChar(a+1,0,c,d+1);
						else if(chars[b] != array[c].substring(d,d+1))
							testChar(a,b+1,c,d);
						else
							testChar(a+1,0,c,d+1);
					}, 20);
				}
			}

			testChar(0,0,0,0);
        }
    });
})(jQuery);
