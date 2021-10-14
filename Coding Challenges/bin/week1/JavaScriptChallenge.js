console.log(extractIng("Jumping and dIviNg acRoss the rails of the ring"));

console.log("***************************");

console.log(vendingMachine(1, 460));

function extractIng(str) {
	let newStr = str.toLocaleLowerCase().split(" ");
	let result = [];

	newStr.forEach(word => {
		if (word.length > 4 && word.endsWith("ing")) {
			result.push(word);
		}
	});
	return result;
}

function vendingMachine(productNum, paymentAmt) {
	const PRODUCTS = [
		{
			"number": 1,
			"name" : "soda",
			"price" : 200
		},
		{
			"number": 2,
			"name" : "chips",
			"price" : 300
		},
		{
			"number": 3,
			"name" : "cookies",
			"price": 500
		}
	];
	let change = [];
	let result = [];

	if (productNum > 3 || productNum < 1){
		console.log("please enter a valid product number.");
	}

	PRODUCTS.forEach(prod => {
		if (prod.number == productNum) {
			if (prod.price <= paymentAmt) {
				let changeAmt = paymentAmt - prod.price;
				change = calculateChange(changeAmt);
				result = {
					"product" : prod.name, 
					"change" : change
				};
			} else {
				console.log("Payment insufficient for selected item.")
			}
		} 
	});
	return result;
}

function calculateChange(amt) {
	const COINS = [500, 200, 100, 50, 20, 10];
	let totalCoins = [];

	for (let i = 0; i < COINS.length; i++){
		while (amt >= COINS[i]) {
			totalCoins.push(COINS[i])
			amt = amt - COINS[i];
		}
	}
	return totalCoins;
}