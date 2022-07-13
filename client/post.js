document.addEventListener("DOMContentLoaded", init);

function init() {
    fetchId = window.location.href.split("?")[1]
    fetch(`http://localhost:3000/posts/${fetchId}`)
        .then((resp) => resp.json())
        .then((result) => {
            title = document.getElementById("title")
            title.textContent = result.title
            author = document.getElementById("author")
            author.textContent = "by " + result.author
            content = document.getElementById("content")
            content.textContent = result.content
        })
        .catch(err => {
            return ("Couldn't find search term");
        });
}
