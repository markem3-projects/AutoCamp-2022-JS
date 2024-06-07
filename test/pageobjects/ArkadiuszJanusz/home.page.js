const Page = require('./page');

class homePage extends Page {
    get btnUser () {
        return $('button[name="login"]');
    }

    get inputUsername () {
        return $('input[name="username"]');
    }

    get inputPassword () {
        return $('input[name="password"]');
    }

    get btnLogin () {
        return $('button[name="submitLogin"]');
    }

    get aMenu () {
        return $('a[href="/menu"]');
    }

    get spanUserName () {
        return $('span[data-name="userNameLogged"]');
    }

    async login (username, password) {
        await this.btnUser.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    async goToMenu () {
        await this.aMenu.click();
    }

    open () {
        return super.open('restaurant');
    }
}

module.exports = new homePage();