const Basic = require("./basic.js");

class BlogPage extends Basic {
    blogSearch = "#search";
    blogEmail = "#Email";
    errorBlogEmail = '#Email_error';
    blogButtonSubscribe = 'button[type="submit"]';
    outputSearch = "#articles > div";    
}

module.exports = new BlogPage();
