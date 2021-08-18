let startingAmount = 69.420

console.log(startingAmount + " is comprised of:");
GetChange(startingAmount);

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
				quarters++;
				Helper(startingAmount - 0.25);
			}
			// Dimes
			else if (startingAmount / 0.1 >= 1) {
				dimes++;
				Helper(startingAmount - 0.1);
			}
			// Nickels
			else if (startingAmount / 0.05 >= 1) {
				nickels++;
				Helper(startingAmount - 0.05);
			}
			// Pennies
			else if (startingAmount / 0.01 >= 1) {
				pennies++;
				Helper(startingAmount - 0.01);
			}
		}
	}

	console.log(quarters + " quarters");
	console.log(dimes + " dimes");
	console.log(nickels + " nickels");
	console.log(pennies + " pennies");
}