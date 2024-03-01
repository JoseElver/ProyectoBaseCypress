import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
const abir = require('../task/abrirPagina');
const credenciales = require('../task/ingresarCredenciales');
const validar = require('../questions/validar')

Given("el usuario abre la pagina de Saucedemo", ()=> {
    abir.url();
});

When("ingresa las credenciales", function(){
    credenciales.datos();
});

Then("verifica el ingreso", ()=> {
    validar.validarMensaje();
});