const { Given, When, Then } = require('@wdio/cucumber-framework');

const MenuPage = require('../../pageobjects/ArkadiuszJanusz/menu.page');
const HomePage = require('../../pageobjects/ArkadiuszJanusz/home.page');

Given('I am on my restaurant page', async () => {
    await HomePage.open();
});

When('I add beef to my order', async () => {
    await HomePage.goToMenu();
    await MenuPage.orderBeef();
});

Then('Beef should appear in my order', async () => {
    await expect(MenuPage.spanOrderName).toHaveTextContaining("Thai Peanut Beef");
    await expect(MenuPage.spanOrderIngredients).toHaveTextContaining("Tofu");
    await expect(MenuPage.spanOrderPrice).toHaveTextContaining("13.25 €");
});



When('I add and show my favourites meals', async () => {
    await HomePage.login("user0", "password");
    await browser.pause(1000);
    await HomePage.goToMenu();
    await MenuPage.selectFavourites();
});

Then('It should show me favourite meals', async () => {
    await expect(MenuPage.h3FirstMeal).toHaveTextContaining("THAI PEANUT BEEF");
});



Given('I am on menu page', async () => {
    await MenuPage.open();
});

When('I sort meals alphabetically', async () => {
    await MenuPage.open();
    await MenuPage.sortAlphabetically();
})

Then('Meals should be sorted alphabetically', async () => {
    await expect(MenuPage.h3FirstMeal).toHaveTextContaining("BEER");
    await expect(MenuPage.h3SecondMeal).toHaveTextContaining("GARLIC PARADISE SALAD");
})