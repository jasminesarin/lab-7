
//Adding a console log event to tell us that the page has loaded
function onLoadEvent() {
  console.log("The page has finished loading!");
}
window.addEventListener("load", onLoadEvent);


//making alert me as a button
// Get a reference to the entry button element
var button = document.getElementById("entrybutton");

// Define a function to handle button clicks
function handleClick() {
  alert("Button clicked!");
}

// Add an event listener to the entry button
entryButton.addEventListener("click", handleClick);




window.addEventListener('load', init);
