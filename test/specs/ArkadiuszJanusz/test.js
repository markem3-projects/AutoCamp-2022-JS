const HomePage = require('../../pageobjects/ArkadiuszJanusz/home.page');
const MenuPage = require('../../pageobjects/ArkadiuszJanusz/menu.page');

describe('My restaurant application', () => {

    it('should add beef to order list', async () => {
        await HomePage.open();
        await HomePage.login("user0", "password");
        await expect(HomePage.spanUserName).toHaveText("user0");
        await HomePage.goToMenu();

        await MenuPage.orderBeef();

        await expect(MenuPage.spanOrderName).toHaveTextContaining("Thai Peanut Beef");
        await expect(MenuPage.spanOrderIngredients).toHaveTextContaining("Tofu");
        await expect(MenuPage.spanOrderPrice).toHaveTextContaining("13.25 €");
    });

    it('should select and show favourite meals', async () => {
        await HomePage.open();
        await HomePage.login("user0", "password");
        await expect(HomePage.spanUserName).toHaveText("user0");
        await HomePage.goToMenu();

        await MenuPage.selectFavourites();

        await expect(MenuPage.h3FirstMeal).toHaveTextContaining("THAI PEANUT BEEF");
    });

    it('should sort meals alphabetically', async () => {
        await MenuPage.open();
        await MenuPage.sortAlphabetically();

        await expect(MenuPage.h3FirstMeal).toHaveTextContaining("BEER");
        await expect(MenuPage.h3SecondMeal).toHaveTextContaining("GARLIC PARADISE SALAD");
    });
});