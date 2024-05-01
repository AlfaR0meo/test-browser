'use strict';

const browserNameSpan = document.querySelector('.browser-name > span');

function identifyUserBrowser() {
    console.log(navigator);

    const navigatorUserAgent = navigator.userAgent.toLowerCase();
    console.log(navigatorUserAgent);

    if (navigatorUserAgent.includes('chrome') && !navigatorUserAgent.includes('edg') && !navigatorUserAgent.includes('opr')) {
        browserNameSpan.textContent = 'Chrome';
        return 'Chrome';
    }
    if (navigatorUserAgent.includes('firefox')) {
        browserNameSpan.textContent = 'Firefox';
        return 'Firefox';
    }
    if (navigatorUserAgent.includes('edg')) {
        browserNameSpan.textContent = 'Edge';
        return 'Edge';
    }
    if (navigatorUserAgent.includes('opr')) {
        browserNameSpan.textContent = 'Opera';
        return 'Opera';
    }
    if (navigatorUserAgent.includes('safari') && !navigatorUserAgent.includes('chrome')) {
        browserNameSpan.textContent = 'Safari';
        return 'Safari';
    }
    
    browserNameSpan.textContent = navigator.userAgent;
}
identifyUserBrowser()
