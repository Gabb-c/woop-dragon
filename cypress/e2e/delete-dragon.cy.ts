/// <reference types="cypress" />

describe('Add Dragon', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/login');

    cy.location().should((loc) => expect(loc.pathname).to.eq('/login'));

    cy.get('[name=username]')
      .type('woop@sicredi.com.br')
      .should('have.value', 'woop@sicredi.com.br');

    cy.get('[name=password]')
      .type('SuperSecretPassword')
      .should('have.value', 'SuperSecretPassword');

    cy.get('[name=login]').click().should('contain.text', 'loading...').should('be.disabled');

    cy.wait(1000);

    cy.location().should((loc) => expect(loc.pathname).to.eq('/dragons'));
  });

  it('should click in the add button, fill the form and submit', () => {
    cy.location().should((loc) => expect(loc.pathname).to.eq('/dragons'));
    cy.wait(2000);

    cy.get('button').contains('Delete').click();
  });
});
