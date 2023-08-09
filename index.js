let searchInput = document.getElementById("searchInput");
let SearchBar = document.getElementsByTagName("button")[0];
let searchResults = document.getElementsByClassName("Homearticle");


SearchBar.addEventListener("click", function () {
    console.log("Button clicked!");
    searchText = searchInput.value.trim().toLowerCase();
    for (let i = 0; i < document.getElementsByClassName("Homearticle").length; i++) {
        blogTitle = document.getElementsByClassName("Homearticle")[i].querySelector('.homeArticlecontent').textContent.toLowerCase();
        blogElement = document.getElementsByClassName("Homearticle")[i];
        if (blogTitle.includes(searchText)) {
            switch (i) {
                case 0:
                    location.href = "/blog.html"
                    break;
                case 1:
                    location.href = "/blog1.html"
                    break;
                case 2:
                    location.href = "/blog2.html"
            } // Show the blog
        }
        else {
            location.href = "/search.html"
        }

    }

})
