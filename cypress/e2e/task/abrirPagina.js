class abrirPagina {

    pagina = {
        ambiente: ()=> cy.visit('/'),
        pantalla: ()=> cy.viewport(1280,800)
    }

    url() {
        this.pagina.ambiente();
        this.pagina.pantalla();
    }
}

module.exports = new abrirPagina();