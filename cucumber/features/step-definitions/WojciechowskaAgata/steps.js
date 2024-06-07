const { Given, When, Then } = require('@wdio/cucumber-framework');

const MenuPage = require('../../pageobjcts/WojciechowskaAgata/menu.page');
const LoginPage = require('../../pageobjcts/WojciechowskaAgata/login.page');

// Scenario: Verification of case being logged in and refreshing the page 
Given(/^I am at the menu page to register$/, async () => {
    await MenuPage.open();
    await LoginPage.icon.waitForDisplayed({ timeout: 5000 })
});

When(/^Register$/, async() => {
    const dateOfBirth = (Math.floor(Math.random() * 30 + 1)).toString() + (Math.floor(Math.random() * 12 + 1)).toString() + (Math.floor(Math.random() * 2010 + 1900)).toString()
    const username = 'a' + dateOfBirth.toString()
    const email = 'a@b.com'
    const pass = 'zxc123'
    await LoginPage.icon.click()

    await LoginPage.signupPanel.click()

    await LoginPage.signup_username.waitForDisplayed({ timeout: 3000 })
    await expect(LoginPage.signup_cfmPassword).toExist()

    await LoginPage.register(username, email, pass)

    await expect(LoginPage.popup_info).toExist()
    await expect(LoginPage.popup_info).toHaveTextContaining('Register successful')
});

When(/^sign-up$/, async() => {
    await LoginPage.icon.click();
    await LoginPage.login(username, pass);
    await expect(LoginPage.username_profile).toHaveTextContaining('user0')
});

When(/^refresh the website$/, async() => {
    await browser.refresh();
});

Then(/^I should be still logged in$/, async() => {
    await expect(LoginPage.username_profile).not.toBeExisting()
});


// Scenario: Applying "noodle" filter on menu 
Given(/^I am at the menu page$/, async () => {
    await MenuPage.open()
    await expect(MenuPage.menu).toExist()
});

When(/^I apply the \"noodle\" filter$/, async() => {
    await MenuPage.menu.click()

    await expect(MenuPage.noodleCheckbox).toExist()
    await MenuPage.noodleCheckbox.click()

    await MenuPage.applyFilter.click()
});

Then(/^I should see one noodle position$/, async() => {
    await expect(MenuPage.menuElements).toBeElementsArrayOfSize(1)
});

// Scenario: Placing an order with not existing "BookingID" 
Given(/^I am at the menu page \(wait for menu\)$/, async () => {
    await MenuPage.open()
    await expect(MenuPage.menuElements).toExist()
});

When(/^I click position on menu and give nonexistent BookingID$/, async() => {
    await MenuPage.menuElementToCart.click()
    await MenuPage.enterBookingID((Math.floor(Math.random() * 200000 + 100000)).toString() + 'abc')
    await MenuPage.acceptTermsCheck.click()
    await MenuPage.sendButton.click()
});

Then(/^I should get an error message$/, async() => {
    await expect(MenuPage.errorPopup).toExist()
    await expect(MenuPage.errorPopup).toHaveTextContaining('[object Object]')
});
