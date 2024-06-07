

const Page = require('./page');

class MenuPage extends Page {

    get filterOption () {
        return $("mat-expansion-panel-header.mat-expansion-panel-header");
    }

    get FavouritesCheckbox () {
        return $("div.filter-divider:nth-child(4) span.mat-checkbox-label");
    }

    get btnSubmit () {
        return $("button.mat-focus-indicator.apply-filter.mat-button.mat-button-base.mat-accent");
    }

    get favouriteList() {
        return $$("div.card-container app-public-menu-card")
    }

    open () {
        return super.open('menu');
    }
}

module.exports = new MenuPage();
