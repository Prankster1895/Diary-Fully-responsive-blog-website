const submitButton = document.getElementById("submitButton");
const blogInput = document.getElementById("blogInput");
const dateInput = document.getElementById("Date");
const titleInput = document.getElementById("Title");

submitButton.addEventListener("click", function() {
    console.log("Button Clicked")
    const blogText = blogInput.value.trim();
    dateText = dateInput.value.trim();
    titleText = titleInput.value.trim();
    if (blogText !== "" && dateText !="" ) {
        // Store the blog text in local storage
        localStorage.setItem("blogText", blogText);
        localStorage.setItem("dateText", dateText);
        localStorage.setItem("titleText", titleText);

        // Redirect to the display page
        window.location.href = "display.html";
    }
});
