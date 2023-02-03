const Basic = require("./basic.js");
const Page = require("./page.js");

class BlogPage extends Basic {
    blogSearch = "#search";
    blogEmail = "#Email";
    errorBlogEmail = '#Email_error';
    blogButtonSubscribe = 'button[type="submit"]';
    outputSearch = "#articles > div";    
}

module.exports = new BlogPage();
