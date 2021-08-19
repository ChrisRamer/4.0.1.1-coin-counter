let startingAmount = 69.420

console.log(startingAmount + " is comprised of:");
console.log(GetChange(startingAmount));

// My solution

function GetChange(startingAmount) {
	let quarters = 0;
	let dimes = 0;
	let nickels = 0;
	let pennies = 0;

	Helper(startingAmount)

	function Helper(startingAmount) {
		if (startingAmount > 0) {
			// Quarters
			if (startingAmount / 0.25 >= 1) {
				quarters = parseInt(startingAmount / 0.25)
				Helper(startingAmount - (0.25 * quarters));
			}
			// Dimes
			else if (startingAmount / 0.1 >= 1) {
				dimes = parseInt(startingAmount / 0.1);
				Helper(startingAmount - (0.1 * dimes));
			}
			// Nickels
			else if (startingAmount / 0.05 >= 1) {
				nickels = parseInt(startingAmount / 0.05)
				Helper(startingAmount - (0.05 * nickels));
			}
			// Pennies
			else if (startingAmount / 0.01 >= 1) {
				pennies = parseInt(startingAmount / 0.01)
				Helper(startingAmount - (0.01 * pennies));
			}
		}
	}

	return `${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${pennies} pennies`;
}

// Brian's recommended solution

function diffGetChange(startingAmount) {
	function Helper(startingAmount) {
		if (startingAmount > 0) {
			// Quarters
			if (startingAmount / 0.25 >= 1) {
				return `${parseInt(startingAmount / 0.25)} quarters ${Helper(startingAmount - (parseInt(startingAmount / 0.25) * (.25)))}`
			}
			// Dimes
			else if (startingAmount / 0.1 >= 1) {
				return `${parseInt(startingAmount / 0.1)} dimes ${Helper(startingAmount - (parseInt(startingAmount / 0.1) * (.1)))}`
			}
			// Nickels
			else if (startingAmount / 0.05 >= 1) {
				return `${parseInt(startingAmount / 0.05)} nickles ${Helper(startingAmount - (parseInt(startingAmount / 0.05) * (.05)))}`
			}
			// Pennies
			else if (startingAmount / 0.01 >= 1) {
				return `${parseInt(startingAmount / 0.01)} pennies`
			}
		}
			return ""
	}
	return Helper(startingAmount)
}

// Brian's overkill solutions for funsies

const coinNames = ["quarters", "dimes", "nickles", "pennies"];
const coinValues = [25, 10, 5, 1];

const briansCoinCounter = (money, loop) => {
    const currentCount = Math.floor(money / coinValues[loop]);
    return `${currentCount} ${coinNames[loop]}. ` + (loop < 3 ? briansCoinCounter(money - (currentCount * coinValues[loop]), loop + 1) :'');
};

//console.log(briansCoinCounter(167, 0));

const overkillCoinCounter = (money, coins) => Object.keys(coins).reverse()
    .flatMap(x => { `${0 | money / x} ${coins[(money %= x, x)]}`; })    // deducts from money inside the square brackets, then == coins[x]
    .join(", ");

//console.log(overkillCoinCounter(167, { 25: "quarters", 10: "dimes", 5: "nickles", 1: "pennies" }));
