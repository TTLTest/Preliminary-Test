import { config } from '../../wdio.conf.js'
import HomePage from '../pageobjects/homePage.js'
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const carModels = require('../data/carModels.json');

describe('Volvo cars', () => {
    it('Navigate to Our cars and verify car models visible on each window...', async () => {
        browser.url(config.baseUrl)
        browser.maximizeWindow()
        await browser.pause(5000)
        await $('//button[text()="Accept"]').click()
        await browser.pause(5000)
        const elem = await $('//div[@id="ModelIntro-1"]/section/h2')
        expect(elem).toHaveText('Ideas that change the world are often the most controversial.')
        await $('//em[text()="Our Cars"]/..').click()

        // Select Electric cars
        const electric = await $('//p[text()="Electric"]')
        expect(electric).toHaveText('Electric')
        await browser.pause(5000)
        await $('//p[text()="Electric"]/..').click()
        await browser.pause(5000)
        await HomePage.verifyCars(carModels.Electric.cars, carModels.Electric.panel)

        // Select Hybrid cars
        const hybrid = await $('//p[text()="Hybrids"]')
        expect(hybrid).toHaveText('Hybrids')
        await $('//p[text()="Hybrids"]/..').click()
        await verifyCars(carModels.Hybrids.cars, carModels.Hybrids.panel)

        // Select Mild Hybrid cars
        const mild_hybrid = await $('//p[text()="Mild hybrids"]')
        expect(mild_hybrid).toHaveText('Mild hybrids')
        await $('//p[text()="Mild hybrids"]/..').click()
        await verifyCars(carModels.Mild_hybrids.cars, carModels.Mild_hybrids.panel)

        browser.closeWindow()
    });

});