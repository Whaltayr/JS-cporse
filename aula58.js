class pessoa {
  //nao precisa de this, esta fora do construtor
  //   canal = "CFB Cursosx";
  constructor(pnome, pidade) {
    this.nome = pnome;
    this.idade = pidade;
  }

  getName() {
    return this.nome;
  }
  getIdade() {
    return this.idade;
  }
  setName(nome) {
    this.nome = this.nome;
  }
  setName(idade) {
    this.idade = this.idade;
  }

  //   info() {
  //     console.log(
  //       `Nome.: ${this.nome} \nIdade:${this.idade}\n_____________________`
  //     );
  //   }
}
const btnAdd = document.getElementById("btn_add");
const res = document.getElementById("red");

const addPessoa = () => {
  res.innerHTML = "";
  pessoas.map((p) => {
    const divv = document.createElement("div");
    divv.setAttribute("class", "pessoa");
    divv.innerHTML = `Nome: ${p.getName()}, Idade: ${p.getIdade()}`;
    res.appendChild(divv);
  });
};
let pessoas = [];
btnAdd.addEventListener("click", (evt) => {
  const nome = document.getElementById("f_name");
  const idade = document.getElementById("f_idade");
  const p = new pessoa(nome.value, idade.value);
  pessoas.push(p);
  nome.value = "";
  idade.value = "";
  addPessoa();
});
