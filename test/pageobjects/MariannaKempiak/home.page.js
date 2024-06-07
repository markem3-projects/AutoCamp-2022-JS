const Page = require('./page');

class HomePage extends Page {

    get btnMenu () {
        return $('a[href="/menu"]');
    }

    get btnLogin () {
        return $('button[name="login"]');
    }

    get inputUsername () {
        return $('input[name=username]');
    }

    get inputPassword () {
        return $('input[name=password]');
    }

    get btnSubmitLogin () {
        return $('button[name=submitLogin]');
    }

    get loggedUser () {
        return $('span[data-name=userNameLogged');
    }

    get QRcode () {
        return $('img[class="mat-card-image.ng-star-inserted"]');
    }

    get btnAccount () {
        return $('button[name=account]');
    }

    get btnSetting () {
        return $('button[name=setting]');
    }

    get btnSwitch () {
        return $('div[class=mat-slide-toggle-thumb-container]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }

    open () {
        return super.open('restaurant');
    }
}

module.exports = new HomePage();