const backButtonEl = document.getElementById('backButtonElement');
const changeLightEl = document.getElementById('changeLightElement')
const body = document.querySelector('body');
// Retrieve data from local storage
const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

// Get the element where you want to display the blog posts
const postsContainer = document.getElementById('posts-container');

// Render blog posts on the webpage

    for (let i = 0; i < blogs.length; i++) {
        const post = blogs[i];

    const postElement = document.createElement('div');
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <h3>${post.username}</h3>
        <textbox>${post.content}</textbox>
    `;
    postsContainer.appendChild(postElement);
};


let isDark = true;

changeLightEl.addEventListener('click', function() {
    if (isDark) {
        body.style.backgroundColor = '#d9e9e8';
        body.style.color = '#1a1a1a';
        isDark = !isDark;
    } else {
        body.style.backgroundColor = '#1a1a1a';
        body.style.color = '#d9e9e8';
        isDark = !isDark;
    }
});
backButtonEl.addEventListener('click', function() {
    window.location.href = 'https://wkromrei.github.io/challenge-4/index.html';
})
