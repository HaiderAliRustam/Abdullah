// const cypress = require("cypress");
// const { describe } = require("mocha");
///<refrence type ="cypress"/>

describe('POST REQ Check' , ()=>{
    it.only('Check Post',()=>{
        cy.request({
            methord:'',
            url:'https://reqres.in/api/userhttps://rahulshettyacademy.com/AutomationPractice/',
            body:{
                "name": "morpheus121",
                "job": "leader121"
            }
        }).then((rep)=>{
            cy.log(rep)
        })
    })
})

//It is GET Request 
// describe('this is Query Paramater ', () => {
//     it('this is First  Page ', () => {

//         cy.request({
//             methord: 'PUT',
//             url: 'https://reqres.in/api/users',
//             body: {
//                 "name": "morpheus",
//                 "job": "leader"

//             }


//         }).then((rep) => {
//             cy.log(rep)
//         })
//     })
// })

//It is POST Request
// describe('This is post Res' , ()=>{
//     it('This is Post Body ', ()=>{

//         cy.request({
//             methotd: 'POST',
//             url:'https://reqres.in/api/users',
//             body:{
//                 "name": "morpheus",
//                 "job": "leader"
//             }
//         })
//     })
// })

//It is GET Request
// describe('this is Query Paramater ', ()=>{
//     it('this is First Page ', ()=>{

//         cy.request({
//             methord:'Get',
//             url: 'https://reqres.in/api/users',
//             qs:{
//                 'page': '2'

//             }


//         }).then((rep)=>{
//             cy.log(rep.body.data[0].avatar)
//         })
//     })
// })

//Intercept Contept

// describe('Intercept',()=>{
//     it('Checking Intercept', ()=>{
//         cy.intercept('GET','**/AutomationPractice/').as('userinfo')
//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.wait('@userinfo').then((resp)=>{
//             cy.log(resp)
//         })

//     })
// })