const Page = require("./page.js");

module.exports = class Basic {
    closeCookiesButton = '[aria-label="close and deny"]';


    async navigateTo(url) {
        await Page.openUrl(url);
    }
    async getElementText(selector) {
        return await $(selector).getText();
    }
    async getElementTextIndex(selector, index) {
        return await $$(selector)[index].getText();
    }
    async clickElement(selector) {
        try {
            await Page.click(selector);
        } catch (err) {
            console.log("Caught a bug: " + err);
        }
    }
    async elementIsExist(selector) {
        try {
            await Page.isElementExisting(selector);
        } catch (err) {
            console.log("Element not exist: " + err);
        }
    }
    async elementIsDisplayed(selector) {
        await Page.isElementDisplayed(selector);
    }
};
