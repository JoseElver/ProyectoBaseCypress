const elemento = require('../userinterfaces/LoginPage');

class validar {
    datos = {
        mensaje: ()=> cy.get(elemento.LBL_PRODUCTS)
    }

    validarMensaje(dato) {
        this.datos.mensaje().should('be.visible')
        //.and('have.text',dato)
    }
}

module.exports = new validar();