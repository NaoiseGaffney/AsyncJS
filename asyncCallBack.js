/* === setTimeout() === */

/* = Iteration one with issue... */
/*
const posts = [
    { title: 'Post One', body: 'This is Post One.' },
    { title: 'Post Two', body: 'This is Post Two.' }
];

function getPost() {
    setTimeout(() => {
        let output;
        posts.forEach((posts) => {
            output += `<li>${posts.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createPost() {
    setTimeout(() => {
        posts.push(posts);
    },2000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(posts);
        callback();
    }, 2000);
}

getPost();

createPost({ title: 'Post Three', body: 'This is Post Three.' });
*/

/* = Iteration TWO with Solution: callback() */

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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 5000);
}

getPost(); // An array of 2 items, shown.

createPost({ title: 'Post Three', body: 'This is Post Three.' }, getPost); // An array of 3 items, shown.