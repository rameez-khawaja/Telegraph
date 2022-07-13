const db = connect("mongodb://localhost:27017/shelter")

db.posts.insertMany([
    { title: "post 1", author: "me", content: "string" },
    { title: "post 2", author: "me", content: "string" },
    { title: "post 3", author: "me", content: "string" },
    { title: "post 4", author: "me", content: "string" }
])
