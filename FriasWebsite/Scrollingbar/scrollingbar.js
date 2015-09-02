// JavaScript Document

function getCssProperty(elmId, property){
   var elem = document.getElementById(elmId);
   return window.getComputedStyle(elem,null).getPropertyValue(property);
}

var wrapperposition = 0
var wrapperoriginalposition = 0
var distanceMove = 500
var numberClicks = 2

buttonCheck();

function buttonCheck() {
	if(wrapperposition == 0) {
    	document.getElementById("previousbutton").style.visibility = "hidden";
	} else if(wrapperposition < 0 && wrapperposition > -numberClicks*distanceMove) {
		document.getElementById("nextbutton").style.visibility = "visible";
		document.getElementById("previousbutton").style.visibility = "visible";
	} else if(wrapperposition == -numberClicks * distanceMove) {
		document.getElementById("nextbutton").style.visibility = "hidden";
	}
}

function scrollOpposite() {
	if(wrapperposition !== -numberClicks*distanceMove) {
		wrapperposition -= 1;
		document.getElementById("itemwrapper").style.left =wrapperposition+'px';
		
		if(wrapperoriginalposition - wrapperposition == distanceMove) {
			wrapperoriginalposition = wrapperposition
		} else if(wrapperoriginalposition - wrapperposition !== distanceMove) {
			setTimeout(scrollOpposite,1);
		}
	}
	buttonCheck();
}

function scrollRight() {
	if(wrapperposition !== 0) {
		wrapperposition += 1;
		document.getElementById("itemwrapper").style.left =wrapperposition+'px';
			if(wrapperoriginalposition - wrapperposition == -distanceMove) {
			wrapperoriginalposition = wrapperposition
		} else if(wrapperoriginalposition - wrapperposition !== distanceMove) {
			setTimeout(scrollRight,1);
		}
	}
	buttonCheck();
}