// Declaração do seletor do botão "Automobile" da página inicial
const BTN_AUTOMOBILE = '#nav_automobile'


Cypress.Commands.add('acessarPortalTricentis', () => {
    cy.visit('/') 
})

Cypress.Commands.add('validarAutomobile', () => {
    cy.get(BTN_AUTOMOBILE).should('be.visible')
})

Cypress.Commands.add('clickBtnAutomobile', () => {
    cy.get(BTN_AUTOMOBILE).click()
    cy.url().should('contain','sampleapp.tricentis.com/101/app.php')
})
