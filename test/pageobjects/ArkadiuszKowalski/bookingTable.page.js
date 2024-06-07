const Page = require('./page');

class BookingTable extends Page {

    get bookTableTab (){
        return $('.mat-tab-link.mat-focus-indicator.navBottomBorder')
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

    get inputGuestsNumber () {
        return $('[formcontrolname="assistants"]');
    }

    get checkbox () {
        return $('.mat-checkbox-layout span.mat-checkbox-label');
    }    

    get btnSubmit () {
        return $('[name="bookTableSubmit"]')
    }

    async choosingDateToBookTable(){
        await this.calendarOpen.click();
        await this.selectDate.click();
        await browser.pause(1000)
        await this.acceptDateSelection.click();
    }

    async insertData (name, email, guests) {
        await this.inputNameBookingPerson.setValue(name);
        await this.inputEmailBookingPerson.setValue(email);
        await this.inputGuestsNumber.setValue(guests);
        await this.checkbox.click();
        await this.btnSubmit.click();
    }



    open () {
        return super.open('bookTable')
    }
}

module.exports = new BookingTable();