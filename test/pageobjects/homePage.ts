class HomePage{


    get accept_cookies(){
        return $('//button[text()="Accept"]')
    }

    get ourCars_link(){
        return $('//em[text()="Our Cars"]/..')
    }

    get electricCars_link(){
        return $('//p[text()="Electric"]/..')
    }

    get hybridCars_link(){
        return $('//p[text()="Hybrids"]/..')
    }

    get mildHybridCars_link(){
        return $('//p[text()="Mild hybrids"]/..')
    }

    get car_models(){
        return $('//div[@role="listitem"][i]/a/div/div/div/em')
    }

    verifyCars = async (CarArray: any, tabPanel: String) => {
        for (let i = 1; i <= CarArray.length; i++){
            await browser.pause(5000)
            const modelName = await $('//div[@role="tabpanel"]['+tabPanel+']/div/div[@role="listitem"]['+i+']/a/div/div/div/em')
            expect(modelName).toHaveText(CarArray[i-1])
        }
    }

}

export default new HomePage();