describe('Login',()=>{
    beforeEach(()=>{
        cy.visit('http://automationpractice.com');
    })
    it('Login con email y usuario incorrecto',()=>{
        cy.login('pepe','pepe')
        cy.fixture('login').then((login)=>{
            cy.get(login.incorrectBannerLogin).should('contain','Invalid email address');
        })
        
    })
})