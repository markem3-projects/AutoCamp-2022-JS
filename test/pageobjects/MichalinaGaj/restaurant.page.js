

const Page = require('./home.page');

class RestaurantPage extends Page {
 
    open () {
        return super.open('restaurant');
    }

    
    get btnLanguage() {
        return $('.mat-menu-trigger')
    }

    get btnDeutsch() {
        return $('button=Deutsch')
    }

    get textDeutsch() {
        return $('.subtitle')
    }

    get noodleCheckbox () {
        return $('#mat-checkbox-5 .mat-checkbox-layout')
    }

    get btnMenu() {
        return $('[routerlink="/menu"]')
    }

    get filterExpPanel() {
        return $('.mat-expansion-panel-header')
    }

    get riceCheckbox() {
        return $('#mat-checkbox-6 .mat-checkbox-layout')
    }

    get btnApplyFilters() {
        return $('.apply-filter')
    }

    get dishName() {
        return $('div>h3')
    }
}

module.exports = new RestaurantPage();
