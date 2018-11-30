// Now, create at least three functions that will return the following with an alert on click:
var out = document.getElementById("out")

// How many of the same HTML elements are on the page. (For example, if you included 10 < p > tags, it should return a statement that says something like, "There are 10 paragraph tags on this page.")
function countPage() {
	var count = document.getElementsByTagName('p').length
	var output = "There are " + count + " paragraph tags on this page"
	out.textContent = output
	return output
}

// How many elements are inside of your first ID

function countFirstId() {
	var count = document.getElementById("divOne").getElementsByTagName("p").length;
	var output = "There are " + count + " paragraph tags in div one"
	out.textContent = output
	return output
}

// How many elements are inside of your second ID

function countSecondId () {
	var count = document.getElementById("divTwo").getElementsByTagName("p").length;
	var output = "There are " + count + " paragraph tags in div two"
	out.textContent = output
	return output
}

// If you have additional IDs on the page, you may include additional click events.