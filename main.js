
function makeNewPosition(){
var h = $(window).height() - 50;
var w = $(window).width() - 50;
var nh = Math.floor(Math.random() * h);
var nw = Math.floor(Math.random() * w);
return [nh,nw];
}

function animateDiv(){
var newq = makeNewPosition();
var oldq = $("#clay").offset();
$("#clay").animate({top: newq[0], left: newq[1]}, 2000,"linear",function(){
animateDiv();});
}
animateDiv();
