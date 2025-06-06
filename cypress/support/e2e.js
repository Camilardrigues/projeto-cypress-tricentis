// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './pages/home.page'
import './pages/insurant.page'
import './pages/price.page'
import './pages/product.page'
import './pages/sendQuote.page'
import './pages/vehicle.page'

// Ignora erro de JavaScript não tratado
Cypress.on('uncaught:exception', (err, runnable) => {
    return false; 
  });
