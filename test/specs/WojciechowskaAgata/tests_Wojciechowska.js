const MenuPage = require('../../pageobjects/WojciechowskaAgata/menu.page');
const LoginPage = require('../../pageobjects/WojciechowskaAgata/login.page');

describe('my_thai_restaurant', () => {
    it('refreshing page when logged in', async() => {
        // 1. get on website https://mts-devonfw-core.cloud.okteto.net/menu 
        await MenuPage.open();

        // 2. click on person icon in right upper corner
        await LoginPage.icon.waitForExist({timeout: 5000});
        await LoginPage.icon.click();

        // 3. in the pop-up window, in "sign up" section fill input fields 
        await LoginPage.signupPanel.click()

        const dateOfBirth = (Math.floor(Math.random() * 30 + 1)).toString() + (Math.floor(Math.random() * 12 + 1)).toString() + (Math.floor(Math.random() * 2010 + 1900)).toString()
        const username = 'a' + dateOfBirth.toString()
        const email = 'a@b.com'
        const pass = 'zxc123'

        await LoginPage.signup_username.waitForDisplayed({ timeout: 3000 })
        await expect(LoginPage.signup_cfmPassword).toExist()

        await LoginPage.register(username, email, pass)

        // 4. the pop-up window closes, and you can see the info, that you have been registered correctly (on the bottom of the screen) 
        await expect(LoginPage.popup_info).toExist()
        await expect(LoginPage.popup_info).toHaveTextContaining('Register successful')

        // 5. again, click on person icon in right upper corner 
        await LoginPage.icon.click();

        // 6. in the pop-up window, in "sign in" section fill input fields (you need to use the data which you gave at point 3.) 
        await LoginPage.login(username, pass);

        // 7. you are logged in now (you can see your username next to person icon) 
        await expect(LoginPage.username_profile).toHaveTextContaining('user0')

        // 8. refresh the webpage using CTRL+R shortcut OR arrow in left upper corner at your browser
        await browser.refresh();

        // Expected result: you should be logged in  
        await expect(LoginPage.username_profile).not.toBeExisting()
    })


    it('applying "noodle" filter on menu', async() => {

        // 1. get on website https://mts-devonfw-core.cloud.okteto.net/menu 
        await MenuPage.open()
        await expect(MenuPage.menu).toExist()


        // 2. Click on "Filters"
        await MenuPage.menu.click()

        // 3. Choose "Noodle" 
        await expect(MenuPage.noodleCheckbox).toExist()
        await MenuPage.noodleCheckbox.click()
        
        // click "Apply filter"
        await MenuPage.applyFilter.click()

        // Expected result: you should see one position on the menu
        await expect(MenuPage.menuElements).toBeElementsArrayOfSize(1)
    })

    it('placing an order with not existing "BookingID"', async() =>{
        // 1. get on website https://mts-devonfw-core.cloud.okteto.net/menu 
        await MenuPage.open();

        // 2. click "add to order" at chosen by you menu item 
        await expect(MenuPage.menuElements).toExist()
        await MenuPage.menuElementToCart.click()

        // 3. enter random "Booking ID", fx. "123" 
        await MenuPage.enterBookingID((Math.floor(Math.random() * 200000 + 100000)).toString() + 'abc')

        // 4. click "Accept terms" checkbox 
        await MenuPage.acceptTermsCheck.click()

        // 5. click "send"
        await MenuPage.sendButton.click()

        // Expected result: appears "[object object]" error 
        await expect(MenuPage.errorPopup).toExist()

        await expect(MenuPage.errorPopup).toHaveTextContaining('[object Object]')
    })
})
