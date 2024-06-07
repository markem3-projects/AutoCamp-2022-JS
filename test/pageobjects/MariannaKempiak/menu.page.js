const Page = require('./page');

class MenuPage extends Page {

    get btnSortMenu () {
        return $('#mat-select-0');
    }

    get btnSortLikes () {
        return $('#mat-option-1');
    }

    get btnApplyFilters () {
        return $('button[type=submit]');
    }

    get btnAddOrder () {
        return $('span[class=order]');
    }

    get firstSortedItem () {
        return $('app-own-menu-card-details>div:nth-child(2)>h3');
    }
    
    get orderName () {
        return $('span[class=orderName]');
    }
    
    open () {
        return super.open('menu');
    }
}

module.exports = new MenuPage();