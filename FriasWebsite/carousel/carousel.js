// JavaScript Document

var opacityValue;
var bannerNumber = 1;

function bannerCheck() {
	if(bannerNumber == 6) {
		bannerNumber = 1;
	} else if (bannerNumber == 0) {
		bannerNumber = 5;
	}
}


var bannerTimer = setInterval(nextBannerFade,8000);

function nextBannerFade() {
	bannerCheck();
	if(bannerNumber == 5) {
		var bannerNext = 1
	} else {
		var bannerNext = bannerNumber + 1;
	}
	var bannerToFade = document.getElementById('banner'+bannerNumber);
	var bannerToStay = document.getElementById('banner'+bannerNext);
	bannerToFade.style.zIndex = 1;
	bannerToStay.style.zIndex = 0;
	bannerFadeIn(bannerToFade);
	bannerNumber++;
}

function bannerFadeIn(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.001){
			op = 1;
			element.style.zIndex = -1;
            clearInterval(timer);
        }
       element.style.opacity = op;
        op -= op * 0.2;
    }, 50);
}

function previousBanner() {
	clearInterval(bannerTimer);
	bannerCheck();
	if(bannerNumber == 1) {
		bannerNext = 5;
	} else {
	var bannerNext = bannerNumber - 1;
	}
	var bannerToFade = document.getElementById('banner'+bannerNumber);
	var bannerToStay = document.getElementById('banner'+bannerNext);
	bannerToFade.style.zIndex = 1;
	bannerToStay.style.zIndex = 0;
	bannerFadeIn(bannerToFade);
	bannerNumber --;
	bannerTimer = setInterval(nextBannerFade,8000);
}

function nextBanner() {
	clearInterval(bannerTimer);
	bannerCheck();
	if(bannerNumber == 5) {
		bannerNext = 1;
	} else {
	var bannerNext = bannerNumber + 1;
	}
	var bannerToFade = document.getElementById('banner'+bannerNumber);
	var bannerToStay = document.getElementById('banner'+bannerNext);
	bannerToFade.style.zIndex = 1;
	bannerToStay.style.zIndex = 0;
	bannerFadeIn(bannerToFade);
	bannerNumber ++;
	bannerTimer = setInterval(nextBannerFade,8000);
}

function changeBanner(bannerNext) {
	clearInterval(bannerTimer);
	bannerCheck();
	var bannerToFade = document.getElementById('banner'+bannerNumber);
	var bannerToStay = document.getElementById('banner'+bannerNext);
	bannerToFade.style.zIndex = 1;
	bannerToStay.style.zIndex = 0;
	bannerFadeIn(bannerToFade);
	bannerNumber = bannerNext;
	bannerTimer = setInterval(nextBannerFade,8000);
}
