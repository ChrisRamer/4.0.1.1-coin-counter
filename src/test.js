let startingAmount = 69.420
let quarters = 0;
let dimes = 0;
let nickels = 0;
let pennies = 0;

console.log(startingAmount + " is comprised of:");
GetChange(startingAmount);

function GetChange(startingAmount) {
	if  (startingAmount > 0) {
		// Quarters
		if (startingAmount / 0.25 >= 1) {
			quarters++;
			startingAmount -= 0.25;
			GetChange(startingAmount);
		}
		// Dimes
		else if (startingAmount / 0.1 >= 1) {
			dimes++;
			startingAmount -= 0.1;
			GetChange(startingAmount);
		}
		// Nickels
		else if (startingAmount / 0.05 >= 1) {
			nickels++;
			startingAmount -= 0.05;
			GetChange(startingAmount);
		}
		// Pennies
		else if (startingAmount / 0.01 >= 1) {
			pennies++;
			startingAmount -= 0.01;
			GetChange(startingAmount);
		}
	}
}

console.log(quarters + " quarters");
console.log(dimes + " dimes");
console.log(nickels + " nickels");
console.log(pennies + " pennies");