const { Given, When, Then } = require('@wdio/cucumber-framework');

const BookTablePage = require('../../pageobjects/BosiackaWiktoria/book-table.page');
const MenuPage = require('../../pageobjects/BosiackaWiktoria/menu.page');
const LoginPage = require('../../pageobjects/BosiackaWiktoria/login.page');


Given(/^I am on a book table page$/, async () => {
    await BookTablePage.open();
});

When(/^I put (.+); (\w+); (.+); (\d+) in fields$/, async (date, name, email, guests) => {
    await BookTablePage.bookatable(date, name, email, guests);
});

Then(/^I booked a table$/, async () => {

    await BookTablePage.FlashAlert.waitForExist({timeout: 5000});
    await expect(BookTablePage.FlashAlert).toHaveTextContaining("Table succesfully booked");

});





Given(/^When i'm on menu page$/, async () => {
    await MenuPage.open();
    await browser.pause(1000);
});

When(/^I click on favourites$/, async () => {
    await MenuPage.filterOption.click();
    await MenuPage.FavouritesCheckbox.click();
    await MenuPage.btnSubmit.click();
    await browser.pause(1000);
});

Then(/^Nothing will show up$/, async () => {
    await expect(MenuPage.favouriteList).toBeElementsArrayOfSize(0);
});




Given(/^When I'm on a home page$/, async () => {
    await browser.url("/");

});

When(/^I log with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.btnLogin.click();
    await browser.pause(1000);
    await LoginPage.login(username, password);
});

When(/^I'll refresh the page$/, async () => {
    await browser.refresh();
});

Then(/^I'm still logged in with (\w+)$/, async (username) => {
    await expect(LoginPage.loggedUser).toBeExisting();
    await expect(LoginPage.loggedUser).toHaveTextContaining(username);
});
