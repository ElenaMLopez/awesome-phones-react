/// <reference types="cypress" />


describe('User add a phone', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('User is able to add a phone', () => {

    cy.contains('button', /Add Phone/i).click()
    cy.contains(/Add a Phone/i)
    cy.contains('label', /Name/i)
    cy.get('#name').click().type('iPony__TEST')
   
    cy.contains('label', /Manufacturer/i)
    cy.get('#manufacturer').click().type('Peer')

    cy.contains('label', /Description/i)
    cy.get('#description').click().type('Awesome phone')

    cy.contains('label', /Color/i)
    cy.get('#color').click().type('White')

    cy.contains('label', /Price/i)
    cy.get('#price').dblclick().type('2357')

    cy.contains('label', /ImageFileName/i)
    cy.contains('label', /Screen/i)
    cy.get('#screen').click().type('TTF 4.5 inches')

    cy.contains('label', /Processor/i)
    cy.get('#processor').click().type('asdf')

    cy.contains('label', /Ram/i)
    cy.get('#ram').dblclick().type('4')
    cy.get('.add-form__form > .btn').click()
    cy.wait(450)
    cy.contains(/You have add a phone/i)
    cy.get('.add-phone_btn').click()
    cy.contains('button', /Add Phone/i)
  })

  it('should delete a phone', () => {
    cy.contains('iPony__TEST').click()
    cy.contains(/Delete/i).click()
    cy.wait(450)
    cy.contains(/You have deleted this phone/i)
  })
})