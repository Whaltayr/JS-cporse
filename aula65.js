const pessoa = {
    nome:"Josy",
    cursos:{
        c1:"Javascrip",
        c2:"N8N",
        c3:"AI"
    },
    jogo:"Disco Elysium",
    soul:"Dark"
}
//convertemos objecto literal  em json
const string_json='{"nome":"Josy","cursos":{"c1":"Javascrip","c2":"N8N","c3":"AI"},"jogo":"Disco Elysium","soul":"Dark"}'

const s_json_pessoa= JSON.stringify(pessoa)

//tambem podemos fazer o inverso com o parse
const o_json_pessoa= JSON.parse(string_json)

console.log(pessoa);
console.log(pessoa.cursos.c2);

console.log(s_json_pessoa);
console.log(o_json_pessoa);