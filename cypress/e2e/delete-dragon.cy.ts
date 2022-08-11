/// <reference types="cypress" />

describe('Delete Dragon', () => {
  it('should click in the add button, fill the form and submit', () => {
    cy.login();

    cy.intercept('GET', 'https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon').as(
      'getAllDragons'
    );

    cy.wait('@getAllDragons').then((int) => {
      if (int.response.body.length === 0) {
        cy.addManyDragons();
        cy.reload();
        cy.wait(1000);
      }
      return cy.get('button').contains('Delete').click();
    });
  });
});
