const Page = require('./AleksRoszykpage');

class HomePage extends Page {
    get loginButton () {
        return $('button[name="login"]');
    }

    get inputUsername () {
        return $('input[name="username"]');
    }

    get inputPassword () {
        return $('input[name="password"]');
    }

    get submitLoginButton () {
        return $('button[name="submitLogin"]');
    }

    get accountButton () {
        return $('button[name="account"]');
    }

    get settingButton () {
        return $('button[name="setting"]');
    }

    get twoFactorCheckbox () {
        return $('div[class="mat-slide-toggle-thumb-container"]');
    }

    get qrCode () {
        return $('img[class="mat-card-image.ng-star-inserted"]');
    }

    get languageButton () {
        return $('button[name="language"]');
    }

    get polskiButton () {
        return $('span=Polski');
    }

    get isPolishSet () {
        return $('.mat-focus-indicator.mat-menu-trigger>span>span');
    }


    async login (username, password){
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }

    open () {
        return super.open('/restaurant');
    }
}

module.exports = new HomePage();