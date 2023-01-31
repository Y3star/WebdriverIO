const {config} = require("./wdio.conf.js");
require("path");
const chromeHeadlessConfig = {
    ...config,
    services: [['chromedriver', {chrome: 'latest'}]], // https://chromedriver.chromium.org/
    //services: ["chromedriver"],
    capabilities: [{
        maxInstances: 5,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--headless','--start-maximized', '--no-sandbox', '--disable-gpu','--disable-dev-shm-usage','--window-size=1900,1000', '--allow-insecure-localhost', '--ignore-certificate-errors'],
            excludeSwitches: ['--enable-logging']
        },
    }],

    path: "/wd/hub",

};

exports.config = chromeHeadlessConfig;
