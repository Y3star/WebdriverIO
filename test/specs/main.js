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

describe("Verification Main page", () => {
    it("Expect url and title in Main page", async () => {
        await expect(browser).toHaveUrl("https://telnyx.com/");
        await expect(browser).toHaveTitle(
            "Telnyx | Communication APIs for Seamless Connectivity"
        );
        await MainPage.clickElement(MainPage.closeCookiesButton);
    });
});
describe("Checking the header button on the homepage", () => {
    arrayMenusTitle.forEach((element) => {
        it(`Verify header menu "${element}" point`, async () => {
            await MainPage.buttonsCheck(element);
        });
    });
});
