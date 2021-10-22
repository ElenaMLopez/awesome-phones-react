/// <reference types="cypress" />

describe('Render Home view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('List title', () => {
    cy.contains(/Awesome phones/i)
    cy.contains(/Nice phones list/i)
    cy.contains('button', /Add Phone/i)
  })
})
