var randomLetter;

		var timerID;

		var startButton = document.getElementById("start");
		startButton.addEventListener("click", onPress);

		function onPress()
		{
			randomLetter = Math.floor(Math.random() * 26) + 97;
			console.log(randomLetter);

		var newP = document.createElement("p");
			newP.id = "timer";
			    newPersonText = document.createTextNode("10");
			        newP.appendChild(newPersonText);
			            document.body.appendChild(newP);

			document.addEventListener("keydown", guess);
			timerID = setInterval(decrement, 1000);
			setTimeout(displayWweWin, 15000);
		}
		function guess()
		{
			var currentGuess = parseInt(event.key.charCodeAt());

			if(currentGuess >= 65 && currentGuess <= 90)
			{
				currentGuess = currentGuess + 32;
			}
			if(currentGuess == randomLetter)
			{
				clearInterval(timerID);
				document.removeEventListener("keydown", guess);
				alert("You found the letter!");
				document.getElementById("insert").innerHTML="You picked letter " + event.key + ". You got it right!";
			}
		}
		function decrement()
		{
			var timerP = document.getElementById("timer");
			var timerValue = timerP.childNodes[0].nodeValue;

			if(timerValue > 0)
			{
				timerValue = parseInt(timerValue) - 1;
				timerP.childNodes[0].nodeValue = timerValue;
			}
			else
			{
				clearInterval(timerID);
				
				document.removeEventListener("keydown", guess);
				alert("You lose!");
				document.createTextNode("You lose! Try again.");
				document.getElementById("insert").innerHTML="Sorry! Try again.";
			}
		}
		
		function displayWweWin()
		{
			var wweWin = document.createElement("img");
			wweWin.src = "https://media.giphy.com/media/2RGhmKXcl0ViM/giphy.gif";
			wweWin.alt = "WWE Win";
			document.body.appendChild(wweWin);
		}