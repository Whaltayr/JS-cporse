const caixa = document.getElementById("caixa")

const carros = ["toyota","Ford","Mahindra","Audi"]

let ul = `<ul>`
carros.map((el)=>{
    ul += `<li>${el}</li>`
})
ul + `</ul>`

caixa.innerHTML=ul