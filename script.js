var movieApp = {};
var mainUrl = 'https://api.themoviedb.org/3'
var apiKey = '0b1c7c5c2394feebe7dae33c9fcadf2b'
movieApp.movieResults = [];

//request movie data from API
movieApp.getData = function(genreID){
	$.ajax({
		url: mainUrl + '/discover/movie',
		method: 'GET',
		dataType: 'jsonp',
		data: {
			api_key: apiKey,
			format: 'json',
			with_genres: genreID,
			with_cast: 31//TOM HANKS!!!
		}
	})
	.done(function(res){
		var movieResults = res.results;//saving this so I can access it globally

			//make function for random index
			var findRandomIndex = function(){
				return Math.floor(Math.random() *
				movieResults.length);
			};

			//call randomIndex function
			var randomIndex = findRandomIndex();
			movieApp.displayMovie(movieResults[randomIndex]);
	})
};//end of getData function

movieApp.displayMovie = function(movieResult){
	console.log(movieResult);

	//create button to reload the page
	var resetButton = '<button class="reset">try again</button>'

	//display movie result on page
	$('main').html(`<h2 class="choice">${movieResult.original_title}</h2>`);
	$('main').append(`<p class="desc">${movieResult.overview}</p>${resetButton}`);

	//change background image to poster_path
	var moviePath = `url('http://image.tmdb.org/t/p/original/${movieResult.poster_path}')`
	$('body').css('background', moviePath);
	$('body').css('background-repeat', 'no-repeat');
	$('body').css('background-size', 'contain');
	$('body').css('background-position', 'center right');
	$('body').css('background-color', 'black');
	$('footer').css(`display`, 'none');

	//function that on click, reset button reloads page
	$('.reset').on('click',function(){
		location.reload();
	});
};

//event listener captures user input
movieApp.formListener = function(){
	$('form').on('submit', function(formEvent) {
		formEvent.preventDefault();

		//create variable to store user's choice
		var genreID = $('input[name=question]:checked').val();
		movieApp.getData(genreID);
	});
};//end of formListener function

// $('.question label p').click(function() {
// 	$(".question p.clicked").removeClass("clicked");
// 	// $(this).addClass('clicked');
// 	$('.question label p')
// });

//when page loads get data
movieApp.init = function(){
	movieApp.formListener();
};

//document ready
$(document).ready(function(){
	movieApp.init();
});