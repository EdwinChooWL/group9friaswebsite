// JavaScript Document

function getCssProperty(elmId, property){
   var elem = document.getElementById(elmId);
   return window.getComputedStyle(elem,null).getPropertyValue(property);
}

var wrapperposition = 0
var wrapperoriginalposition = 0

function scrollRight() {
	wrapperposition -= 1
	document.getElementById("itemwrapper").style.left =wrapperposition+'px';
	if(wrapperoriginalposition - wrapperposition == "330") {
		wrapperoriginalposition = wrapperposition
	} else if(wrapperoriginalposition - wrapperposition !== "330") {
		setTimeout(scrollRight,1);
	}
	//alert(getCssProperty("itemwrapper","left"))
}

function scrollOpposite() {
	wrapperposition += 1
	document.getElementById("itemwrapper").style.left =wrapperposition+'px';
		if(wrapperoriginalposition - wrapperposition == "-330") {
		wrapperoriginalposition = wrapperposition
	} else if(wrapperoriginalposition - wrapperposition !== "330") {
		setTimeout(scrollOpposite,1);
	}
}