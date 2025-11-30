//qunado a gente usa new, ele cria uma nova instacia na memoria.cria um objecto daquela classe, todos objectos são independentes

//objectos literais, já não são independentes, se criar varias classes do objecto todos apontam para um mesmo lugar na memoria

const pessoa = {
  //criamos a propriedade nome com o valor Bruno
  nome: "Bruno",
  getNome:function(){
    return this.nome
  }
};
const p2 = pessoa;
const p3 = pessoa;
//o nome foi alterado para uma pessoa, mas afetou todos os outros
p3.nome = "clau";
p2["nome"] = "purpura";

console.log(p2.nome);
console.log(p3.nome);
console.log(p3.getNome());
