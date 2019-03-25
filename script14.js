
window.onload = initLinks;
var adImages = new Array("images/bear.jpg", "images/lion.jpg", "images/tiger.jpg");
var adtxt = new Array ("tere", "tere1", "tere2");
var thisAD = 0;

function rotate(){
	thisAD++;
	if(thisAD == adImages.length){
		thisAD = 0;
	}
	document.getElementById("adBanner").src = adImages[thisAD];
	document.getElementById("adText").innerHTML = adtxt[thisAD];
	setTimeout("rotate()", 1 * 1000);
}


var myPix = new Array("images/pathfinder.gif", "images/surveyor.gif", "images/surveyor98.gif");
var mytxt = new Array("suss", "juku", "tahvel")
var thisPic = 0;

function initLinks(){
	document.getElementById("prevLink").onclick = processPrvious;
	document.getElementById("nextLink").onclick = processNext;
	rotate();
	
}

function processPrvious(){
	if(thisPic == 0){
		thisPic = myPix.length;
	}
	thisPic--;
	document.getElementById("myPicture").src = myPix[thisPic];
	document.getElementById("marsText").innerHTML = mytxt[thisPic];
	return false;
}

function processNext(){
	thisPic++;
	if(thisPic == myPix.length){
		thisPic = 0;
	}
	document.getElementById("myPicture").src = myPix[thisPic];
	document.getElementById("marsText").innerHTML = mytxt[thisPic];
	return false;
}

document.onkeydown = keyHit;
var thisarrowpic = 0;

function keyHit(evt){
	var myPix = new Array("images/callisto.jpg", "images/europa.jpg", "images/io.jpg", "images/ganymede.jpg");
	var mytxt2 = new Array("päike", "kuu", "muru", "number")
	var imgCt = myPix.length-1;
	var ltArrow = 37;
	var rtArrow = 39;
	
	var thisKey = (evt) ? evt.which : window.event.keyCode;
	
	if(thisKey == ltArrow){
		chgSlide(-1);
	}
	else if(thisKey == rtArrow){
		chgSlide(+1);
		
	}
	return false;
	
	function chgSlide(direction){
		thisarrowpic = thisarrowpic + direction;
		if(thisarrowpic > imgCt){
			thisarrowpic = 0;
		}
		if(thisarrowpic < 0){
			thisarrowpic = imgCt;
		}
		
		document.getElementById("arrowPicture").src = myPix[thisarrowpic];
		document.getElementById("arrowText").innerHTML = mytxt2[thisarrowpic];
	}
}