const HomePage = require('../../pageobjects/AleksRoszyk/AleksRoszykhome.page');
const BookTablePage = require('../../pageobjects/AleksRoszyk/AleksRoszykbooktable.page');

describe('MyThaiStar application', () => {

    it('Setting up Two Factor Authentication for basic user', async () => {
        await HomePage.open();
        await HomePage.loginButton.click();
        await HomePage.login('user0', 'password');
        await HomePage.submitLoginButton.click();

        await HomePage.accountButton.waitForDisplayed({ timeout: 5000 });
        await HomePage.accountButton.click();

        await HomePage.settingButton.waitForDisplayed({ timeout: 5000 });
        await HomePage.settingButton.click();

        await HomePage.twoFactorCheckbox.waitForDisplayed({ timeout: 5000 });
        await HomePage.twoFactorCheckbox.click();

        await browser.pause(1000);
        await expect(HomePage.qrCode).toExist();
    });

    it('Verify the posibility to book', async () => {
        await BookTablePage.open();
        await BookTablePage.inviteFriendsDiv.click();
        if(BookTablePage.formExist.isClickable()){
            await BookTablePage.bookingDateInput.click();
            await browser.pause(2000);
            // prawdopodobnie ze względu na animację okienka wyboru daty poniższe funkcje nie działają :))))))))))))))))
            // await browser.waitUntil(await BookTablePage.pickDateDiv.isEnabled(), {timeout: 5000});
            // await BookTablePage.pickDateDiv.waitForExist({timeout: 5000});
            // await BookTablePage.pickDateDiv.waitForExist({reverse: true});
            //dlatego w tym miejscu byłem zmuszony zostawić pauzę ustawioną na sztywno :((
            //bez niej test raz przechodzi, raz nie, w zależności od tego jak szybko komputer działa
            await BookTablePage.pickDateFromTable.click();
            await BookTablePage.confirmDateButton.click();
            await BookTablePage.inviteFriends('Sebastian', 'sebastian@wp.pl', 'marianna@wp.pl');
            await browser.keys("\uE007");
            await BookTablePage.acceptTermsCheckbox.waitForDisplayed({ timeout: 500 });
            await BookTablePage.acceptTermsCheckbox.click();
            await BookTablePage.submitButton.waitForDisplayed({ timeout: 500 });
            await BookTablePage.submitButton.click();
            await BookTablePage.inviteButton.waitForDisplayed({ timeout: 2000 });
            await BookTablePage.inviteButton.click();
        }
        
    });

    it('Verify if site has session option', async () => {
        await HomePage.open();
        await HomePage.languageButton.click();

        await HomePage.polskiButton.waitForDisplayed({ timeout: 5000 });
        await HomePage.polskiButton.click();
        await browser.pause(2000);
        await browser.refresh();
        await browser.pause(2000);
        await expect(await HomePage.isPolishSet.getAttribute('class')).toEqual('flag-icon flag-icon-pl');
    });
});


