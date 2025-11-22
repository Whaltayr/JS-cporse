//funções geradores, pode atrasar oseu retorno, 
function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Amarelo'
}

let itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

function* perguntas(){
    const nome = yield 'Qualo seu nome?'
    const esporte = yield 'Qualo seu nome?'
    return "Seu nome é " + nome +" ', seu esporte favorito é ' " + esporte
}
let itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Josy').value)
console.log(itp.next('Programming').value)