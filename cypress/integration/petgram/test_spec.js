/* global describe,it,cy*/
describe('Petgram', function () {
  it('para ver si la app funciona', () => {
    cy.visit('/')
  });
  it('Navegamos a unca categoria y vemos fotos', () => {
    cy.visit('/pet/1')
    cy.get('article')
  });
  it('si podemos navegar con la navbar a la home', () => {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  });
  it('los usuarios no registrados ven el formulario de registro e incio de sescion al ir a fav', () => {

    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  });




});
