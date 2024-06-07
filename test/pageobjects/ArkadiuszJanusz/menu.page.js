const Page = require('./page');

class menuPage extends Page {
    // SORT
    get selectSort () {
        return $('app-own-filter-sort.sortingBy mat-select');
    }

    get optionSortName () {
        return $('mat-option[value="name"]');
    }

    get btnSort () {
        return $('button.button-sort');
    }

    // FILTERS
    get panelFilters () {
        return $('mat-expansion-panel-header.mat-expansion-panel-header');
    }

    get checkboxFavourites () {
        return $('div.filter-divider:nth-child(4) span.mat-checkbox-label');
    }

    // APPLY FILTERS
    get btnApplyFilters () {
        return $('button.apply-filter');
    }

    // MENU LIST

    //   thai peanut beef
    get checkboxAddTofu () {
        return $('app-public-menu-card:nth-child(3) span.mat-checkbox-label');
    }

    get btnAddBeef () {
        return $('app-public-menu-card:nth-child(3) button.addOrder');
    }

    get btnStar () {
        return $('app-public-menu-card:nth-child(3) button.favourite-button');
    } 

    //   first meals on list
    get h3FirstMeal () {
        return $('app-public-menu-card:nth-child(1) h3');
    }

    get h3SecondMeal () {
        return $('app-public-menu-card:nth-child(2) h3');
    }

    // ORDER
    get spanOrderName () {
        return $('app-public-sidenav-order:nth-child(1) span.orderName');
    }

    get spanOrderIngredients () {
        return $('app-public-sidenav-order:nth-child(1) span.orderIngredients');
    }

    get spanOrderPrice () {
        return $('app-public-sidenav-order:nth-child(1) span.orderPrice');
    }

    async orderBeef () {
        await this.checkboxAddTofu.click();
        await this.btnAddBeef.click();
    }

    async selectFavourites () {
        await this.btnStar.click();

        await this.panelFilters.click();
        await this.checkboxFavourites.click();
        await this.btnApplyFilters.click();
    }

    async sortAlphabetically () {
        await this.selectSort.click();
        await this.optionSortName.click();
        await this.btnSort.click();
        await this.btnApplyFilters.click();
    }

    open () {
        return super.open('menu');
    }
}

module.exports = new menuPage();