const Basic = require("./basic.js");

class BlogPage extends Basic {
    blogSearch = "#search";
    blogEmail = "#Email";
    errorBlogEmail = '#Email_error';
    blogButtonSubscribe = 'button[type="submit"]';
    outputSearch = "#articles > div:first-of-type";    
}

module.exports = new BlogPage();
