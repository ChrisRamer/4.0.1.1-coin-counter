let startingAmount = 69.420

console.log(startingAmount + " is comprised of:")
//const getChange = GetChange(startingAmount)
//console.log(getChange(0, 0, 0, 0))
//console.log(getChange("quarters") + " quarters")
//console.log(getChange("dimes") + " dimes")
//console.log(getChange("nickels") + " nickels")
//console.log(getChange("pennies") + " pennies")

const quarterCounter = GetChange("quarters")
const dimeCounter = GetChange("dimes")
const nickelCounter = GetChange("nickels")
const pennyCounter = GetChange("pennies")
console.log(quarterCounter(69.420) + "quarters")
console.log(dimeCounter(69.420) + " dimes")
console.log(nickelCounter(69.420) + " nickels")
console.log(pennyCounter(69.420) + " pennies")

function GetChange(coin) {
	return function(amount) {
		if (coin === "quarters") {
			return parseInt(amount / 0.25)
		}
		else if (coin === "dimes") {
			return parseInt(amount / 0.1)
		}
		else if (coin === "nickels") {
			return parseInt(amount / 0.05)
		}
		else if (coin === "pennies") {
			return parseInt(amount / 0.01)
		}
	}
}

/*
function GetChange(amount) {
	return function(quarters, dimes, nickels, pennies) {
		// Quarters
		if (amount / 0.25 >= 1) {
			quarters = parseInt(amount / 0.25)
			amount -= (0.25 * quarters)
			return GetChange(amount)(quarters, dimes, nickels, pennies)
		}
		// Dimes
		else if (amount / 0.1 >= 1) {
			dimes = parseInt(amount / 0.1)
			amount -= (0.1 * dimes)
			return GetChange(amount)(quarters, dimes, nickels, pennies)
		}
		// Nickels
		else if (amount / 0.05 >= 1) {
			nickels = parseInt(amount / 0.05)
			amount -= (0.05 * nickels)
			return GetChange(amount)(quarters, dimes, nickels, pennies)
		}
		// Pennies
		else if (amount / 0.01 >= 1) {
			pennies = parseInt(amount / 0.01)
			amount -= (0.01 * pennies)
			return GetChange(amount)(quarters, dimes, nickels, pennies)
		}

		return `${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${pennies} pennies`;
	}
}
*/