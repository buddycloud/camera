var transEndEventNames = {
    'WebkitTransition' : 'webkitTransitionEnd',
    'MozTransition'    : 'transitionend',
    'OTransition'      : 'oTransitionEnd',
    'msTransition'     : 'MSTransitionEnd',
    'transition'       : 'transitionend'
},
transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

var $shutter = $(".shutter");
var triggerFlash = function() {
  var $camera = $(".camera");
  var $overlay = $(".flash");
  $overlay.on(transEndEventName, function() {
    $camera.removeClass("action-shutterPressed");
  });
  $camera.addClass("action-shutterPressed");
};

var shutterClick = function() {
  triggerFlash();
};

$shutter.on("click", shutterClick);