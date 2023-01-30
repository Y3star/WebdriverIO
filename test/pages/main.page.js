const Basic = require("./basic.js");
const Page = require("./page.js");

class MainPage extends Basic {
    async buttonsCheck(buttonName) {
        let selector = `//ul/li/span/span[text()="${buttonName}"]`;
        await Page.isElementExisting(selector);
        await Page.isElementDisplayed(selector);
        await Page.isElementClickable(selector);
        await $(selector).moveTo(30,60);
    }
}

module.exports = new MainPage();
