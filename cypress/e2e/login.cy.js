/// <reference types="cypress" />
import Login from '../pages/login/index'

describe ('Login', () =>{ 

it('Login com Successo', () =>{
    // Acessar a página de login
    Login.vistarPagina(),
    Login.preencherCredenciaisValidas()  
})
})
