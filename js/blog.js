
// Retrieve data from local storage
const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

// Get the element where you want to display the blog posts
const postsContainer = document.getElementById('posts-container');

// Render blog posts on the webpage

    for (let i = 0; i < blogs.length; i++) {
        const post = blogs[i];


    const postElement = document.createElement('div');
    postElement.innerHTML = `
        <p>${post.username}</p>
        <p>${post.title}</p>
        <p>${post.content}</p>
    `;
    postsContainer.appendChild(postElement);
};




