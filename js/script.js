function init(){

//making alert me as a button
// Get a reference to the entrybutton and entryinput element
var button = document.getElementById('entrybutton');
var inputText = document.getElementById('entryinput');

// Define a function to handle button clicks
function handleClick() {
  
  //Replace text output with input text value
  document.getElementById('textoutput').innerHTML = inputText.value;
  
  // Set the text content of the alert
  alert( "Jasmine Sarin:" + inputText.value);
  
}

// Add an event listener to the button
button.addEventListener('click', handleClick);
}
window.addEventListener('load', init);
