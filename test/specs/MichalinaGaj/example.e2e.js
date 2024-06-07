const RestaurantPage = require('../pageobjects/restaurant.page');
const BookTablePage = require('../pageobjects/bookTable.page');

describe('MTS testing', () => {
    it('should change language', async () => {
        await RestaurantPage.open();
        await RestaurantPage.btnLanguage.waitForDisplayed()
        await RestaurantPage.btnLanguage.click()
        await RestaurantPage.btnDeutsch.click()
        await expect(RestaurantPage.textDeutsch).toHaveText('Mehr als nur leckeres Essen')
        browser.refresh();
        await expect(RestaurantPage.textDeutsch).toHaveText('More than just delicious food')
    });

    it ('should respect rice filter', async () => {
        await RestaurantPage.open();
        await RestaurantPage.btnMenu.waitForDisplayed()
        await RestaurantPage.btnMenu.click()
        await expect(RestaurantPage.noodleCheckbox).toExist()
        await RestaurantPage.filterExpPanel.click()
        await RestaurantPage.riceCheckbox.click()
        await RestaurantPage.btnApplyFilters.click()
        await expect(RestaurantPage.dishName).toHaveText('THAI SPICY BASIL FRIED RICE')
        console.log(await RestaurantPage.dishName.getText())
    });

    it('should book a table', async () => {
        await BookTablePage.open();       
        await BookTablePage.inputDate.click()
        await browser.pause(1000)
        //bez tej pauzy testy losowo nie przechodzily mimo, ze element byl wyswietlony juz
        await BookTablePage.nextMonth.waitForDisplayed()
        await BookTablePage.nextMonth.click()
        await BookTablePage.selectedDay.waitForDisplayed({timeout : 5000})
        await BookTablePage.selectedDay.click()
        await BookTablePage.setTime('18', '00')
        //tu musimy poczekac az uzupelni date i godzine, nie dzialalo zadne oczekiwanie na pojawienie sie albo zawieranie tekstu, losowo test sie wysypywal
        await browser.pause(500)
        await BookTablePage.acceptDate.click()
        await BookTablePage.bookTable('abc', 'abc@abc.com', '3')
        await BookTablePage.acceptTerms.click()
        await BookTablePage.btnBookTable.isEnabled()
        await BookTablePage.btnBookTable.click()
        await BookTablePage.btnTableSend.click()
        await expect(BookTablePage.alertBookingSuccess).toBeExisting()
        await expect(BookTablePage.alertBookingSuccess).toHaveTextContaining('Table succesfully booked')
    });
});
