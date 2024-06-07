const Page = require('./AleksRoszykpage');

class BookTablePage extends Page {

    get bookingDateInput () {
        return $('input[formcontrolname="bookingDate"]');
    }

    get pickDateFromTable () {
        return $('td[aria-label="July 21, 2022"]');
    }

    get pickDateDiv () {
        return $('div#cdk-overlay-1.cdk-overlay-pane.owl-dt-dialog');
    }
    get inviteFriendsDiv () {
        return $('div[id="mat-tab-label-0-1"]');
    }
    get confirmDateButton () {
        return $('.owl-dt-container-buttons.owl-dt-container-row>button:nth-child(2)');
    }

    get formExist () {
        return $('div[class="invitationFormTitle"]');
    }
    get nameInput () {
        return $('input[formcontrolname="name"]');
    }

    get mailInput () {
        return $('input[formcontrolname="email"]');
    }

    get guestMailInput () {
        return $('input[id="mat-chip-list-input-0"]');
    }

    get acceptTermsCheckbox () {
        return $('#mat-checkbox-3');
    }

    get submitButton () {
        return $('button[name=inviteFriendsSubmit]');
    }

    get inviteButton () {
        return $('button[name=inviteFriendsConfirm]');
    }

    async inviteFriends (username, mail, guestmail){
        await this.nameInput.setValue(username);
        await this.mailInput.setValue(mail);
        await this.guestMailInput.setValue(guestmail);
    }

    open () {
        return super.open('/bookTable');
    }
}

module.exports = new BookTablePage();