/// <reference types="cypress" />
import { Dragon } from '../../src/models/dragon';

describe('Dragon API', () => {
  const mockDragonSave = {
    name: 'Ysera',
    type: 'Dream',
    histories: 'A nice dragon history',
  } as Dragon;

  const mockDragonEdit = {
    name: 'Malygos',
    type: 'Magic',
    histories: 'Another nice dragon history',
  } as Dragon;

  it('should add a new dragon', () => {
    cy.request(
      'POST',
      'https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon',
      mockDragonSave
    ).then((response: Cypress.Response<Dragon>) => {
      expect(response.status).to.equal(201);
      expect(response.body.name).to.equal(mockDragonSave.name);
      expect(response.body.type).to.equal(mockDragonSave.type);
      expect(response.body.histories).to.equal(mockDragonSave.histories);
      mockDragonSave.id = response.body.id;
    });
  });

  it('should get a dragon by its id', () => {
    cy.request(
      'GET',
      `https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${mockDragonSave.id}`,
      mockDragonSave
    ).then((response: Cypress.Response<Dragon>) => {
      expect(response.status).to.equal(200);
      expect(response.body.name).to.equal(mockDragonSave.name);
      expect(response.body.type).to.equal(mockDragonSave.type);
      expect(response.body.histories).to.equal(mockDragonSave.histories);
    });
  });

  it('should get all dragons', () => {
    cy.request(
      'GET',
      `https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${mockDragonSave.id}`,
      mockDragonSave
    ).then((response: Cypress.Response<Dragon[]>) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.exist;
    });
  });

  it('should edit a dragon', () => {
    cy.request(
      'PUT',
      `https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${mockDragonSave.id}`,
      mockDragonEdit
    ).then((response: Cypress.Response<Dragon>) => {
      expect(response.status).to.equal(200);
      expect(response.body.name).to.equal(mockDragonEdit.name);
      expect(response.body.type).to.equal(mockDragonEdit.type);
      expect(response.body.histories).to.equal(mockDragonEdit.histories);
    });
  });

  it('should delete a dragon', () => {
    cy.request(
      'DELETE',
      `https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${mockDragonSave.id}`,
      mockDragonEdit
    ).then((response: Cypress.Response<Dragon>) => {
      expect(response.status).to.equal(200);
      expect(response.body.name).to.equal(mockDragonEdit.name);
      expect(response.body.type).to.equal(mockDragonEdit.type);
      expect(response.body.histories).to.equal(mockDragonEdit.histories);
    });
  });
});
