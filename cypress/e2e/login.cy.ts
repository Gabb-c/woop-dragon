/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => cy.visit('http://127.0.0.1:5173/login'));

  it('should input the credentials and go to the dashboard page', () => {
    cy.location().should((loc) => expect(loc.pathname).to.eq('/login'));

    cy.get('[name=username]')
      .type('woop@sicredi.com.br')
      .should('have.value', 'woop@sicredi.com.br');

    cy.get('[name=password]')
      .type('SuperSecretPassword')
      .should('have.value', 'SuperSecretPassword');

    cy.get('[name=login]').click().should('contain.text', 'loading...').should('be.disabled');

    cy.wait(1000);

    cy.location()
      .should((loc) => expect(loc.pathname).to.eq('/dragons'))
      .should(() => {
        /* eslint-disable @typescript-eslint/no-unused-expressions */
        expect(localStorage.getItem('@Auth:user')).to.exist;
        expect(localStorage.getItem('@Auth:token')).to.exist;
        /* eslint-enable @typescript-eslint/no-unused-expressions */
      });
  });
});
