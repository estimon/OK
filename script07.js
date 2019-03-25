
window.onload = rotate;
var adImages = new Array("images/reading1.gif", "images/reading2.gif", "images/reading3.gif");

var thisAD = 0;

function rotate(){
	thisAD++;
	if(thisAD == adImages.length){
		thisAD = 0;
	}
	document.getElementById("adBanner").src = adImages[thisAD];
	setTimeout("rotate()", 1 * 1000);
}