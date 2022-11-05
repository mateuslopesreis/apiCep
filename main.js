const formConsultarCep = document.querySelector('#consultarCep')
const inputCep = formConsultarCep.inputCep
const divDados = document.querySelector('#dados')

formConsultarCep.addEventListener('submit', function(event){
  event.preventDefault()//anula o comportamento padrao de envio do Form
  consultarCep(inputCep.value)
})


async function consultarCep(cep){
 let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
 let dadosCep = await response.json()
 divDados.innerHTML = `
 <p> Endereço: ${dadosCep.logradouro} </p>
 <p> Localidade: ${dadosCep.localidade} </p>
 
 `
}

consultarCep()