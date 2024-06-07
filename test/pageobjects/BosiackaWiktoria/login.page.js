

const Page = require('./page');


class LoginPage extends Page {

    get btnLogin () {
        return $("button.mat-focus-indicator.mat-tooltip-trigger.mat-icon-button.mat-button-base.ng-star-inserted");
    }

    get inputUsername () {
        return $('input[name=username]');
    }

    get inputPassword () {
        return $('input[name=password]');
    }

    get btnSubmit () {
        return $('button[name=submitLogin]');
    }

    get loggedUser () {
        return $('span[data-name=userNameLogged]');
    }


    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('restaurant');
    }
}

module.exports = new LoginPage();
