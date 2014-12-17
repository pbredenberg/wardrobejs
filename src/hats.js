var hats = [],
	dudes = [],
	highFives = [],
	cash = 50,       // Dudes always have $50 to start
	selfEsteem = 0;  // 0 is normal, healthy amount of self esteem

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
	highFives.push(dude, otherDude);
}

function getNewShinyHat() {
	
}

function donateOrSellHat(hat, selling) {
  var index = hats.indexOf(hat);
  if(index > -1) {
    hats.splice(index, 1);
  }

  if(selling) {
    cash += 10;
    selfEsteem -= 1;
  } else {
    selfEsteem += 1;
  }
}