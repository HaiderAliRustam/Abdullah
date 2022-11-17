//<refrence type ="cypress"/>
describe('This is First Test Suit',  () => {

    it('This is First Test Case ', () => 
    {
       // cy.viewport(1270,720)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')
        // cy.get('#autocomplete').type('ame').get('.ui-menu-item-wrapper').each((abc , index)=>{
        //     cy.log(abc.text())
        // } ) 
        //cy.get("[type='checkbox']").click().should('be.checked')
        // cy.get("[type$='checkbox']").check(['option2','option3']).should('be.checked').and('have.value','option2')
        // cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
        // cy.get("[value$='radio2']").click()
        // cy.get('tr td:nth-child(2)').each((abc , index)=>{
        //     const textVariale =abc.text()
        //    // cy.log('This is My Table Value ', {index}, 'This is My index Value ' , {textVariale})
        //     if(textVariale.includes('Resume'))
        //     {
        //         cy.log('This is My Table Value ', {index}, 'This is My index Value ' , {textVariale})
        //     }
        // })
        //Hide And Display massage is control

        // cy.get('#displayed-text').should('be.visible')
        // cy.get('#hide-textbox').click()
        // cy.get('#displayed-text').should('not.be.visible')

        // cy.get('#show-textbox').click()
        // cy.get('#displayed-text').should('be.visible')

        //Alert Massage and Popup is Control simple Alret
        // cy.get('#alertbtn').click()
        // cy.on('window:alert', (popup) => {
        //     expect(popup).to.be.equal('Hello , share this practice page and share your knowledge')
        // })
        //Confrim Alret ye abi Practice ni kiya 

        cy.get('.mouse-hover-content').invoke('show').contains('Top').click()
        cy.url().should('include', 'top')


    })
    
   
    
})