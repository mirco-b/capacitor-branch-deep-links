'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const BranchDeepLinks = core.registerPlugin('BranchDeepLinks', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.BranchDeepLinksWeb()),
});

class BranchDeepLinksWeb extends core.WebPlugin {
    constructor() {
        super({
            name: 'BranchDeepLinks',
            platforms: ['web'],
        });
    }
    handleUrl(_) {
        return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
    }
    generateShortUrl(_) {
        return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
    }
    showShareSheet(_) {
        return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
    }
    getStandardEvents() {
        return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
    }
    sendBranchEvent(_) {
        return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
    }
    disableTracking(_) {
        return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
    }
    setIdentity(_) {
        return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
    }
    logout() {
        return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
    }
    getBranchQRCode(_) {
        return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BranchDeepLinksWeb: BranchDeepLinksWeb
});

exports.BranchDeepLinks = BranchDeepLinks;
//# sourceMappingURL=plugin.cjs.js.map
