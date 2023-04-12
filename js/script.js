function init(){

//making alert me as a button
// Get a reference to the entrybutton 
var button = document.getElementById('entrybutton');


// Define a function to handle button clicks
function handleClick(){
  //creating a variable inputText to catch entryinput
  var inputText = document.getElementById('entryinput');
  
  //Replace text output with input text value
  document.getElementById('textoutput').innerHTML = inputText.value;
  
  // Set the text content of the alert
  alert( "Jasmine Sarin: " + inputText.value);
  
}

// Add an event listener to the button
button.addEventListener('click', handleClick);
}
window.addEventListener('load', init);
