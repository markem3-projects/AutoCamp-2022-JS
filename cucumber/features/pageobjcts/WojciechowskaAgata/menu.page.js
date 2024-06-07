const Page = require('./page');

class MenuPage extends Page {
    
    get menu () {
        return $('#mat-expansion-panel-header-0');
    }

    //      FILTERS
    get noodleCheckbox () {
        return $('#mat-checkbox-5 .mat-checkbox-layout')
    }

    get applyFilter () {
        return $('.apply-filter')
    }

    // MENU
    get menuElements () {
        return $$('.card-container.ng-star-inserted app-public-menu-card')
    }

    get menuElementToCart() {
        return $('.card-container.ng-star-inserted app-public-menu-card .addOrder')
    }

    //      INSIDE CART
    get cart () {
        return $('mat-sidenav.mat-drawer-opened')
    }

    get bookingIdInp () {
        return $('mat-sidenav.mat-drawer-opened input')
    }

    get acceptTermsCheck () {
        return $('mat-sidenav.mat-drawer-opened mat-checkbox')
    }

    get sendButton () {
        return $('mat-sidenav.mat-drawer-opened .orderSubmit')
    }

get errorPopup() {
    return $('simple-snack-bar')
}

    open () {
        return super.open('menu');
    }

    enterBookingID (bookId) {
        return this.bookingIdInp.setValue(bookId);
    }
}

module.exports = new MenuPage();
