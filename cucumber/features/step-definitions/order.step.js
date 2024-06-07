const { Given, When, Then } = require('@wdio/cucumber-framework');

const MenuPage = require('../pageobjects/menu.page');
const HomePage = require('../pageobjects/home.page');

Given(/^I am on the menu page$/, async () => {
    await MenuPage.open();
});

When(/^I click ADD TO ORDER button$/, async () => {
    await MenuPage.btnAddOrder.click();
});

Then(/^I should see a pop up menu with an item added to the cart$/, async () => {
    await expect(MenuPage.orderName).toExist();
});



When(/^I click the SORT BY button, pick LIKES, click APPLY FILTERS button$/, async () => {
    await MenuPage.btnSortMenu.click();
    await MenuPage.btnSortLikes.click();
    await MenuPage.btnApplyFilters.click();
});


Then(/^I should see the menu page with items sorted by Likes$/, async () => {
    await MenuPage.firstSortedItem.waitForDisplayed({ timeout: 5000 });
    await expect(MenuPage.firstSortedItem).toHaveText('BEER');
});




Given(/^I am on the home page and log in as user0$/, async () => {
    await HomePage.open();
    await HomePage.btnLogin.click();
    await HomePage.login('user0', 'password');
    await HomePage.btnSubmitLogin.click();
});

When(/^I click Set up two factor authentication$/, async () => {
    await HomePage.btnAccount.waitForDisplayed({ timeout: 5000 });
    await HomePage.btnAccount.click();
    await HomePage.btnSetting.click();
    await HomePage.btnSwitch.click();
});

Then(/^I should see a QR code$/, async () => {
    await expect(HomePage.QRcode).toExist();
});