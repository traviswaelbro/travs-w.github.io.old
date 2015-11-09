/**
 * Loading Icon
 */
if(window.addEventListener) {
  window.addEventListener("load", loadIcon, false);
} else if(window.attachEvent) {
  window.attachEvent("onload", loadIcon);
}

function loadIcon() {
	document.getElementById("se-pre-con").style.opacity = 0;
}

/**
 * After position is more than halfway down the top div, 
 * the nav will animate to left-fixed. Reverts after 
 * returning towards the top of the page.
 */
window.onscroll = function() {
	if(window.innerWidth > 1800) {
		if(pageYOffset > (document.getElementById("top").clientHeight / 2.5) ) {
			if(document.getElementById("nav").className != "nav-fixed") {
				document.getElementById("nav").className = "nav-fixed";
			}
		} else {
			if(document.getElementById("nav").className != "nav valign-child") {
				document.getElementById("nav").className = "nav valign-child";
			}
		}
	} else {
		if(pageYOffset > (document.getElementById("top").clientHeight / 2.5) ) {
			if(document.getElementById("nav").className != "nav-fixed-top") {
				document.getElementById("nav").className = "nav-fixed-top";
			}
		} else {
			if(document.getElementById("nav").className != "nav valign-child") {
				document.getElementById("nav").className = "nav valign-child";
			}
		}
	}
};
/**

 * Smooth Scroll
 * Credit to StackExchange user Flambino
 * src: http://codereview.stackexchange.com/a/13118/67138
 */
window.smoothScrollTo = (function () {
  var timer, start, factor;
  
  return function (target, duration) {
    var offset = window.pageYOffset,
        delta  = target - window.pageYOffset; // Y-offset difference
    duration = duration || 1000;              // default 1 sec animation
    start = Date.now();                       // get start time
    factor = 0;
    
    if( timer ) {
      clearInterval(timer); // stop any running animations
    }
    
    function step() {
      var y;
      factor = (Date.now() - start) / duration; // get interpolation factor
      if( factor >= 1 ) {
        clearInterval(timer); // stop animation
        factor = 1;           // clip to max 1.0
      } 
      y = factor * delta + offset;
      window.scrollBy(0, y - window.pageYOffset);
    }
    
    timer = setInterval(step, 10);
    return timer;
  };
}());