const assert = require("assert");
const SignUpPage = require("../pages/signup.page.js");
const arrayError = [
    "Be at least 12 characters long",
    "Contain at least one number",
    "Contain at least one symbol",
    "Contain at least one upper-case letter",
];
beforeEach("Open page", async () => {
    await SignUpPage.navigateTo("https://telnyx.com/sign-up");
});

describe("Sign Up page form", () => {
    it("Verification Sign Up page, Expect url and title, and wait form in Sign Up page", async () => {
        await SignUpPage.clickElement(SignUpPage.closeCookiesButton);
        await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
        await expect(browser).toHaveTitle("Sign Up | Telnyx");
        await SignUpPage.elementIsExist(SignUpPage.signUpForm);
    });
    it("Positive Sign Up", async () => {
        await SignUpPage.fillSignUpForm();
    });
    it("Negative Sign Up without email", async () => {
        await SignUpPage.fillSignUpForm("");
        assert.strictEqual(
            await SignUpPage.getElementText(SignUpPage.errorEmail),
            "This field is required."
        );
    });
    it("Negative Sign Up with not valid email", async () => {
        await SignUpPage.fillSignUpForm("1 gmail.com");
        assert.strictEqual(
            await SignUpPage.getElementText(SignUpPage.errorEmail),
            "Please enter a valid email address."
        );
    });
    it("Negative Sign Up with not valid full name", async () => {
        await SignUpPage.fillSignUpForm(
            "Octane@gmail.com",
            " ",
            "123@!Qwwertw"
        );
        assert.strictEqual(
            await SignUpPage.getElementText(SignUpPage.errorFullName),
            "This field is required."
        );
    });
    it("Negative Sign Up with not valid password", async () => {
        await SignUpPage.fillSignUpForm("Octane@gmail.com", "Mary", " ");
        for (let i = 0; i < arrayError.length; i++) {
            assert.strictEqual(
                await SignUpPage.getElementTextIndex(SignUpPage.errorPass, i),
                arrayError[i]
            );
        }
    });
    it("Negative Sign Up with click on checkBoxes", async () => {
        await SignUpPage.fillSignUpForm(
            "Octane@gmail.com",
            "Mary",
            "123!@312qQw1",
            false
        );
        assert.strictEqual(
            await SignUpPage.getElementText(SignUpPage.errorCheckBox),
            "Please accept the terms and conditions"
        );
    });
    it("Check promo field", async () => {
        await SignUpPage.promoIsDisplayed();
    });
});
