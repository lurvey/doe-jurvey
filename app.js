// //h1 is Joe, h2 is daniel
// $( ".chat-body").append( "<h1>ayyo bruh</h1>" );
//
// $( ".chat-body").append( "<h2>fuck u</h2>" );

var joeIM = function(){
    $().ready( "<audio autoplay='true'>" +
    "<source src='sounds/ReceiveIM.wav' type='audio/mpeg'>" + "</audio>");
}

var danielIM = function(){
    $().ready( "<audio autoplay='true'>" +
    "<source src='sounds/SendIM.wav' type='audio/mpeg'>" + "</audio>");
}

$(document).ready(function () {
    setTimeout(function(){
        $( ".chat-body").append("<h1>Hey Daniel! How was school today?</h1>" + joeIM).fadeIn(500);
    }, 3000);
});

$(document).ready(function () {
    setTimeout(function(){
        $( ".chat-body").append( "<h2>AYy it was alright</h2>" + danielIM).fadeIn(500);
    }, 5000);
});
