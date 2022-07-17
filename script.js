let nome = document.querySelector('#nome')
let sobrenome = document.querySelector('#sobrenome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')

let erroNome = document.querySelector('#erro-nome')
let erroSobrenome = document.querySelector('#erro-sobrenome')
let erroEmail = document.querySelector('#erro-email')
let erroMensagem = document.querySelector('#erro-mensagem')


function validacaoCampos() {
    document.getElementById('sucesso').textContent = ''
    if (nome.value == '') {//nome
        erroNome.textContent = ' Obrigatório'
        nome.classList.add('erro')
        nome.focus()
    } else if (nome.value.length < 2) {
        erroNome.textContent = ' Por favor escreva um formato de nome válido'
        nome.focus()
        
        
    } else if (sobrenome.value == '') {//sobrenome
        sobrenome.disabled = false
        erroNome.textContent = ''
        erroSobrenome.textContent = ' Obrigatório'
        sobrenome.classList.add('erro')
        sobrenome.focus()
    } else if (sobrenome.value.length < 2) {
        erroSobrenome.textContent = ' Por favor escreva um formato de sobrenome válido'
        sobrenome.focus()



    } else if (email.value == '') {//email
        erroNome.textContent = ''
        erroSobrenome.textContent = ''
        erroMensagem.textContent = ''
        erroEmail.textContent = ' Obrigatório'
        email.classList.add('erro')
        email.focus()
    }else if (email.value.search(/\S+@\S+\.\S+/)){
        erroEmail.textContent=' Formato de email não válido'
    

    } else if (mensagem.value == '') {//mensagem
        erroNome.textContent = ''
        erroSobrenome.textContent = ''
        erroEmail.textContent = ''
        erroMensagem.textContent = ' Obrigatório'
        mensagem.classList.add('erro')
        mensagem.focus()
    } else if (mensagem.value.length < 10) {
        erroMensagem.textContent = ' Por favor escreva uma mensagem mais extensa'
        mensagem.focus()
    } else {

        document.getElementById('sucesso').textContent = 'Informacões enviadas com sucesso'
        erroNome.textContent = ''
        erroSobrenome.textContent = ''
        erroEmail.textContent = ''
        erroMensagem.textContent = ''

        document.querySelector('form').reset()

    }
}

function limpar() {//criei essa function para poder limpar de maneira geral o fomulário
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


document.querySelector('#enviar').addEventListener('click', function (event) { event.preventDefault() })
document.querySelector('#enviar').addEventListener('click', validacaoCampos)

document.querySelector('#nome').addEventListener(('click', 'keypress'), () => nome.classList.remove('erro'))
document.querySelector('#sobrenome').addEventListener(('click', 'keypress'), () => sobrenome.classList.remove('erro'))
document.querySelector('#email').addEventListener(('click', 'keypress'), () => email.classList.remove('erro'))
document.querySelector('#mensagem').addEventListener(('click', 'keypress'), () => mensagem.classList.remove('erro'))


document.querySelector('#limpar').addEventListener('click', limpar)
