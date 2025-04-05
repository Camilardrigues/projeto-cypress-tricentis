// Constantes que armazenam os seletores dos campos da etapa "Product Data"
const START_DATE = '#startdate'
const INSURANCE_SUM = '#insurancesum'
const MERIT_RATING = '#meritrating'
const DAMAGE_INSURANCE = '#damageinsurance'
const OPTIONAL_PRODUCTS = '#EuroProtection'
const COURTESY_CAR = '#courtesycar'
const BTN_NEXT = '#nextselectpriceoption'

// Importa a biblioteca faker para gerar datas futuras e moment para formatá-las
import{faker} from '@faker-js/faker'
import moment from 'moment';


//Comando customizado que preenche a etapa "Product Data" no formulário do portal Tricentis
Cypress.Commands.add('fillProductData', () => {
      cy.get(START_DATE).type(
        moment(
            faker.date.future(2)
          ).add(2,'months').format('MM/DD/YYYY'))
      cy.get(INSURANCE_SUM).select('3.000.000,00');
      cy.get(MERIT_RATING).select('Bonus 3');
      cy.get(DAMAGE_INSURANCE).select('Full Coverage');
      cy.get(OPTIONAL_PRODUCTS).click({force:true})
      cy.get(COURTESY_CAR).select('Yes')
      cy.get(BTN_NEXT).click()
      cy.get('.error').should('not.be.visible')
    })

    Cypress.Commands.add('validarPaginaProduct', () => {
      cy.get(".idealsteps-step-active, a[name = 'Enter Product Data']").should("be.visible")   
      cy.log('Aba de dados do produto')
    });