const SecurePage = require('../pageobjects/secure.page');
const MenuPage = require('../pageobjects/menu.page');
const HomePage = require('../pageobjects/home.page');

describe('My Test application', () => {

    it('should sort items by Likes', async () => {
        await MenuPage.open();
        await MenuPage.btnSortMenu.click();
        await MenuPage.btnSortLikes.click();
        await MenuPage.btnApplyFilters.click();
        await MenuPage.firstSortedItem.waitForDisplayed({ timeout: 5000 });
        await expect(MenuPage.firstSortedItem).toHaveText('BEER');

    });

    it('should set two factor authentication', async () => {
        await HomePage.open();
        await HomePage.btnLogin.click();
        await HomePage.login('user0', 'password');
        await HomePage.btnSubmitLogin.click();
        await HomePage.btnAccount.waitForDisplayed({ timeout: 5000 });
        await HomePage.btnAccount.click();
        await HomePage.btnSetting.click();
        await HomePage.btnSwitch.click();
        await expect(HomePage.QRcode).toExist();
    });

    it('should add items to the cart', async () => {
        await MenuPage.open();
        await MenuPage.btnAddOrder.click();
        await expect(MenuPage.orderName).toExist();
        });
    
 });


