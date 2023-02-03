const MainPage = require("../pages/main.page");
const helper = require('../helpers/helper.js');
const envURLs = helper.parseJsonFile('./environments/env.json');

const arrayMenusTitle = [
    "Products",
    "Solutions",
    "Resources",
    "Company",
    "Pricing",
];

beforeEach("Open page", async () => {
    await MainPage.navigateTo(envURLs.MAIN_URL);
});

describe("Checking the header button on the homepage", () => {
    it("Verification Main page, Expect url and title", async () => {
        await expect(browser).toHaveUrl("https://telnyx.com/");
        await expect(browser).toHaveTitle(
            "Telnyx | Communication APIs for Seamless Connectivity"
        );
        await MainPage.clickElement(MainPage.closeCookiesButton);
    });

    arrayMenusTitle.forEach((element) => {
        it(`Verify header menu "${element}" point`, async () => {
            await MainPage.buttonsCheck(element);
        });
    });
});
