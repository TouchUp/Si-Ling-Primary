function next(i) {
	var j = i+1;
	window.location.href = "page_" + j + ".html" ;
}

function wrong() {
	alert("Sorry, that's the wrong answer!");
	document.getElementsByTagName("footer")[0].innerHTML += ("<br>" + "<h2>Wrong answer! Try again!</h2>");
}