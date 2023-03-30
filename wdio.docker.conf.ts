import { config as baseConfig } from './wdio.conf.js';

export const config = {
    ...baseConfig,
    hostname: 'localhost',
    port: 4444,
    maxInstances: 2,
    capabilities: [
        // {
        //     maxInstances: 1,
        //     browserName: 'chrome',
        //     acceptInsecureCerts: true,
        //     'goog:chromeOptions': {
        //         args: ['--disable-gpu', '--disable-dev-shm-usage',"--allow-insecure-localhost","--disable-web-security","--ignore-certificate-errors","--allow-running-insecure-content"]
        //     }
        // },
        {
            maxInstances: 1,
            browserName: 'firefox',
            acceptInsecureCerts: true,
            'moz:firefoxOptions': {
                args: ['--disable-gpu', '--disable-dev-shm-usage']
            },
            proxy: {
            "httpProxy": "0.0.0.0:9099",
            "proxyType": "manual",
            "sslProxy": "0.0.0.0:9099"
            }
        }
    ],
    services: ['docker']
}