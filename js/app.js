"use strict";

var boxes = $(".box");

var randomSelect = function(max){
    return Math.floor((Math.random() * max) + 1);
}

var x = setInterval(function(){
    var randomIndex = randomSelect(boxes.length);
    var randomBox = boxes.eq(randomIndex);
    randomBox.addClass("hover");

    setTimeout(function(){
        randomBox.removeClass("hover");
    }, 100);
}, 1000)

var mouseIsDown = false;

var clicker = function(box){
    if (box.hasClass("clicked")){
        return false;
    }else{
        box.addClass("clicked");
        setTimeout(function(){
            box.removeClass("clicked");
        }, 3000);
    }
}

$(".box").hover(function(){
    clearTimeout(x);
})

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
    }else{
        return false;
    }
});

$(".box").click(function(){
    clicker($(this));
});



/*
var intervalCount = 0;
var doThing = function(){

    $(".gridContainer").append("<div class=\"box\"></div>");

    intervalCount++;
    if (intervalCount < 36)
        setTimeout(doThing, 50); // do it again
};

setTimeout(function(){
    $(".gridButton").css("margin-top", "0");
    setTimeout(function(){
        doThing();
    }, 1500);
}, 1500);

$(".box").click(function(){
    clicker($(this));
});

$(".gridContainer").mouseover(function(){
    //clearInterval(x);
    console.log("OVER!");
})
*/