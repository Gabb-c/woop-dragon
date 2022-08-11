/// <reference types="cypress" />

import { Dragon } from '../../src/models/dragon';

Cypress.Commands.add('login', () => {
  cy.visit('http://127.0.0.1:4173/login');
  cy.wait(1000);

  cy.location().should((loc) => expect(loc.pathname).to.eq('/login'));
  cy.get('[name=username]').type('woop@sicredi.com.br').should('have.value', 'woop@sicredi.com.br');

  cy.get('[name=password]').type('SuperSecretPassword').should('have.value', 'SuperSecretPassword');

  cy.get('[name=login]').click().should('contain.text', 'loading...').should('be.disabled');

  cy.wait(1000);

  return cy
    .location()
    .should((loc) => expect(loc.pathname).to.eq('/dragons'))
    .should(() => {
      expect(localStorage.getItem('@Auth:user')).to.exist;
      expect(localStorage.getItem('@Auth:token')).to.exist;
    });
});

Cypress.Commands.add('addManyDragons', () => {
  cy.fixture('dragons.json').then((dragons: Dragon[]) => {
    dragons.forEach((d) => {
      cy.wait(500);
      cy.request('POST', 'https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', d).then(
        (response: Cypress.Response<Dragon>) => {
          expect(response.status).to.equal(201);
          expect(response.body.name).to.equal(d.name);
          expect(response.body.type).to.equal(d.type);
          expect(response.body.histories).to.equal(d.histories);
        }
      );
    });
  });
});

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
