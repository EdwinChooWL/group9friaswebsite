// JavaScript Document
function totalprice() {
	var productQuantity = document.getElementById("productquantity");
	var productPrice = document.getElementById("productprice");
	document.getElementById("totalprice").innerHTML = "Total Price: SGD " + (productQuantity.selectedIndex * productPrice.innerHTML).toFixed(2);
}	