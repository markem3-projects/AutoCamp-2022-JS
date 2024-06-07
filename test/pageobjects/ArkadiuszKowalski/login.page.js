const Page = require('./page');

class LoginPage extends Page {

    get btnUser () {
        return $('button[name="login"]');
    }

    get inputUsername () {
        return $('[name="username"]');
    }
    
    get inputPassword () {
        return $('[name="password"]');
    }
    
    get btnSubmit () {
        return $('[name="submitLogin"]');
    }

    get spanUsername () {
        return $('[data-name="userNameLogged"]');
    }

    async login (username, password) {
        await this.btnUser.click();
        await browser.pause(1000)
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }



    open () {
        return super.open('restaurant')
    }
}

module.exports = new LoginPage()