/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        // just webdriver io
        // when you have website locally
        // return browser.url(`http://localhost:8081/${path}`)

        //when you use online website
        return browser.url(`https://mts-devonfw-core.cloud.okteto.net/${path}`)
        
        // for Selenium Grid
        // return browser.url(`http://172.21.0.4/${path}`)
    }
}
