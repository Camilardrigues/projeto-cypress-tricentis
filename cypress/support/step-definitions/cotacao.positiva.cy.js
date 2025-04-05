// Importa os métodos do Cucumber para criar os passos BDD
import {Given, When, And, Then, Before, After} from 'cypress-cucumber-preprocessor/steps'


Given('que o usuário acessa o portal Tricentis', () => {
  cy.visit("/")
})

And('clico no botão Automobile', () => {
  cy.clickBtnAutomobile()
})

And('valido o acesso à página Automobile', () => {
  cy.validarAutomobile()
  cy.validarPaginaVehicle() //Valida página do veículo
})

When('preenche corretamente os dados do veículo', () => {
  cy.fillVehicleData()
  cy.validarPaginaInsurant() //Valida página do segurado
})

And('preenche corretamente os dados do segurado', () => {
  cy.fillInsurantData()
  cy.validarPaginaProduct() //Valida página do produto
})

And('preenche corretamente os dados do produto', () => {
  cy.fillProductData()
  cy.validarPaginaPrice() //Valida página do preço
})

And('seleciona uma opção de preço', () => {
  cy.selectPriceOption()
  cy.validarPaginaSendQuote() //Valida página final de envio
})

And('preenche os dados finais para envio', () => {
  cy.fillSendQuote()
})

And('envia a cotação', () => {
  cy.submitQuote()
})

Then('uma mensagem de confirmação de envio deve ser exibida', () => {
  cy.get('.sweet-alert').should('be.visible')
})