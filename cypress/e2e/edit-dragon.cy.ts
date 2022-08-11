/// <reference types="cypress" />

describe('Edit Dragon', () => {
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
});
