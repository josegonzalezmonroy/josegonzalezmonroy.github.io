const preencherFormulario = (endereco) => {
    let elemento = document.querySelector('li')
    elemento.textContent = 'CEP: '+endereco.cep+ ', Bairro ' + endereco.bairro+', '+endereco.logradouro + ', na cidade de ' + endereco.localidade+'-'+endereco.uf
    document.querySelector('#cep').value=""
    
}


const eNumero = (numero) => /^[0-9]+$/.test(numero)
const cepValido = (cep) => cep.length == 8 && eNumero(cep)

const pesquisarCEP = async () => {
    const cep = document.getElementById('cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`
    if (cepValido(cep)) {
        const dados = await fetch(url)//await permite esperar para resolver paso a paso
        const endereco = await dados.json()
        if (endereco.hasOwnProperty('erro')) {
            document.querySelector('li').textContent = 'CEP não encontrado'
        } else { preencherFormulario(endereco) }
    } else {
        document.querySelector('li').textContent = 'CEP incorreto'

    }
}

document.querySelector('#botaoRegistrar').addEventListener('click', function (evt) {//adicionando eventListener
    evt.preventDefault()
})
document.getElementById('botaoRegistrar')
    .addEventListener('click', pesquisarCEP)