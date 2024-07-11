let blogArray = [];
function getBlogEntry() {
    return JSON.parse(localStorage.getItem('blogEntry'));
}

function init() {
    blogArray = getBlogEntry();
    for (i = 0; i < blogArray.length; i++) {
        var blog = blogArray[i];
        console.log(i, blog);
        createBlogSection(blog);
    }
}
function createBlogSection(blog) {
    const reuserName = blog.userName;
    const retitle = blog.title;
    const recontent = blog.content;
    let secEl = document.createElement('div');
    let titleEl = document.createElement('h2');
    let pEl = document.createElement('p');
    let p2El = document.createElement('p');
    titleEl.textContent = retitle;
    pEl.textContent = recontent;
    p2El.textContent = reuserName;
    secEl.appendChild(titleEl);
    secEl.appendChild(pEl);
    secEl.appendChild(p2El);
    document.getElementById('blog-container').appendChild(secEl);
    secEl.setAttribute('class', 'blog-Section');
    titleEl.setAttribute('style','font-size:25px; text-decoration:underline;');
    pEl.setAttribute('style', 'font-style:italic; font-size:15px;');
}
init();

const returnButton = document.getElementById('return');
returnButton.addEventListener('click', function (event) {
    event.preventDefault();
    openFormPage();
});
function openFormPage() {
    window.location.href = "index.html";
};