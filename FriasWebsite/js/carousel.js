// JavaScript Document
"use strict";
var bannerNumber = 1;
var numberofBanners = 3;
var bannerNext;

function bannerCheck() {
	if(bannerNumber === numberofBanners+1) {
		bannerNumber = 1;
	} else if (bannerNumber === 0) {
		bannerNumber = numberofBanners;
	}
}


var bannerTimer = setInterval(nextBannerFade,8000);

function nextBannerFade() {
	bannerCheck();
	if(bannerNumber === numberofBanners) {
		bannerNext = 1;
	} else {
		bannerNext = bannerNumber + 1;
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
        if (op <= 0.1){
			op = 1;
			element.style.zIndex = -1;
            clearInterval(timer);
        }
       element.style.opacity = op;
        op -= op * 0.4;
    }, 50);
}

function previousBanner() {
	clearInterval(bannerTimer);
	bannerCheck();
	if(bannerNumber === 1) {
		bannerNext = numberofBanners;
	} else {
	bannerNext = bannerNumber - 1;
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
	if(bannerNumber === numberofBanners) {
		bannerNext = 1;
	} else {
	bannerNext = bannerNumber + 1;
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
