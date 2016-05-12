"use strict";

function gridEngine (amount){
    var container = document.getElementsByClassName("gridContainer");
    var content = "<div class=\"box\"></div>";
    
    for (i = 0; i < amount; i++){
        container[0].innerHTML += content;
    }
}

gridEngine(64);

// variable name for jQuery element of .box
var boxes = document.querySelectorAll(".box");

// create random number for selecting box
function randomSelect(max) {
    return Math.floor((Math.random() * max) + 1);
}

// function that flashes a random box
function flashARandomBox() {
  var randomIndex = randomSelect(boxes.length - 1);
    var randomBox = boxes[randomIndex];
    randomBox.classList.add("hover");
    setTimeout(function() {
        randomBox.classList.remove("hover");
    }, 100);
}

// variable that holds our interval.
var flashInterval;

// function that resets our interval
function restartInterval(){
  clearInterval(flashInterval); // stops it and
  flashInterval = setInterval(flashARandomBox, 2000); // then starts it again
}

// function that stops our interval
function stopInterval(){
  clearInterval(flashInterval); // stops it
}

// initialise variable and set to false
var mouseIsDown = false;

// second case that needs the interval stopping, clicking
var numBoxesClicked = 0; // we'll use this to store the number of boxes that are in clicked status

for (var i = 0; i < boxes.length; i++){
    // first case that needs the interval stopping, hovering
    boxes[i].addEventListener('mouseover', function(){
        stopInterval();
        
        if (mouseIsDown == true)
        {
            boxHue(this);
        } else {
            return false;
        }
    });
 
    boxes[i].addEventListener('mouseout', function(){
    if (numBoxesClicked == 0)
        restartInterval();
    });
    
    boxes[i].addEventListener('mousedown', function(){
        mouseIsDown = true;
    });
    
    boxes[i].addEventListener('mouseup', function(){
        mouseIsDown = false;
    });
    
    boxes[i].addEventListener("click", function(e){
        boxHue(e.currentTarget);
    });
}

function boxHue(element){
  var box = element;
    if (!box.classList.contains("clicked")){ // ignore event if box was already clicked
    stopInterval(); // cancel flashing
      numBoxesClicked = numBoxesClicked + 1; // inc num of boxes clicked
    box.classList.add("clicked"); // add class to show effect
    
        setTimeout(function(){ // set timeout to remove class
            box.classList.remove("clicked");
      numBoxesClicked = numBoxesClicked - 1;   // update number of clicked boxes
      // if there are no other boxes clicked, restart flashing interval
      if (numBoxesClicked == 0) 
        restartInterval();
        }, 3000);
  }
}

// Now get the flashing started
restartInterval();