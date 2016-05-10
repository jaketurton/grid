"use strict";

// variable name for jQuery element of .box
var boxes = $(".box");

// create random number for selecting box
var randomSelect = function(max){
	return Math.floor((Math.random() * max) + 1);
}

//function that flashes a random box
function flashARandomBox() {
  var randomIndex = randomSelect(boxes.length);
    var randomBox = boxes.eq(randomIndex);
    randomBox.addClass("hover");
   console.log('flash');
    setTimeout(function(){
        randomBox.removeClass("hover");
    }, 100);
}

// when inactive, select a box every 1 second and flash
var flashInterval = setInterval(flashARandomBox, 1000);

// when inactive, select a box every 1 second and flash
// var x = setInterval(function(){
// 	var randomIndex = randomSelect(boxes.length);
// 	var randomBox = boxes.eq(randomIndex);
// 	randomBox.addClass("hover");

// 	setTimeout(function(){
// 		randomBox.removeClass("hover");
// 	}, 100);
// }, 1000)

// create function that checks to see if the selected box does not have a class of "clicked"
var clicker = function(box){
	if (box.hasClass("clicked")){
		return false;
	} else {
		box.addClass("clicked");
		setTimeout(function(){
			box.removeClass("clicked");
		}, 3000);
	}
}

// initialise variable and set to false
var mouseIsDown = false;

$("html").mousedown(function(){
	mouseIsDown = true;

})

$("html").mouseup(function(){
	mouseIsDown = false;
})

$(".box").hover(function(){
	if (mouseIsDown == true)
	{
		clicker($(this));
	} else {
		return false;
	}
});

$(".box").click(function(){
	clicker($(this));
});
