/// <reference types="cypress" />

describe('Delete Dragon', () => {
  it('should click in the add button, fill the form and submit', () => {
    cy.login();
    cy.wait(2000);

    cy.get('button').contains('Delete').click();
  });
});
