let textInput = document.getElementById("Compose");
let displayButton = document.getElementById("Submit");
const displayText = document.getElementById("displayText");

// Add click event listener to the button
displayButton.addEventListener("click", function () {
    console.log("Button clicked");
    // Get the text from the input and display it in the paragraph element
    const inputText = textInput.value;
    displayText.textContent = "You typed: " + inputText;
});