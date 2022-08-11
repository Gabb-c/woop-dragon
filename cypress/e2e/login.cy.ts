/// <reference types="cypress" />

describe('Login', () => {
  it('should input the credentials and go to the dashboard page', () => {
    cy.login();
  });
});
