// JavaScript Document

var opacityValue
var bannerNumber = 1



function bannerFadeIn(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.001){
			op = 1;
			element.style.zIndex = 0;
            clearInterval(timer);
        }
       element.style.opacity = op;
        op -= op * 0.1;
    }, 50);
}

function bannerSequence() {
	setInterval(function() {
		if(bannerNumber == 6) {
			bannerNumber = 1;
		}
		if(bannerNumber == 5) {
			var bannerNext = 1
		} else {
			var bannerNext = bannerNumber + 1;
		}
		var bannerToFade = document.getElementById('banner'+bannerNumber);
		var bannerToStay = document.getElementById('banner'+bannerNext);
		bannerToFade.style.zIndex = 2;
		bannerToStay.style.zIndex = 1;
		bannerFadeIn(bannerToFade);
		bannerNumber++;
		
	}, 8000);
}
