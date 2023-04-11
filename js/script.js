
//Adding a console log event to tell us that the page has loaded
function onLoadEvent() {
  console.log("The page has finished loading!");
}
window.addEventListener("load", onLoadEvent);

// references to the button, text and output elements
function init(){
var button = document.getElementById("entrybutton");
var output = document.getElementById("textoutput");
var entryinput= document.getElementById("textentry");

  // Define a function to handle button clicks
  function handleClick() {
    // Get the value of the input element
    const inputValue = entryinput.value;
    // Set the text content of the output element
    output.innerText = `You entered: ${inputValue}`;
  }
}
// Add an event listener to the button
button.addEventListener("click", handleClick);
window.addEventListener('load', init);
