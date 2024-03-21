const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const submitButton = document.querySelector("button");

function createBlog(event) {
  event.preventDefault ();
    const blog = {
      username: usernameInput.value,
      title: titleInput.value,
      content: contentInput.value
    };
    let blogs = localStorage.getItem('blogs');
    if (!blogs) {
        blogs = [];
    } else {
        blogs = JSON.parse(blogs);
    }

    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));

};
submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  if (usernameInput.value.trim() === '' || titleInput.value.trim() === '' || contentInput.value.trim() === '') {
      alert("Please Enter Valid Inputs.");
  } else {
      createBlog(event); 
      location.pathname='./blog.html';
  }
}); 




 













