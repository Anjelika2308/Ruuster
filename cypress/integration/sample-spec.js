describe('My First Test', function (){
    it('Finds and element', function (){
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        cy.url()
            .should('include', '/commands/actions')

        cy.get('.action-email')
            .type('test@email.com')
            .should('have.value', 'test@email.com')
    })
})
