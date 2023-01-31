const assert = require("assert");
const MainPage = require("../pages/main.page");

const arrayMenusTitle = [
    "Products",
    "Solutions",
    "Resources",
    "Company",
    "Pricing",
];

beforeEach("Open page", async () => {
    await MainPage.navigateTo("/");
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
