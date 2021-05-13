let usuario = null


//setando um item com chave "username" e valor "Desmennyellysson"
// window.localStorage.setItem('username', 'Desmennyellysson') // window.localStorage.username = 'Desmennyellysson'

if (!window.localStorage.username) {
  usuario = window.prompt('Por favor informe seu nome:')
  window.localStorage.setItem('username', usuario)
} else {
  usuario = window.localStorage.username // window.localStorage.getItem('username')
}

document.write(`<h1>Olá ${usuario}</h1>`)