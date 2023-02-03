const assert = require("assert");
const LoginPage = require("../pages/login.page.js");
const helper = require('../helpers/helper.js');
const envURLs = helper.parseJsonFile('./environments/env.json');

beforeEach("Open page", async () => {
    await LoginPage.navigateTo(envURLs.LOG_IN_URL);
});

describe("Log In page form", () => {
    it("Verification Log In page,Expect url and title , and wait form in Log In page", async () => {
        await expect(browser).toHaveUrl(
            "https://portal.telnyx.com/#/login/sign-in"
        );
        await expect(browser).toHaveTitle("Login / Telnyx Customer Portal");
        await LoginPage.elementIsExist(LoginPage.loginForm);
    });

    it("Positive Log In", async () => {
        await LoginPage.fillLoginForm();
    });
    it("Negative Log In with not valid email", async () => {
        await LoginPage.fillLoginForm("fake gmail.com", "1233Fasdkhj");
        assert.strictEqual(
            await LoginPage.getElementText(LoginPage.errorMessageRequired),
            "Please enter a valid email address."
        );
    });
    it("Negative Log In with not valid password", async () => {
        await LoginPage.fillLoginForm("BatmenMail@gmail.com", "");
        assert.strictEqual(
            await LoginPage.getElementText(LoginPage.errorMessageRequired),
            "Required"
        );
    });
    it("Negative Log In with not click on checkBox", async () => {
        await LoginPage.fillLoginForm(
            "BatmenMail@gmail.com",
            "qwertyQwe123x",
            false
        );
        assert.strictEqual(
            await LoginPage.getElementText(LoginPage.errorMessage),
            "That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again."
        );
    });
    it("Positive Single Sign On", async () => {
        await LoginPage.fillSingleSignOnForm();
    });
    it("Negative Single Sign On with not valid email", async () => {
        await LoginPage.fillSingleSignOnForm("BatmenMail gmail.com");
        assert.strictEqual(
            await LoginPage.getElementText(
                LoginPage.errorMessageRequiredSignOn
            ),
            "Please enter a valid email address."
        );
    });
});
