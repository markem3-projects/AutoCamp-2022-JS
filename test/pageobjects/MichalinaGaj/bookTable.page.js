const Page = require('./home.page');

class BookTablePage extends Page {
 
    open () {
        return super.open('bookTable');
    }

    get inputName() {
        return $('[formcontrolname="name"]')
    }

    get inputEmail() {
        return $('[formcontrolname="email"]')
    }

    get inputTableGuests() {
        return $('[formcontrolname="assistants"]')
    }

    get inputHour() {
        return $('.owl-dt-timer-input')
    }

    get inputMinutes() {
        return $('.owl-dt-timer-box:nth-child(2)>label>input')
    }

    get inputDate() {
        return $('.mat-input-element.mat-form-field-autofill-control')
    }

    
    get nextMonth() {
        return $('[aria-label="Next month"]>span')
    }

    get selectedDay() {
        return $('[aria-label="August 27, 2022"]>span')
    }

    get acceptDate() {
        return $('.owl-dt-container-buttons>button:nth-child(2)')
    }

    get acceptTerms() {
        return $('.mat-checkbox.bookTableTnc>label')
    }

    get btnBookTable() {
        return $('.mat-focus-indicator.bookTableSubmit')
    }
    
    get btnTableSend() {
        return $('[name="bookTableConfirm"]>span:nth-child(1)')
    }
    
    get alertBookingSuccess() {
        return $('.mat-snack-bar-container.ng-trigger.bgc-green-600')
    }
   
   

    async bookTable (name, email, tableGuests) {
        await this.inputName.setValue(name);
        await this.inputEmail.setValue(email);
        await this.inputTableGuests.setValue(tableGuests);
    }

    async setTime (hour, minutes) {
        await this.inputHour.setValue(hour);
        await this.inputMinutes.setValue(minutes);
    }
}

module.exports = new BookTablePage();
