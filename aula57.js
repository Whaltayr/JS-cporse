class pessoa {
    //nao precisa de this, esta fora do construtor
  canal = "CFB Cursosx";
  constructor(pnome, ptipo) {
    this.nome = pnome;
    if (ptipo == 1) {
      this.tipo = "Esportivo";
      this.velmax = "300";
    } else if (ptipo == 2) {
      this.tipo = "Utilitario";
      this.velmax = "100";
    } else if (ptipo == 3) {
      this.tipo = "Utilitario";
      this.velmax = "160";
    } else {
      this.tipo = "Militar";
      this.velmax = "180";
    }
  }
  //se o construtor não receber parametro , o metodo tambem não recebe

  //a função dentro da class
  info() {
    console.log(`Nome: ${this.nome} \nTipo: ${this.tipo} \nV.Max: ${this.velmax}\nV.Max: ${this.canal} \n------------------------------`);
  }
  getName() {
    return this.nome;
  }
  getTipo() {
    return this.tipo;
  }
  getInfo() {
    return [this.nome, this.tipo, this.velmax];
  }
}

let p1 = new pessoa("lui", 1);
let p2 = new pessoa("clui", 2);
let p3 = new pessoa("blui", 6);

console.log(p1.getInfo());

p1.info()
// p2.info()
// p3.info()
