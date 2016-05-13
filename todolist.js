//This is the part were it gets the elements by id of the todolist, myform and newitem
var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem');
// dropdown menu is a list of items that appear when clicking on a button or text selection   
var dropdown = document.getElementById('dropdown');
//This is for the color button were it says red,blue and green you can chage it
var colors = document.getElementById('Colors');

//This is for the submit button so it works
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div style="color:' + dropdown.value + '">' + text + '</div>';
  evt.preventDefault();
}, false);



//This crosses the things you write in the box when you submit it and touch it
todo.addEventListener('click',function(evt){
  var tar = evt.target;
  if(tar.style.textDecoration === "line-through"){
    tar.parentNode.removeChild(tar);
  }else{
    tar.style.textDecoration = "line-through"
  }
  evt.perventDefault();
}, false);