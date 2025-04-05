// Constantes que armazenam os seletores dos campos da etapa "Send Quote"
const INPUT_EMAIL = '#email'
const INPUT_PHONE = '#phone'
const INPUT_USERNAME = '#username'
const INPUT_PASSWORD = '#password'
const INPUT_CORNFIRM_PASSWORD = '#confirmpassword'
const INPUT_COMMENTS = '#Comments'
const BTN_SEND = '#sendemail'


//Comando customizado que preenche o formulário da etapa "Send Quote"
Cypress.Commands.add('fillSendQuote', () => {
      cy.get(INPUT_EMAIL).type('teste@gmail.com')
      cy.get(INPUT_PHONE).type('81999999999')
      cy.get(INPUT_USERNAME).type('CamilaNaAccenture')
      cy.get(INPUT_PASSWORD).type('Teste@123')
      cy.get(INPUT_CORNFIRM_PASSWORD).type('Teste@123')
      cy.get(INPUT_COMMENTS).type('Gostei do atendimento, irei voltar mais vezes!')
      cy.get(BTN_SEND).click();
      cy.get('.error').should('not.be.visible')
    })

  // Ação que envia a cotação
  Cypress.Commands.add('submitQuote', () => {
      cy.get('.sweet-alert', {timeout: 15000}).should('be.visible')
      cy.get('.confirm').click()
      cy.get('.error').should('not.be.visible')
     
      cy.log('Dados da proposta enviados com sucesso!')
    })

    Cypress.Commands.add('validarPaginaSendQuote', () => {
      cy.get(INPUT_EMAIL).should('be.visible')
    })

    Cypress.Commands.add('validarPaginaSendQuote', () => {
      cy.get(".idealsteps-step-active, a[name = 'Send Quote']").should("be.visible")   
      cy.log('Aba de cotação')
    });