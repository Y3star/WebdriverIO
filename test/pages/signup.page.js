const Basic = require("./basic.js");
const Page = require("./page.js");
const Helper = require("../helpers/helper.js");

const emailInputSignUp = "#email";
const passwordInputSignUp = "#password";
const fullNameInputSignUp = "#full_name";
const checkBoxIAgree = '[aria-labelledby="terms-label"] rect';
const checkBoxIWant = '[aria-label="signup-form"] div:nth-child(2) rect';
const createAcc = 'div button[type="submit"]';
const promoLink = '[aria-label="signup-form"] div > div div button';
const inputId = "#promo_code";

class SignUpPage extends Basic {
    errorEmail = "#email_error";
    errorPass = '#password_requirements [aria-hidden="false"]';
    errorFullName = "#full_name_error";
    errorCheckBox = "#terms_and_conditions_error div";
    signUpForm = '[aria-label="signup-form"]';

    async fillSignUpForm(
        emailSignUp = Helper.generateData(6, "email", true),
        fullNameSignUp = Helper.generateData(6, true),
        passwordSignUp = Helper.generateData(20, "pass", false),
        clickCheckBoxSignUp = true
    ) {
        await Page.setValue(emailInputSignUp, emailSignUp);
        await Page.setValue(
            fullNameInputSignUp,
            `${fullNameSignUp} ${fullNameSignUp}`
        );
        await Page.setValue(passwordInputSignUp, passwordSignUp);
        if (clickCheckBoxSignUp) {
            await Page.click(checkBoxIAgree);
            await Page.click(checkBoxIWant);
        }
        await Page.click(createAcc);
    }

    async promoIsDisplayed(promo = Helper.generateData(10, true)) {
        await Page.click(promoLink);
        await Page.isElementDisplayed(inputId);
        await Page.setValue(inputId, promo);
    }
}

module.exports = new SignUpPage();
