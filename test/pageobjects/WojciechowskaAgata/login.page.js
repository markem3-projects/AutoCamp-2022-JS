const Page = require('./page');


class LoginPage extends Page {
    
    get icon () {
        return $("button[name=login]");
    }

    // POP-UP LOGIN
    get popupLogin () {
        return $('.cdk-overlay-pane')
    }
    //      SIGN UP
    get signupPanel () {
        return $("div.mat-tab-labels div:nth-child(2)")
    }

    get signup_username () {
        return $('input[name=username]')
    }

    get signup_email () {
        return $('input[name=email]')
    }

    get signup_password () {
        return $('input[name=password]')
    }

    get signup_cfmPassword () {
        return $('input[name=confirmPassword]')
    }

    get signup_checkbox () {
        return $('mat-checkbox[name=registerTerms]')
    }

    get signup_confirm () {
        return $('button[name=registerSubmit]')
    }

    // POP-UP info registration
    get error_mess() {
        return $('snack-bar-container.mat-snack-bar-container')
    }

    //      LOGIN
    get inputUsername () {
        return $('input[name=username]');
    }

    get inputPassword () {
        return $('input[name=password]');
    }

    get login_btnSubmit () {
        return $('button[name=submitLogin]');
    }

    get username_profile () {
        return $('span[data-name=userNameLogged]')
    }


    async register (username, email, password) {
        await this.signup_username.setValue(username);
        await this.signup_email.setValue(email);
        await this.signup_password.setValue(password);
        await this.signup_cfmPassword.setValue(password);
        await this.signup_checkbox.click();
        await this.signup_confirm.click();
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.login_btnSubmit.click();
    }
}

module.exports = new LoginPage();
