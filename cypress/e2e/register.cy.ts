describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/register')
    cy.get('#nom').type("amine")
    cy.get('#prenom').type("amine")
    cy.get("#tele").type("52485906")
    cy.get('#mail').type("amine@gmail.com")
    cy.get("#password").type("12345")
    cy.get("#register").click()
    cy.url().should('eq','http://localhost:4200/accueil')
  })
  it('invalid', () => {
    cy.visit('http://localhost:4200/register')
    cy.get('#nom').type("ayechi")
    cy.get('#prenom').type("amine")
    cy.get("#tele").type("52485906")
    cy.get('#mail').type("zack@gmail.com")
    cy.get("#password").type("12345")
    cy.get("#register").click()
    //cy.url().should('eq','http://localhost:4200/accueil')
  })
  })
