$(document).ready(function(){

	var header = $('#head')
	var container= $('#container')
	var body = $('.divBody')
	var result = $('#result')
	var rock = $('#rock')
	var paper = $('#paper')
	var scissors = $('#scissors')
	var td = $('td')

	var arr = ['rock','paper','scissors']
	var compValue;
	var win=0
	var loses=0
	var tie=0
	var total=0

	function displayImages(imageSelect){
		switch(imageSelect){
			case 'rock':
				result.append('<img src="rock.jpg" alt="rock">')
				break
			case 'paper':
				result.append('<img src="paper.jpg" alt="paper">')
				break
			case 'scissors':
				result.append('<img src="scissors.jpg" alt="scissors">')
				break
		}

	}
	

	function gameFunction(userSelect){
		result.empty()
		console.log('inside gameFunction')
		compValue = arr[Math.floor(Math.random() * arr.length)]

		
		
		
		if(userSelect===compValue){
			tie++
			result.append('<h1 id="tie">ITS A TIE</h1>')
			
		
		}else if((userSelect === 'rock' && compValue ==='paper') || (userSelect === 'paper' && compValue === 'scissors') 
			|| (userSelect === 'scissors' && compValue === 'rock')){
			loses++
			result.append('<h1 id="loses">COMPUTER WINS</h1>')
			
			
		}else {
			win++
			result.append('<h1 id="win">USER WINS</h1>')

		}
		++total
		result.append("<h3>User	<span>Computer</span></h3>")
		
		//result.append("<h3>Computer</h3><br/><br/><br/><br/>")
		displayImages(userSelect)
		displayImages(compValue)
		td[0].innerHTML = win
		td[1].innerHTML = loses
		td[2].innerHTML = tie
		td[3].innerHTML = total


	}



	$('.styled').on('click',function(){
		header.hide()
		container.show()
	})

	$('#rock').on('click',function(){
		gameFunction('rock')
		result.show().delay(2000).fadeOut()

	})
	$('#paper').on('click',function(){
		gameFunction('paper')
		result.show().delay(2000).fadeOut()

	})
	$('#scissors').on('click',function(){
		gameFunction('scissors')
		result.show().delay(2000).fadeOut()

	})
	//body.show()
	//result.hide()
	$('#newGame').on('click',function(){
		td[0].innerHTML = 0
		td[1].innerHTML = 0
		td[2].innerHTML = 0
		td[3].innerHTML = 0
		result.empty()

	})
	$('#quit').on('click',function(){
		 location.reload();

	})
	

})