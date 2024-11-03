/* TO DO:

	- Create an array to hold three different usernames. 

	- Create an array with the dates of each review (i.e., 2024-10-30).

	- Create an array to hold the actual reviews. 

	- Create an array to hold three different ratings. 

*/

let username = ['smith', 'ben', 'neil']
let dates =['2022-10-5', '2017-8-5', '2023-3-4']
let reviews = ["After watching this insane movie in the theatres back in 2014 I swore to god I will wait 5 years to watch it again so I get to forget it and experince the insanity it has again This without doubt is THE BEST MOVIE EVER MADE",
	"A science-fiction masterpiece. Nolan executes a marvelous direction that slowly but efficiently puts in place a dark world creating a necessity to save humanity. Add to that great performances from Nolan and Hathaway plus a great score from Hans Zimmer. The result is on the best science-fiction movies of all time.",
	"All is amazing. I can't describe anything. It's a film that leads you to think about yourself and your plans in your life. I am a real series/movies' lover and... This was awesome."
]
let ratings = [5,5,4]

/* TO DO:

	- Select ALL review card elements and store in a variable.

	- Loop through each card to update its content with review information:
	  - Select the current review rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the review rating element's text to display the generated stars.
	  - Set the review rating element's attribute to current rating from the array. 

	  - Select the current review username element.
	  - Set its text to the username from the array and add a space to separate it from the date.

	  - Select the current review date element.
	  - Set its markup to the date from the array.

	  - Select the current review text element.
	  - Set its text to the review text from the array.
 
*/

let reviewCards = document.querySelectorAll(".review-card")

for(let i = 0; i < reviewCards.length; i++){
	let reviewRating = reviewCards[i].querySelector(".review-rating")


let stars = "";

	for(let j = 0; j < 5; j++){
		if (j < ratings[i]){
			stars += "★"
		}
		else{
			stars += "☆"
		}
	}
	reviewRating.textContent = stars;
}



// Get the dropdown element for filtering ratings by its ID
var filterDropdown = document.getElementById('rating-filter');

// Add an event listener to the dropdown that triggers when the selected option changes
filterDropdown.addEventListener('change', function() {
   	
   	// Store the currently selected rating from the dropdown
    var selected_rating = filterDropdown.value;


    /* TO DO:

		- Loop through each card:
		  - Select the current review rating element.
		  - Get its rating attribute value.

		  - Check if the selected rating is 'All' or matches the card's rating.
		  	- If it matches, display the card.
		  	- Otherwise, hide the card

	*/

});



