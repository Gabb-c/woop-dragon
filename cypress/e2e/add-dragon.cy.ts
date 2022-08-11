/// <reference types="cypress" />

describe('Add Dragon', () => {
  it('should click in the add button, fill the form and submit', () => {
    cy.login();

    cy.get('[name=add-dragon]').click();

    cy.wait(1000);

    cy.location().should((loc) => expect(loc.pathname).to.eq('/dragons/form'));

    cy.get('[name=name]').type('Lorem Ipsum').should('have.value', 'Lorem Ipsum');

    cy.get('[name=type]').type('Sit Amet').should('have.value', 'Sit Amet');

    cy.get('[name=histories]')
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
