/* TO DO:

    - Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.

    - Select the movie image element.
    - Set its link to the movie poster link from the array. 
    - Set its alt text to the movie title from the array.

    - Select the movie name element.
    - Set its text to the movie title from the array.

    - Select the movie description element.
    - Set its text to the movie synopsis from the array.

    - Select the movie rating element.
    - Create a variable that will hold the filled and empty stars. 
    - Loop to generate star symbols based on the rating:
        - If current counter is less than your rating, then add "★".
        - Otherwise, add "☆".
    - Set the movie rating element's text to display the generated stars. 

*/

let movieInfo = ['interstellar', "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg", 5,
    "Cooper, a farmer turned astronaut, discovers a wormhole leading to potentially habitable planets. He joins a mission to save humanity, facing dangers and sacrifices. The mission's true goal is revealed, and Cooper makes a final, desperate effort to collect vital data from a black hole, ensuring humanity's survival."
]

let movieImage = document.querySelector(".movie-image")
movieImage.src = movieInfo[1]
movieImage.alt = movieImage[0]

let movieName = document.querySelector(".movie-name")
movieName.textContent = movieInfo[0]

let movieDescription = document.querySelector(".description")
movieDescription.textContent = movieInfo[3]

let movieRating = document.querySelector(".rating")

let stars = "";

	for(let j = 0; j < 5; j++){
		if (j < movieInfo[2]){
			stars += "★"
		}
		else{
			stars += "☆"
		}
	}
	movieRating.textContent = stars;
