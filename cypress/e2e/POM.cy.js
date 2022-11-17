// import cypress from "cypress";
// import { describe } from "mocha";
///<refrence type ="cypress"/>

import LoginPage from '../support/LoginObject.cy'

describe('POM Secrise', () =>
{
    const variable = new LoginPage
    it('What is Fecture' , ()=>{
        variable.visit()
        variable.clickSubmitButton()

})

})