const Page = require('./page');

class bookTablePage extends Page {
    open () {
        return super.open('bookTable')
    }
}

module.exports = new bookTablePage()