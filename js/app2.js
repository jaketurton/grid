"use strict";

// variable name for jQuery element of .box
var boxes = $(".box");

// create random number for selecting box
function randomSelect(max) {
    return Math.floor((Math.random() * max) + 1);
}

// function that flashes a random box
function flashARandomBox() {
  var randomIndex = randomSelect(boxes.length);
    var randomBox = boxes.eq(randomIndex);
    randomBox.addClass("hover");
    setTimeout(function() {
        randomBox.removeClass("hover");
    }, 100);
}

// variable that holds our interval.
var flashInterval;

// function that resets our interval
function restartInterval() {
  clearInterval(flashInterval); // stops it and
  flashInterval = setInterval(flashARandomBox, 1000); // then starts it again
}

// function that stops our interval
function stopInterval() {
  clearInterval(flashInterval); // stops it
}

// first case that needs the interval stopping, hovering
$(".box").hover(function() {
  // this happens when you enter the box, cancel interval
    stopInterval();
}, function() {
  // this happends when you leave box, restart interval unless there's a box clicked,
  // in that case interval will be restarted 3 seconds after it was clicked.
   if(numBoxesClicked == 0) 
    restartInterval();
});

function boxHue(element){
  var box = $(element);
    if (!box.hasClass("clicked")){ // ignore event if box was already clicked
    stopInterval(); // cancel flashing
      numBoxesClicked=numBoxesClicked+1; // inc num of boxes clicked
    box.addClass("clicked"); // add class to show effect
    
        setTimeout(function(){ // set timeout to remove class
            box.removeClass("clicked");
      numBoxesClicked=numBoxesClicked-1;   // update number of clicked boxes
      // if there are no other boxes clicked, restart flashing interval
      if(numBoxesClicked==0) 
        restartInterval();
        }, 3000);
  }
}


// second case that needs the interval stopping, clicking
var numBoxesClicked = 0; // we'll use this to store the number of boxes that are in clicked status
$(".box").click(function(){
    boxHue(this);
});

// Now get the flashing started
restartInterval();

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
		boxHue(this);
	} else {
		return false;
	}
});