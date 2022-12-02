//se crea este archivo command login para tener separado los comandos de login de otros TC 
Cypress.Commands.add('login',(email,password)=>{
    cy.fixture('login').then((login)=>{
        cy.get(login.loginLink).click();
        cy.get(login.email).type(email);
        cy.get(login.password).type(password);
        cy.get(login.loginButton).click();
})
})