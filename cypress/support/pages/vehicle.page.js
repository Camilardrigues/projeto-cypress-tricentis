// Constantes que armazenam os seletores dos campos da etapa "Vehicle Data"
const ID_PAGE = '#selectedinsutance'
const MAKE = '#make'
const ENGINE = '#engineperformance'
const DATE = '#dateofmanufacture'
const NUMBER_OF_SEATS = '#numberofseats'
const FUEL_TYPE = '#fuel'
const LIST_PRICE = '#listprice'
const LICENCE_PLATE = '#licenseplatenumber'
const ANNUAL_MILEAGE = '#annualmileage'
const BTN_NEXT = '#nextenterinsurantdata'
// Gera uma idade aleatória para testes (caso precise em outras partes do fluxo)
const idadeAleatoria = faker.number.int({min:18,max:70})

// Importação das bibliotecas faker e moment para geração e formatação de dados dinâmicos
import { faker } from '@faker-js/faker';
import moment from 'moment';

//Comando customizado que valida se a tela "Automobile Insurance" está visível.
Cypress.Commands.add('automobileInsurace', () => {
  cy.get(ID_PAGE).should('be.visible')
  cy.log('Automobile Insurance está visível')
})

//Comando customizado que preenche o formulário da etapa "Vehicle Data"
Cypress.Commands.add('fillVehicleData', () => {
  cy.get(MAKE).select('BMW')
  cy.get(ENGINE).type('120')
  cy.get(DATE).type(
    moment(
      faker.date.past(20)
    ).format('MM/DD/YYYY')
  )
  cy.get(NUMBER_OF_SEATS).select('5')
  cy.get(FUEL_TYPE).select('Diesel')
  cy.get(LIST_PRICE).type('30000')
  cy.get(LICENCE_PLATE).type('XYZ1234')
  cy.get(ANNUAL_MILEAGE).type('10000')
  cy.get(BTN_NEXT).click()
  cy.get('.error').should('not.be.visible')
})

Cypress.Commands.add('validarPaginaVehicle', () => {
  cy.get(".idealsteps-step-active, a[name = 'Enter Vehicle Data']").should("be.visible")   
  cy.log('Aba de dados do veículo')
});
