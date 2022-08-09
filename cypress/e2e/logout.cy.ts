/// <reference types="cypress" />

describe('Logout', () => {
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

  it('should click in the logout button and be redirected to the login page', () => {
    cy.location().should((loc) => expect(loc.pathname).to.eq('/dragons'));

    cy.get('[name=logout]').click();

    cy.wait(1000);

    cy.location()
      .should((loc) => expect(loc.pathname).to.eq('/login'))
      .should(() => {
        /* eslint-disable @typescript-eslint/no-unused-expressions */
        expect(localStorage.getItem('@Auth:user')).to.not.exist;
        expect(localStorage.getItem('@Auth:token')).to.not.exist;
        /* eslint-enable @typescript-eslint/no-unused-expressions */
      });
  });
});
