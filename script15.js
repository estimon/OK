// JavaScript Document

window.onload = initImages;

function initImages(){
	for(var i=0; i<document.images.lenght; i++){
		document.images[i].ondbclick = newWindow;
	}
}

function newWindow(){
	var imgName = "images/" + this.id + ".jpg"
	var imgWindow = window.open(imgName, "imgWin","width=330,height=250,scrollbars=no");
}