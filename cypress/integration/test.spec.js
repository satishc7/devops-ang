const { createYield } = require("typescript")

describe('First test', () => {
    it('Open webapp page', () => {
        cy.visit('')
        cy.get('.card').eq(1).click()
    })
})