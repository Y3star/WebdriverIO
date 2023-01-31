const Basic = require("./basic.js");
const Page = require("./page.js");

class SupportPage extends Basic {
    searchInput = "input[name='q']";
    searchList = '.search-results__row';
    outputSearch = '[class="section__content"]';

    async getList(selector) {
        return await Page.getListSize(selector);
    }
}

module.exports = new SupportPage();
