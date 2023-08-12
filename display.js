const displayBlog = document.getElementById("displayBlog");
const displayDate = document.getElementById("displayDate");
const displayTitle = document.getElementById("displayTitle");


// Get the stored blog text from local storage
const storedBlog = localStorage.getItem("blogText");
const storedDate = localStorage.getItem("dateText");
const storedTitle = localStorage.getItem("titleText");


if (storedBlog) {
    // Create a new paragraph element to display the blog
    const blogElement = document.createElement("p");
    blogElement.textContent = storedBlog;
    displayBlog.appendChild(blogElement);
} else {
    // No blog text found, display a message
    const noBlogElement = document.createElement("p");
    noBlogElement.textContent = "No blog found.";
    displayBlog.appendChild(noBlogElement);
}

if (storedDate) {
    // Create a new paragraph element to display the blog
     dateElement = document.createElement("h4");
    dateElement.textContent = storedDate;
    displayDate.appendChild(dateElement);
} else {
    // No blog text found, display a message
     noDateElement = document.createElement("h4");
    noDateElement.textContent = "No date found.";
    displayTitle.appendChild(noDateElement);
}
if (storedTitle) {
    // Create a new paragraph element to display the blog
     titleElement = document.createElement("h2");
    titleElement.textContent = storedTitle;
    displayTitle.appendChild(titleElement);
} else {
    // No blog text found, display a message
     noTitleElement = document.createElement("h2");
    noTitleElement.textContent = "No title found.";
    displayTitle.appendChild(noTitleElement);
}
