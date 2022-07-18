let nome = document.querySelector('#nome')
let sobrenome = document.querySelector('#sobrenome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let botaoEnviar = document.querySelector('#enviar')
let botaoLimpar = document.querySelector('#limpar')

let erroNome = document.querySelector('#erro-nome')
let erroSobrenome = document.querySelector('#erro-sobrenome')
let erroEmail = document.querySelector('#erro-email')
let erroMensagem = document.querySelector('#erro-mensagem')

//nome
function validacaoNome() {
    if (nome.value.length == 0) {
        erroNome.textContent = ' Obrigatório'
        nome.classList.add('erro')
        nome.focus()
        return
    } else if (nome.value.length <= 1) {
        nome.classList.remove('erro')
        erroNome.textContent = ' Por favor escreva um formato de nome válido'
        return
    }
    else if (nome.value.match(/[0-9]/)) {//regex para validar o nome
        erroNome.textContent = ' Esta opção só admite letras'
        return
    }
    nome.classList.remove('erro')
    erroNome.textContent = ''
    return 1
}

//sobrenome
function validacaoSobrenome() {
    if (sobrenome.value.length == 0) {
        erroSobrenome.textContent = ' Obrigatório'
        sobrenome.classList.add('erro')
        sobrenome.focus()
        return
    } else if (sobrenome.value.length <= 1) {
        sobrenome.classList.remove('erro')
        erroSobrenome.textContent = ' Por favor escreva um formato de sobrenome válido'
        return
    }
    else if (sobrenome.value.match(/[0-9]/)) {//regex para validar o sobrenome
        erroSobrenome.textContent = ' Esta opção só admite letras'
        return
    }
    sobrenome.classList.remove('erro')
    erroSobrenome.textContent = ''
    return 1
}

//email
function validacaoEmail() {
    if (email.value == '') {
        erroEmail.textContent = ' Obrigatório'
        email.classList.add('erro')
        email.focus()
        return
    } else if (email.value.search(/^[\w]+@{1}[\w]+\.[a-z]{2,4}$/)) {//regex para validar o email
        erroEmail.textContent = ' Formato de email não válido'
        return
    }
    email.classList.remove('erro')
    erroEmail.textContent = ''
    return 1
}

//mensagem
function validacaoMensagem() {
    if (mensagem.value == '') {
        erroMensagem.textContent = ' Obrigatório'
        mensagem.classList.add('erro')
        mensagem.focus()
        return
    } else if (mensagem.value.length < 10) {
        erroMensagem.textContent = ' Por favor escreva uma mensagem mais extensa'
        return
    }
    mensagem.classList.remove('erro')
    erroMensagem.textContent = ''
    return 1
}

//validacao geral
function validacao() {
    if (validacaoNome() == 1 && validacaoSobrenome() == 1 && validacaoEmail() == 1 && validacaoMensagem() == 1) {
        botaoEnviar.disabled = false
        botaoEnviar.classList.add('botaoEnabled')

    }
    else {
        document.getElementById('sucesso').textContent = ''
        botaoEnviar.disabled = true
        botaoEnviar.classList.remove('botaoEnabled')
    }
}

function enviarDados() {//falso envio de dados :D
    document.querySelector('form').reset()
    document.getElementById('sucesso').textContent = 'Dados enviados com sucesso'

}


function limpar() {//criei essa function para poder limpar de maneira geral o fomulário :D
    document.getElementById('sucesso').textContent = ''
    erroNome.textContent = ''
    erroSobrenome.textContent = ''
    erroEmail.textContent = ''
    erroMensagem.textContent = ''

    nome.classList.remove('erro')
    sobrenome.classList.remove('erro')
    email.classList.remove('erro')
    mensagem.classList.remove('erro')
    document.querySelector('form').reset()
}

//eventos
botaoEnviar.addEventListener('click', function (event) { event.preventDefault() })
botaoEnviar.addEventListener('click', enviarDados)
botaoLimpar.addEventListener('click', limpar)

//validacoes dos input
document.querySelector('form').addEventListener(('click','mouseover'), validacao)
nome.addEventListener('input', validacaoNome)
sobrenome.addEventListener('input', validacaoSobrenome)
email.addEventListener('input', validacaoEmail)
mensagem.addEventListener('input', (validacaoMensagem,validacao))



