
function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 4250, "silver");
var Samsung = new Phone("Samsung", 3250, "gold");
var Huawei = new Phone("Huawei", 2750, "black");
var Xaomi = new Phone("Xaomi", 1300, "silver");

iPhone6S.printInfo();
Samsung.printInfo();
Huawei.printInfo();
Xaomi.printInfo();
alert("Pls check console");
