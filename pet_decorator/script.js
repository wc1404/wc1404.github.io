var position = document.getElementById("position");
var pup = document.getElementById("pupper");

var decorate = function(e) {
	var tiePic = document.getElementById("tie");
	tiePic.style.top = (e.clientY - 25) + "px";
	tiePic.style.left = (e.clientX - 50) + "px";

	position.textContent = e.clientY + "px" + e.clientX + "px";
};

pup.addEventListener("click", decorate);

document.getElementById("white").onmouseover = function() { document.bgColor='white' };
document.getElementById("red").onmouseover = function() { document.bgColor='red' };
document.getElementById("blue").onmouseover = function() { document.bgColor='blue' };
document.getElementById("yellow").onmouseover = function() { document.bgColor='yellow' };
document.getElementById("pink").onmouseover = function() { document.bgColor='pink' };
document.getElementById("green").onmouseover = function() { document.bgColor='green' };
document.getElementById("purple").onmouseover = function() { document.bgColor='purple' };