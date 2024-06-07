const LoginPage = require('../../pageobjects/BosiackaWiktoria/login.page');
const MenuPage = require('../../pageobjects/BosiackaWiktoria/menu.page');
const BookTablePage = require('../../pageobjects/BosiackaWiktoria/book-table.page');

describe('My Thai Star', () => {

    
    it('Booking a table', async () => {
        await BookTablePage.open();
       
        await BookTablePage.bookatable('9/15/2022, 2:23 PM', 'Marta', 'xyz@gmail.com', 4);

        await BookTablePage.FlashAlert.waitForExist({timeout: 5000});
        await expect(BookTablePage.FlashAlert).toHaveTextContaining("Table succesfully booked");
    });
    
    

    it('Filtering favourites without being logged in', async () => {
        await MenuPage.open();
        await browser.pause(1000);

        await MenuPage.filterOption.click();
        await MenuPage.FavouritesCheckbox.click();
        await MenuPage.btnSubmit.click();
        await browser.pause(3000);

        await expect(MenuPage.favouriteList).toBeElementsArrayOfSize(0);
       
    }); 


      
    it('After refreshin user is still logged in', async () => {
        await LoginPage.open()

        await LoginPage.btnLogin.click();

        await LoginPage.login('abb', 'abb');
        await browser.refresh();
        
        await expect(LoginPage.loggedUser).toBeExisting();
        await expect(LoginPage.loggedUser).toHaveTextContaining('abb');
       
    });





});
