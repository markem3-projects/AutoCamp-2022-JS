const Logging = require("../../pageobjects/ArkadiuszKowalski/login.page");
const Friends = require("../../pageobjects/ArkadiuszKowalski/invitingFriends.page");
const Booking = require("../../pageobjects/ArkadiuszKowalski/bookingTable.page");

describe('Test the Login Functionality', () => {

    it('The test should log the user in', async() => {
        await Logging.open();
        await Logging.login("user0", "password");
        await expect(Logging.spanUsername).toBeDisplayed()
    });
});



describe('Testing table bookings', () => {

    it('Moving on to booking tab', async() => {
        await Booking.open();
        await expect(Booking.bookTableTab).toBeDisplayed();
    })

    it('Should open calender and fill it', async() => {
        await Booking.choosingDateToBookTable();
        await expect(Booking.calendarOpen).toHaveElementClassContaining('ng-valid');
    })

    it('It should fill in the remaining data to book table',async() => {
        await Booking.insertData('Jan', 'test@test.pl', 4);
        await expect(Booking.inputNameBookingPerson).toHaveValue('Jan');
        await expect(Booking.inputEmailBookingPerson).toHaveValue('test@test.pl');
        await expect(Booking.inputGuestsNumber).toHaveValue("4");
    })
});

describe('Test the Friends inviting Functionality', () => {

    it('It should take you to the tab for inviting friends', async() => {
        await Friends.open();
        await Friends.selctingInvitationTab();
        await expect(Friends.inviteFriendsTab).toBeSelected;
    })

    it('Should open calender and fill it', async() => {
        await Friends.calendarOpen.waitForClickable()
        await Friends.choosingDateToBookTable();
        await expect(Friends.calendarOpen).toHaveElementClassContaining('ng-valid');
        })
    
    it('It should fill in the remaining data', async() => {
        await Friends.insertDataToInviteFriends("Jan", "test@test.pl", "test@test.pl");
        await expect(Friends.inputNameBookingPerson).toHaveValue('Jan');
        await expect(Friends.inputEmailBookingPerson).toHaveValue('test@test.pl');
        })

    it('It should sent invitation mail to friend', async() => {
        await  Friends.sendInvitationToFriend();
        await  expect(Friends.invitationPopUpConfirm).toBeDisplayed();
    })
});
