startingAmount = 4.99;
quarterCount = 0;
dimeCount = 0;
nickelCount = 0;
pennyCount = 0;

function getQuarters(amount) {
	if ((amount / 0.25) < 1) {
		return quarterCount;
	} else {
		quarterCount++;
		startingAmount -= 0.25
		return getQuarters(startingAmount);
	}
}

function getDimes(amount) {
	if ((amount / 0.1) < 1) {
		return dimeCount;
	} else {
		dimeCount++;
		startingAmount -= 0.1;
		return getDimes(startingAmount);
	}
}

function getNickels(amount) {
	if ((amount / 0.05) < 1) {
		return nickelCount;
	} else {
		nickelCount++;
		startingAmount -= 0.05;
		return getNickels(startingAmount);
	}
}

function getPennies(amount) {
	if ((amount / 0.01) < 1) {
		return pennyCount;
	} else {
		pennyCount++;
		startingAmount -= 0.01;
		return getPennies(startingAmount)
	}
}

console.log("$" + startingAmount + " consists of " +
	getQuarters(startingAmount) + " quarters, " +
	getDimes(startingAmount) + " dimes, " +
	getNickels(startingAmount) + " nickels, " +
	getPennies(startingAmount) + " pennies");