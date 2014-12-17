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
	highFive(geoff, paul); 
}

function mightAsWellBuyMoreHats() {

}

function definitelyTimeToBuyMoreHats() {

}

function highFive(dude, otherDude) {
	highFives.push( {dude, otherDude} );
}

function getNewShinyHat() {
	
}

function processHighFive(highFive) {
	var dude1 = highFive[0];
	var dude2 = highFive[1];
	//TODO - Figure out how to actually high five someone in javascript
	return true;
}

window.setInterval(function() {
	while (highFives.length){
		if (processHighFive(highFives[0])) {
			highFives.splice(0, 1);	
		}
	}
}, 60000)
