let nome = document.querySelector('#nome')
let sobrenome = document.querySelector('#sobrenome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')

let erroNome = document.querySelector('#erro-nome')
let erroSobrenome = document.querySelector('#erro-sobrenome')
let erroEmail = document.querySelector('#erro-email')
let erroMensagem = document.querySelector('#erro-mensagem')



function validacaoCampos() {
    if (nome.value == '') {//nome
        document.getElementById('sucesso').textContent = ''
        erroNome.textContent = ' Campo obrigatório'
        nome.focus()
    }else if (nome.value.length < 2) {
        erroNome.textContent = ' Digite um formato de nome válido'
    }
     else if (sobrenome.value == '') {//sobrenome
        erroNome.textContent = ''
        erroSobrenome.textContent = ' Campo obrigatório'
        sobrenome.focus()
    }else if (sobrenome.value.length < 2) {
        erroSobrenome.textContent = ' Digite um formato de sobrenome válido'
    } else if (email.value == '') {//email
        erroSobrenome.textContent = ''
        erroEmail.textContent = ' Campo obrigatório'
        email.focus()
    } else if (mensagem.value == '') {//mensagem
        erroEmail.textContent = ''
        erroMensagem.textContent = ' Por favor deixe sua mensagem'
        mensagem.focus()
    }else if (mensagem.value.length < 10) {
        erroMensagem.textContent = ' Por favor escreva uma mensagem mais extensa'
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

    document.querySelector('form').reset()

}


document.querySelector('#enviar').addEventListener('click', function (event) { event.preventDefault() })
document.querySelector('#enviar').addEventListener('click', validacaoCampos)

document.querySelector('#limpar').addEventListener('click', limpar)
