
const Page = require('./page');


class BookTablePage extends Page {

    get inputDate () {
        return $("input[formcontrolname=bookingDate]");
    }

    get inputName () {
        return $("input[formcontrolname=name]");
    }

    get inputEmail () {
        return $("input[formcontrolname=email]");
    }

    get inputGuest () {
        return $("input[formcontrolname=assistants]");
    }

    get btnAcceptTerms () {
        return $("label.mat-checkbox-layout");
    }

    get btnSubmit () {
        return $("button.mat-focus-indicator.bookTableSubmit.mat-button.mat-button-base.mat-accent");
    }

    get btnConfirm() {
        return $("button[name=bookTableConfirm]");
    }

    get FlashAlert() {
        return $("span.mat-simple-snack-bar-content")
    }



    async bookatable (date, name, email, guests) {
        await this.inputDate.setValue(date);
        await this.inputName.setValue(name);
        await this.inputEmail.setValue(email);
        await this.inputGuest.setValue(guests);
        await this.btnAcceptTerms.click();
        await this.btnSubmit.click();
        await this.btnConfirm.click();
    }



    open () {
        return super.open('bookTable');
    }
}


module.exports = new BookTablePage();
