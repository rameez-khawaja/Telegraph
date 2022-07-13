let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let content = document.getElementById("content").value
    let array ={title: "", author: "", content: ""}
    array.title = title
    array.author= author
    array.content = content
    fetchFunction(array)
})

async function fetchFunction (array) {
    options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(array)
    }
    await fetch("http://localhost:3000/posts", options)

    fetch("http://localhost:3000/posts")
        .then((resp) => resp.json())
        .then((result) => {
            postLength = result.posts.length
            newPostId = result.posts[postLength-1].id
            window.location.href=`post.html?${newPostId}`
        })
        .catch(err => {
            return ("Couldn't find search term");
        });
}
