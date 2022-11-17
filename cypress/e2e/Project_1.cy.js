describe('This is First Test Suit',  () => {

    it('This is First Test Case ', () => {
       // cy.viewport(1270,720)
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       // cy.get('.search-keyword').type('br')

       // cy.get('.product:visible').should('have.length' ,30 )
//Add Product
       // cy.contains('ADD TO CART').click()
        //cy.wait(500)
        
       //Parent and Child
    //cy.get('.product').parents()
  cy.get('.brand').then((logo)=>{
        cy.log(logo.text())
    }
    )
    


    })
    
   
    
})