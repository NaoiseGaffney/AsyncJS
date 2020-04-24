/* === PromiseAll() === */

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

// getPost(); // An array of 2 items, shown.

// createPost({ title: 'Post Three', body: 'This is Post Three.' }).then(getPost).catch(error => console.log(error)); // An array of 3 items, shown.

const promise1 = Promise.resolve("Hullo, hullo!");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 5000, "We're done!"));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json));
Promise.all([promise1, promise2, promise3]).then(values => console.log(values));