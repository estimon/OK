// JavaScript Document

window.onload = initAll;

function initAll(){
	document.getElementById("redirect").onclick = initRedirect;
}

function initRedirect(){
	alert("We are not here xd");
	window.location = this;
	return false;
}