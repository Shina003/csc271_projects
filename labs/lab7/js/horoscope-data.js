
let zodiacSign =  'Aries';
let birthMonth =  'April';
let birthDate = '15';
let luckyNumber = '7';
let description  = 'People of Aries sign are open-hearted and strong. Their main features are frankness and honesty. Aries sign loves work. Aries sign is true and fair in love.';
let believe = false;

let sign =  document.getElementById('sign');
sign.innerHTML = zodiacSign;
let Month =  document.getElementsByClassName('birthday');
Month[0].innerHTML = birthMonth + " " + birthDate + "th";
let luck =  document.getElementsByClassName('luckyNum');
luck[0].innerHTML = luckyNumber;

let pSelect = document.getElementsByTagName('p');
pSelect[0].innerHTML = description;
pSelect[1].style.fontWeight = "bold"

let moodRating = 3
let partnerMood = 4

let averageoood  = (moodRating + partnerMood) / 2

pSelect[2].innerHTML = "Today's mood rating for " + zodiacSign + ": " + moodRating + "." + "The average mood rating of " + zodiacSign + " and " + "Libra, and Gemini is: " + averageoood


