const { Given, When, Then } = require('@wdio/cucumber-framework');

const homePage = require('../pageobjects/home.page');
const RestaurantPage = require('../pageobjects/restaurant.page');
const BookTablePage = require('../pageobjects/bookTable.page');

Given(/^I am on the restaurant page$/, async () => {
    await RestaurantPage.open();
});

When(/^I click on flag icon and select different language$/, async () => {
    await RestaurantPage.btnLanguage.waitForDisplayed()
    await RestaurantPage.btnLanguage.click()
    await RestaurantPage.btnDeutsch.click()
});

Then(/^I see that language changed correctly$/, async () => {
    await expect(RestaurantPage.textDeutsch).toHaveText('Mehr als nur leckeres Essen')
});




When(/^I click on menu and select "rice" filter$/, async () => {
    await RestaurantPage.btnMenu.waitForDisplayed()
    await RestaurantPage.btnMenu.click()
    await expect(RestaurantPage.noodleCheckbox).toExist()
    await RestaurantPage.filterExpPanel.click()
    await RestaurantPage.riceCheckbox.click()
    // await browser.pause(1000)
    await RestaurantPage.btnApplyFilters.click()
    await expect(RestaurantPage.menuComponent).toBeExisting()
    
});

Then(/^I see only dishes with rice$/, async () => {
    await expect(RestaurantPage.dishName).toHaveText('THAI SPICY BASIL FRIED RICE')
});




Given(/^I am on the bookTable page$/, async () => {
    await BookTablePage.open(); 
});

When(/^I input (\w+); (.+); (\d+)$/, async (name, email, guests) => {
        await BookTablePage.inputDate.click()
        // await browser.pause(1000)
        
        await BookTablePage.nextMonth.waitForDisplayed({timeout : 5000})
        await BookTablePage.nextMonth.click()
        await BookTablePage.selectedDay.waitForDisplayed({timeout : 5000})
        await BookTablePage.selectedDay.click()
        await BookTablePage.setTime('18', '00')
        //tu musimy poczekac az uzupelni date i godzine, nie dzialalo zadne oczekiwanie na pojawienie sie albo zawieranie tekstu, losowo test sie wysypywal
        await browser.pause(500)
        await BookTablePage.acceptDate.click()
        await BookTablePage.bookTable(name, email, guests)
        await BookTablePage.acceptTerms.click()
        await BookTablePage.btnBookTable.isEnabled()
        await BookTablePage.btnBookTable.click()
        await BookTablePage.btnTableSend.click()
});

Then(/^I book a table successfully$/, async () => {
        await expect(BookTablePage.alertBookingSuccess).toBeExisting()
        await expect(BookTablePage.alertBookingSuccess).toHaveTextContaining('Table succesfully booked')
});
