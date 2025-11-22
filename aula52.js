//arrays
/* 
Array é uma coleção de dados ou variaveis
*/
const caixa = document.querySelector(".caixa");

let cores=["red "," blue "," green",["claro","escuro","medio"]]
let array = ["HTML", "CSS", "Javascript",cores];

console.log(array[3][3][2]);

//push adiciona elementos no array
//array.shift("Python")
//array.push("C++")
//pop retira
//array.pop()
//unshift mana o elemento para o inicio do array
//shift tira do inicio e tira o primeiro elemento
//Matriz: array dentro de outro array


array.map((el) => {
  let p = document.createElement("p");
  p.setAttribute("class","txt")
  p.innerHTML = el;
  caixa.appendChild(p);
});
