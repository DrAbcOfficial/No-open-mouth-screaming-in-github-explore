// ==UserScript==
// @name         No open mouth screaming in github explore
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  No
// @author       You
// @match        https://github.com/explore
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector("body > div.logged-in.env-production.page-responsive > div.application-main > main > div:nth-child(2) > div > div > div.col-md-8.col-lg-6.py-4 > article:nth-child(2)").remove()
})();