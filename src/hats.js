var hats = [],
	dudes = []
	highFives = [];

if (hats.length >= 10) {
	mightAsWellBuyMoreHats();
} else {
	definitelyTimeToBuyMoreHats();
}

while (hats.length <=10) { 
	donateOrSellHat(hats[0]); 
	hats.push(getNewShinyHat()); 
	highFive(geoff); 
}

function mightAsWellBuyMoreHats() {

}

function definitelyTimeToBuyMoreHats() {

}

function highFive(dude) {
	var bro = dude;
	highFives.push(dude);
}

function getNewShinyHat() {
	
}