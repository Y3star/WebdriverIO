const Basic = require("./basic.js");
const Page = require("./page.js");
const Helper = require("../helpers/helper.js");

const emailInput = '[aria-label="loginForm"] [name="email"]';
const passwordInput = '[aria-label="loginForm"] [name="password"]';
const checkBox = '[class*="CheckboxField_customCheck"]';
const submitButton = '[aria-label="loginForm"] [type="submit"]';
const tab = 'button[name="sso"]';
const emailSsoInput = '[aria-label="ssoForm"] [name="email"]';
const submitButtonSignOn = '[aria-label="ssoForm"] button[type="submit"]';

class LoginPage extends Basic {
    errorMessageRequired =
        '[aria-label="loginForm"] label div > div:nth-child(2)';
    errorMessage = '[data-testid="login.signin"] [type="error"] div span';
    errorMessageRequiredSignOn = '[name="sso"] label div > div:nth-child(2)';
    loginForm = '[data-testid="login.signin"]';

    async fillLoginForm(
        email = Helper.generateData(7, "email", true),
        password = Helper.generateData(12, "pass"),
        clickCheckBox = true
    ) {
        await Page.setValue(emailInput, email);
        await Page.setValue(passwordInput, password);
        if (clickCheckBox) {
            await Page.click(checkBox);
        }
        await Page.click(submitButton);
    }

    async fillSingleSignOnForm(email = Helper.generateData(8, "email", true)) {
        await Page.click(tab);
        await Page.setValue(emailSsoInput, email);
        await Page.click(submitButtonSignOn);
    }
}

module.exports = new LoginPage();
