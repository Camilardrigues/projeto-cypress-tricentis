// Constantes que armazenam os seletores do plano de preço e botão "Next" da etapa Price Option
const SELECT_OPTION= '#selectultimate'
const BTN_NEXT = '#nextsendquote'


//Comando customizado que realiza a seleção de uma opção de preço ("Ultimate") na etapa de Price Option do formulário.
Cypress.Commands.add('selectPriceOption', () => {
      cy.get(SELECT_OPTION).click({force: true})
      cy.get(BTN_NEXT).click()
      cy.get('.error').should('not.be.visible')
    })

Cypress.Commands.add('validarPaginaPrice', () => {
      cy.get(SELECT_OPTION).should('be.visible') 
    })

    Cypress.Commands.add('validarPaginaPrice', () => {
      cy.get(".idealsteps-step-active, a[name = 'Select Price Option']").should("be.visible")   
      cy.log('Aba de opção de preço')
    });