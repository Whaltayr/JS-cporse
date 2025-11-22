const p_array = document.getElementById("array");
const btnReduzir = document.getElementById("btnReduzir");
const resultados = document.getElementById("resultados");

const elementos_array = [1, 2, 3, 4, 5];
let ant = [];
let atu = [];

p_array.innerHTML = elementos_array;

btnReduzir.addEventListener("click", (evt) => {
    //o metodo reduce praticamente reduz todos os numeros para apenas um como na matematica

  resultados.innerHTML = elementos_array.reduce((anterior, atual, pos) => {
    //o push faz append do novo valor ou elemento no array e retorna aposição
    ant.push(anterior)
    atu.push(atual)

    return anterior + atual;
  });
  resultados.innerHTML+= `<br/> V.anterior ${ant} <br/> V.Atual ${atu}`
});
