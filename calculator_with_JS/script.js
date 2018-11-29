// Calculator
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(num){
	var result = num * num
	
	console.log("The result of squaring the number " + num + " is " + result + ".")

	return result
}

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(num){
	var result = num / 2
	
	console.log("Half of " + num + " is " + result + ".")

	return result
}

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(num1, num2){
	var result = (num1 / num2) * 100
	
	console.log(num1 + " is " + result + "% of "+ num2 + ".")

	return result
}

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172." Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(radius) {
	var pi = Math.PI

	var result = (pi * (radius * radius)).toFixed(2)
	//result = result
	
	console.log("The area for a circle with radius " + radius + " is " + result + ".")

	return result
}


// For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.

//Solution div element capture to output solution into
var solution = document.getElementById('solution')

//Square function event listener
document.getElementById('square-button').addEventListener('click', function() { solution.textContent = "Solution: " + squareNumber(document.getElementById('square-input').value) })

//Half function event listener
document.getElementById('half-button').addEventListener('click', function() { solution.textContent = "Solution: " + halfNumber(document.getElementById('half-input').value) })


//Percent function event listener
document.getElementById('percent-button').addEventListener('click', function() { solution.textContent = "Solution: " + percentOf(document.getElementById('percent1-input').value, document.getElementById('percent2-input').value) + "%" })


//Area function event listener
document.getElementById('area-button').addEventListener('click', function() { solution.textContent = "Solution: " + areaOfCircle(document.getElementById('area-input').value) })