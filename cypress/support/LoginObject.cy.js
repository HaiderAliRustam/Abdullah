///<refrence type ="cypress"/>
const data= require('../fixtures/example.json')

class LoginPage{

    visit()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    clickSubmitButton()
    {
        cy.get(data.name).type(data.userName)
        cy.get(data.email).type(data.UserPass)
        cy.get(data.bosubminbt).click()
    }

}
export default LoginPage