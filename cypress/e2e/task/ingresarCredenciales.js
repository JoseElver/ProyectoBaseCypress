const elementos = require('../userinterfaces/LoginPage');
const data = require('../../fixtures/datos.json')

class ingresarCredenciales {

    datos () {
         cy.get(elementos.TXT_USUARIO).type(data.username),
         cy.get(elementos.TXT_CLAVE).type(data.password),
         cy.get(elementos.BTN_LOGIN).click()
    }
    
}

module.exports = new ingresarCredenciales();