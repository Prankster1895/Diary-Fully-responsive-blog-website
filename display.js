const displayBlog = document.getElementById("displayBlog");

// Get the stored blog text from local storage
const storedBlog = localStorage.getItem("blogText");

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