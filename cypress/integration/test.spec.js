const { createYield } = require("typescript")

describe('First test', () => {
    it('Open webapp', () => {
        cy.visit('')
        cy.get('.card').eq(1).click()
    })
})