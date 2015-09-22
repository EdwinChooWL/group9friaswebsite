// JavaScript Document
function totalprice() {
	var productQuantity = document.getElementById("productquantity");
	var productPrice = document.getElementById("productprice");
	var totalPrice = (productQuantity.selectedIndex * productPrice.innerHTML).toFixed(2)
	document.getElementById("totalprice").innerHTML = "Total Price: $" + totalPrice;
}

function addToCart() {
//	var productQuantity = document.getElementById("productquantity");
//	var productPrice = document.getElementById("productprice");
//	createCookie("totalPrice", (productQuantity.selectedIndex * productPrice.innerHTML).toFixed(2), 0);
//	createCookie("productQuantity", productQuantity, 0);
	createCookie("username", "Bobby", 0);
}

function listCookies() {
	alert(readCookie("productQuantity"));
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+";"+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}