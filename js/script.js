function init(){

//making alert me as a button
// Get a reference to the entry button and input element
var button = document.getElementById('entrybutton');
var inputText = document.getElementById('entryinput');

// Define a function to handle button clicks
function handleClick() {
  
  //create a constant to catch the value of inputText variable
  const showText = inputText.value;
  
  //Replace text output with input text value
  document.getElementById('textoutput').innerHTML = inputText.value;
  
  // Set the text content of the alert
  alert( "Jasmine Sarin:" + ${inputValue});
  
}

// Add an event listener to the entry button
entryButton.addEventListener('click', handleClick);
}
window.addEventListener('load', init);
