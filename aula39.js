const caixa=document.querySelector("#caixa1")
const cursos=[...document.querySelectorAll(".curso")]

console.log(cursos[0].children.length > 0 ? "Possui filhos" : "Não Possui filhos")