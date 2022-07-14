document.addEventListener("DOMContentLoaded", init);

function init() {
    fetchId = window.location.href.split("?")[1]
    fetch(`http://localhost:3000/posts/${fetchId}`)
        .then((resp) => resp.json())
        .then((result) => {
            if (result.title!=undefined){
                title = document.getElementById("title")
                title.textContent = result.title
                author = document.getElementById("author")
                author.textContent = "by " + result.author
                content = document.getElementById("content")
                content.textContent = result.content
            } else {
                title = document.getElementById("title")
                title.textContent = "Post not found"
            }
        })
        .catch(err => {
            return ("Couldn't find search term");
        });
}
