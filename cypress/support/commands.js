// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*const cypress = require("cypress");
const { values } = require("cypress/types/lodash");*/

Cypress.Commands.add('search',(value)=>{//en este archivo Command guardaremos el comando search
    cy.fixture('index').then((indexAlias)=>{
        cy.get(indexAlias.searchBox).type(value);// reemplazo dress x value es decir un parametro no fijo y buscar cuaquier cosa
        cy.get(indexAlias.searchButton).click();
      })
      /*cy.fixture('index').then((indexAlias)=>{
        cy.get(indexAlias.searchBox).type('qwerty');
        cy.get(indexAlias.searchButton).click();
      })*/
})