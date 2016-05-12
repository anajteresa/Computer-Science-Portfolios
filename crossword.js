var spans = document.getElementsByTagName("span")

for(var i = 0; i < spans.length; i++) {
    spans[i].addEventListener("click", letterClicked);
}

function letterClicked (evt) {
    var letter = evt.target;
    letter.style.backgroundColor = "yellow"
}