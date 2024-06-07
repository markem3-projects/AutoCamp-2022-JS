module.exports = class Page{
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
     open (path) {
        //return browser.url(`http://localhost:8081/${path}`)
        return browser.url(`https://mts-devonfw-core.cloud.okteto.net/${path}`)
    }
}