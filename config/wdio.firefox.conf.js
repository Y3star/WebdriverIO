const { config } = require("./wdio.conf.js");

const firefoxConfig = {
    ...config,
    services: [["geckodriver", { firefox: "latest" }]], // https://github.com/mozilla/geckodriver/releases
    capabilities: [
        {
            maxInstances: 1,
            browserName: "firefox",
            "moz:firefoxOptions": {
                args: ["--width=1920", "--height=1080"],
            },
        },
    ],
    windowSize: "maximize",
    path: "/wd/hub",
};

exports.config = firefoxConfig;
