// Creates a variable called spans which contains all of the letters
var spans = document.getElementsByTagName("span")

// Adds an event listener to each letter
for(var i = 0; i < spans.length; i++) {
    spans[i].addEventListener("click", letterClicked);
}

// Changes the color of the letters clicke
function letterClicked (evt) {
    var letter = evt.target;
    letter.style.backgroundColor = "limegreen"
}