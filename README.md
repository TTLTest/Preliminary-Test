# WebdriverIO_TypeScript
Automation with webdriverIO and mocha framework with typeScript as the language. The framework contains a dockerized image for multiple browser and parallel test execution.

Steps to run the test cases:
After Cloning the repo in local-
Pre-requisites: Node version 16 or higher should be installed. Docker desktop should be installed.
NOTE: Below are the steps to execute parallel tests within docker.
--npm install
-- cd docker
-- docker-compose -f docker-compose-hub.yml up -d
-- cd ..
-- npm run wdio_docker 


Below are the steps to run tests locally:
Change 'Services' within wdio.conf.ts file to 'chromedriver'
--npm install
-- vom run wdio
