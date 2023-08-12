const submitButton = document.getElementById("submitButton");
const blogInput = document.getElementById("blogInput");

submitButton.addEventListener("click", function() {
    console.log("Button Clicked")
    const blogText = blogInput.value.trim();
    if (blogText !== "") {
        // Store the blog text in local storage
        localStorage.setItem("blogText", blogText);
        // Redirect to the display page
        window.location.href = "display.html";
    }
});

