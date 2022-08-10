/// <reference types="cypress" />

describe('Edit Dragon', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:4173/login');

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

    cy.get('button').contains('Edit').click();

    cy.location().should((loc) => expect(loc.pathname).to.contains('/dragons/form'));

    cy.get('[name=name]')
      .clear({ interval: 1000 })
      .type('Lorem Ipsum')
      .should('have.value', 'Lorem Ipsum');

    cy.get('[name=type]')
      .clear({ interval: 1000 })
      .type('Sit Amet')
      .should('have.value', 'Sit Amet');

    cy.get('[name=histories]')
      .clear({ interval: 1000 })
      .type(
        'Mauris finibus vitae risus eget consectetur. Aliquam consectetur purus mauris, vehicula feugiat est consectetur quis.'
      )
      .should(
        'have.value',
        'Mauris finibus vitae risus eget consectetur. Aliquam consectetur purus mauris, vehicula feugiat est consectetur quis.'
      );

    cy.get('[name=save-dragon]').click().should('contain.text', 'loading...');

    cy.wait(1000);

    cy.location().should((loc) => expect(loc.pathname).to.eq('/dragons'));
  });
});
