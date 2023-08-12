let searchInput = document.getElementById("searchInput");
let SearchBar = document.getElementsByTagName("button")[0];
let searchResults = document.getElementsByClassName("Homearticle");
let f=0;


SearchBar.addEventListener("click", function () {
    console.log("Button clicked!");
    searchText = searchInput.value.trim().toLowerCase();
    for (let i = 0; i < document.getElementsByClassName("Homearticle").length; i++) {
        blogTitle = document.getElementsByClassName("Homearticle")[i].querySelector('.homeArticlecontent h3').textContent.toLowerCase();
        blogElement = document.getElementsByClassName("Homearticle")[i];
        if (blogTitle.includes(searchText)) {
            f=1;
            switch (i) {
                case 0:
                    window.location.href = "blog.html";
                    break;
                case 1:
                    window.location.href = "blog1.html";
                    break;
                case 2:
                    window.location.href = "blog2.html";
                    break;
                default:
                    window.location.href = "search.html";
            } // Show the blog
        }
        
        

    }
    if(f==0){
        window.location.href = "search.html";
        }   

})
