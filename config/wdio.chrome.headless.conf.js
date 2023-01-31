const {config} = require("./wdio.conf.js");
require("path");
const chromeHeadlessConfig = {
    ...config,
    services: [['chromedriver', {chrome: 'latest'}]],
    capabilities: [{
        maxInstances: 5,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--headless','--start-maximized', '--no-sandbox', '--disable-gpu','--disable-dev-shm-usage','--window-size=1920,1080', '--allow-insecure-localhost', '--ignore-certificate-errors'],
            excludeSwitches: ['--enable-logging']
        },
    }],

    path: "/wd/hub",

};

exports.config = chromeHeadlessConfig;
