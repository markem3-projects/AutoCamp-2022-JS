const Page = require('./page');

class InvitingFriends extends Page {

    get booksTableTab () {
        return $('#mat-tab-label-0-0')
    }

    get inviteFriendsTab () {
        return $('#mat-tab-label-0-1')
    }

    get calendarOpen () {
        return $('[formcontrolname="bookingDate"]');
    }

    get selectDate () {
        return  $('td[class="owl-dt-calendar-cell owl-dt-day-5 ng-star-inserted"]');
    }
    
    get acceptDateSelection () {
        return $('.owl-dt-container-buttons>button:nth-child(2)');
    }
    
    get inputNameBookingPerson () {
        return $('[formcontrolname="name"]');
    }

    get inputEmailBookingPerson () {
        return $('[formcontrolname="email"]');
    }

    get inputEmailInvitation () {
        return $('[placeholder="Enter invitation email"]')
    }

    get checkbox () {
        return $('.mat-checkbox-layout span.mat-checkbox-label');
    }    

    get btnSubmit () {
        return $('[name="inviteFriendsSubmit"]')
    }

    get invitationConfirm (){
        return $('[name="inviteFriendsConfirm"]')
    }

    get invitationPopUpConfirm (){
        return $('.mat-simple-snackbar.ng-star-inserted')
    }

    async selctingInvitationTab(){
        await this.inviteFriendsTab.click()
        await this.calendarOpen.waitForDisplayed();
    }

    async choosingDateToBookTable(){
        await this.calendarOpen.click();
        await this.selectDate.click();
        await this.acceptDateSelection.click();
    }

    async insertDataToInviteFriends (name, invitationEmail, email) {
        await this.inputNameBookingPerson.setValue(name);
        await browser.pause(1000);
        await this.inputEmailInvitation.setValue(invitationEmail);
        await browser.keys("\uE007");
        await this.inputEmailBookingPerson.setValue(email);
        await this.checkbox.click();

    }

    async sendInvitationToFriend(){
        await this.btnSubmit.click();
        await this.invitationConfirm.click();
    }

    open () {
        return super.open('bookTable')
    }
}

module.exports = new InvitingFriends();