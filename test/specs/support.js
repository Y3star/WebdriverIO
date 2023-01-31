const assert = require("assert");
const SupportPage = require("../pages/support.page.js");

beforeEach("Open page", async () => {
    await SupportPage.navigateTo("https://support.telnyx.com/en/");
});

describe("Search results tests", () => {
    it("Verification Support page, Expect url and title", async () => {
        await expect(browser).toHaveUrl("https://support.telnyx.com/en/");
        await expect(browser).toHaveTitle("Telnyx Support");
    });
    it("Result found", async () => {
        await SupportPage.fillInput(SupportPage.searchInput, "a");
        await browser.keys("\uE007");
        assert.strictEqual(
            await SupportPage.getElementText(SupportPage.outputSearch),
            "Search results for: a"
        );
        let lengthList = await SupportPage.getList(SupportPage.searchList);
        await console.log("Right now length list: " + lengthList);
    });
    it("Result not found", async () => {
        await SupportPage.fillInput(SupportPage.searchInput, "-");
        await browser.keys("\uE007");
        assert.strictEqual(
            await SupportPage.getElementText(SupportPage.outputSearch),
            "We couldn't find any articles for: -"
        );
        let lengthList = await SupportPage.getList(SupportPage.searchList);
        await console.log("Right now length list: " + lengthList);
    });
});
