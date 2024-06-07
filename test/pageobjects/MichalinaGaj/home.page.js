
module.exports = class HomePage {
    
    open (path) {
        return browser.url(`https://mts-devonfw-core.cloud.okteto.net/${path}`)
    }

}
