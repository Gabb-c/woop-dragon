/// <reference types="cypress" />

describe('Logout', () => {
  it('should click in the logout button and be redirected to the login page', () => {
    cy.login();

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
