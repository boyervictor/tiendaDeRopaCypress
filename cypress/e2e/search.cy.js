

describe('search elements ', () => {
  beforeEach(()=>{
    cy.visit('http://automationpractice.com');
  })
  it('search for elements witch multiple results', () => {
    cy.search('dress')
    cy.fixture('searchResult').then((searchResult)=>{
      cy.get(searchResult.title).should('contain','dress');
    })
  })
    it('search for elements witch no results', () => {
      cy.search('qwerty')  
      cy.fixture('searchResult').then((searchResult)=>{
        cy.get(searchResult.alert).should('contain','No results');
      }) 
    })
    it('search for elemento special code', ()=>{
      cy.readFile('cypress/support/text/search.txt').then((Text)=>{
          cy.search(Text);
      })
      cy.fixture('searchResult').then((searchResult)=>{
        cy.get(searchResult.alert).should('contain','No results');
        // readFile de la lib de cypress le indicamos la ruta desde donde leera el archivo y lo guarda en text
        //cy.search(Text); es un custom command ya creado anteriormente
        // usamos el mismo cy.fixture para que busque "search" el resultado del pedido "No result"
        // se creo una carpeta "text" en supptor y dentro de ella se creo un file "search" 
        // en el file "search.txt" escribo el contenido que luego tiene que ser cargado en el box de la web 
      }) 
    }) 
})