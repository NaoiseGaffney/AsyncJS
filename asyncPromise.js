/* === Promise() === */

/* = Iteration one with issue... */

let posts = [
    { title: 'Post One', body: 'This is Post One.' },
    { title: 'Post Two', body: 'This is Post Two.' }
];

function getPost() {
    setTimeout(() => {
        let output;
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false; // Testing catching or error.

            if(!error) {
                resolve();
            } else {
                reject("Error: Something went wrong... :-( ...");
            }
        }, 5000);
    });
}

getPost(); // An array of 2 items, shown.

createPost({ title: 'Post Three', body: 'This is Post Three.' }).then(getPost).catch(error => console.log(error)); // An array of 3 items, shown.