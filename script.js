$(function() {
	var occupation = {
			programmer: [
				{
					name: 'meme',
					type: 'Funny'
				},
				{
					name: 'megabyte',
					type: 'Funny'
				},
				{
					name: 'sass',
					type: 'Funny'
				},
				{
					name: 'div',
					type: 'wtf'
				},
				{
					name: 'wifi',
					type: 'wtf'
				},
				{
					name: 'lorem',
					type: 'wtf'
				},
				{
					name: 'pixel',
					type: 'G-Rated'
				},
				{
					name: 'computer',
					type: 'G-Rated'
				},
				{
					name: 'typo',
					type: 'G-Rated'
				}
			],
			foodie: [
				{
					name: 'burger',
					type: 'Funny'
				},
				{
					name: 'cilantro',
					type: 'Funny'
				},
				{
					name: 'noodle',
					type: 'Funny'
				},
				{
					name: 'spoon',
					type: 'wtf'
				},
				{
					name: 'crouton',
					type: 'wtf'
				},
				{
					name: 'servingplate',
					type: 'wtf'
				},
				{
					name: 'broccoli',
					type: 'G-Rated'
				},
				{
					name: 'paprika',
					type: 'G-Rated'
				},
				{
					name: 'corn',
					type: 'G-Rated'
				}
			],
			athlete: [
				{
					name: 'sixpack',
					type: 'Funny'
				},
				{
					name: 'basketball',
					type: 'Funny'
				},
				{
					name: 'hogan',
					type: 'Funny'
				},
				{
					name: 'chafe',
					type: 'wtf'
				},
				{
					name: 'perspire',
					type: 'wtf'
				},
				{
					name: 'plank',
					type: 'wtf'
				},
				{
					name: 'dumbbell',
					type: 'G-Rated'
				},
				{
					name: 'stretch',
					type: 'G-Rated'
				},
				{
					name: 'shaq',
					type: 'G-Rated'
				}
			],

			artist: [
				{
					name: 'andywarhol',
					type: 'Funny'
				},
				{
					name: 'frida',
					type: 'Funny'
				},
				{
					name: 'monalisa',
					type: 'Funny'
				},
				{
					name: 'beret',
					type: 'wtf'
				},
				{
					name: 'palette',
					type: 'wtf'
				},
				{
					name: 'brush',
					type: 'wtf'
				},
				{
					name: 'dali',
					type: 'G-Rated'
				},
				{
					name: 'Monet',
					type: 'G-Rated'
				},
				{
					name: 'Pablo',
					type: 'G-Rated'
				}
			],

			identityCrisis: [
				{
					name: 'questionmark',
					type: 'Funny'
				},
				{
					name: 'rorschach',
					type: 'Funny'
				},
				{
					name: 'cat',
					type: 'Funny'
				},
				{
					name: 'bear',
					type: 'wtf'
				},
				{
					name: 'spider',
					type: 'wtf'
				},
				{
					name: 'ghost',
					type: 'wtf'
				},
				{
					name: 'blackhole',
					type: 'G-Rated'
				},
				{
					name: 'abyss',
					type: 'G-Rated'
				},
				{
					name: 'kafka',
					type: 'G-Rated'
				}
			]
		};
	var sizeSuffix = {
			small: [
				{
					suffix: '-ito',
				},
				{
					suffix: '-ee',
				}
				// {
				// 	suffix: '-ish',
				// }
			],
			large: [
				{
					suffix: '-o',
				},
				// {
				// 	suffix: '-ous',
				// },
				{
					suffix: '-esque',
				}
			]
		};

	// Allow user to select some selections
	$('form').on('submit', function(formEvent) {
		formEvent.preventDefault();
		// with those values, filter the occupation option, type option and size option
		var occupationChoice = $('input[name=occupation]:checked').val();
		var typeChoice = $('input[name=Type]:checked').val();
		var sizeChoice = $('input[name=size]:checked').val();
		//create variable to hold user's occupation choice
		var usersOccupationChoice = occupation[occupationChoice];

		//create variable to hold users's size choice
		var usersSizeChoice = sizeSuffix[sizeChoice];

		//create empty array to hold user's filtered choice
		var filteredOccupationChoice = [];
	
		//create for loop to run through the users occupation choice options
		for(var i = 0; i< usersOccupationChoice.length; i = i + 1) {
		//conditional statement that matches, then push into new filtered variable called filteredOccupationChoice
			if(typeChoice === usersOccupationChoice[i].type) {
				filteredOccupationChoice.push(usersOccupationChoice[i])
			}
		}
		//make variable to hold random index
		var randomIndex = Math.floor(Math.random() *
			filteredOccupationChoice.length );
		//make variable to hold user's random filtered occupation choice
		var randomChoice = filteredOccupationChoice [randomIndex];
		console.log(randomChoice);

		//make variable to hold random index of size choice
		//make variable to hold user's random filtered occupation choice

		var randomSizeIndex = Math.floor(Math.random() *
			usersSizeChoice.length );
		var randomSizeChoice = usersSizeChoice [randomSizeIndex];
		//if user picks small option, then suffix is cancatinated to randomIndex.title

		// var nameResult = randomChoice.concat(randomSizeChoice);
		var nameResult = randomChoice.name + randomSizeChoice.suffix;
		// When the user selects 'name my dog' button, hide the form and reveal the results section

		// var randomButton = '<button class="randomize">Randomize</button>'
		var resetButton = '<button class="reset">reset</button>'
		var img = `<img src="images/${randomChoice.name}.png">`

		$('main').html(`<h2 class="choice">${nameResult}</h2>${img} ${resetButton}`);

		$('.reset').on('click',function() {
		     location.reload();
		       });
		// $('button.randomize').on('click', function(formEvent) {
		// formEvent.preventDefault();

		// Allow user to choose different name if not satisfied with option

	}); // closing form submit
// 
	$('.occupation label p').click(function() {
	      $(".occupation label p.clicked").removeClass("clicked");
	      $(this).addClass('clicked');
	});

	$('.Type label p').click(function() {
	      $(".Type label p.clicked").toggleClass("clicked");
	      $(this).toggleClass('clicked');
	});

	$('.size label p').click(function() {
	      $(".size label p.clicked").toggleClass("clicked");
	      $(this).toggleClass('clicked');
	});
	
}); // doc ready closing


