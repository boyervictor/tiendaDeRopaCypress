

describe('search elements ', () => {
  beforeEach(()=>{
    cy.visit('http://automationpractice.com');
  })
  it('search for elements witch multiple results', () => {
    cy.fixture('index').then((indexAlias)=>{
      cy.get(indexAlias.searchBox).type('dress');
      cy.get(indexAlias.searchButton).click();
    })
    cy.fixture('searchResult').then((searchResult)=>{
      cy.get(searchResult.title).should('contain','dress');
    })
  })
    it('search for elements witch no results', () => {
      cy.fixture('index').then((indexAlias)=>{
        cy.get(indexAlias.searchBox).type('qwerty');
        cy.get(indexAlias.searchButton).click();
      })  
      cy.fixture('searchResult').then((searchResult)=>{
        cy.get(searchResult.alert).should('contain','No results');
      }) 
    })
})