//herança tudo emplementado no pai vale para o filho

class Carro {
  constructor(nome, portas) {
    this.nome = nome;
    this.portas = portas;
    this.ligado = false;
    this.vel = 0;
    this.cor = undefined;
  }

  ligar = function () {
    this.ligado = true;
  };
  desligar = function () {
    this.ligado = false;
  };
  setCor = function (cor) {
    this.cor = cor;
  };
}

class Militar extends Carro {
  constructor(nome, portas, blindagem, municao) {
    super(nome, portas);
    this.blindagem = blindagem;
    this.municao = municao;
    this.setCor("verde");
  }
  atirar = function () {
    if (municao > 0) {
      this.municao--;
    }
  };
}

class Corrida extends Carro {
  constructor(nome, portas, motor) {
    super(nome, portas);
    this.motor = motor;
    this.nitro = false;
    this.setCor("BLue");
  }
  ligarNitro = function () {
    this.nitro = true;
  };

}

const c1 = new Carro("fusca", 4);
c1.ligar();
c1.setCor("preto");

const c2 = new Militar("Tropa de Elite", 6, 100, 600);

const c3 = new Corrida("Faisca", 2, "V12");
c3.ligarNitro()
c3.ligar()


console.log(
  `Nome: ${c1.nome}\nPortas: ${c1.portas}\nLigado: ${
    c1.ligado ? "Ligado" : "Desligado"
  }\nVelocidade: ${c1.vel}\nCor: ${c1.cor}\n --------------------------`
);
console.log(
  `Nome......: ${c2.nome}\nPortas....: ${c2.portas}\nLigado....: ${
    c2.ligado ? "Ligado" : "Desligado"
  }\nVelocidade: ${c2.vel}\nCor.......: ${c2.cor}\nBlindagem.: ${
    c2.blindagem
  }\nMunição...:${c2.municao}\n 
--------------------------`
);
console.log(
  `Nome......: ${c3.nome}\nPortas....: ${c3.portas}\nLigado....: ${
    c3.ligado ? "Ligado" : "Desligado"
  }\nVelocidade: ${c3.vel}\nCor.......: ${c3.cor}\nMotor.: ${
    c3.motor
  }\nNitro...:${c3.nitro?'acelera':'nas calmas'}\n 
--------------------------`
);
