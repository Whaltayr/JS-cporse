const f_tipoNormal = document.getElementById("f_tipoNormal");
const f_tipoMilitar = document.getElementById("f_tipoMilitar");
const f_nome = document.getElementById("f_nome");
const f_portas = document.getElementById("f_portas");
const f_blindagem = document.getElementById("f_blindagem");
const f_municao = document.getElementById("f_municao");
const btnAdd = document.getElementById("btn_add");
const carros = document.getElementById("carros");

let a_carros = [];
//consdições top
f_tipoMilitar.addEventListener("click", (evt) => {
  f_blindagem.removeAttribute("disabled");
  f_municao.removeAttribute("disabled");
});
f_tipoNormal.addEventListener("click", (evt) => {
  f_blindagem.value = 0;
  f_municao.value = 0;
  f_blindagem.setAttribute("disabled", "disabled");
  f_municao.setAttribute("disabled", "disabled");
});

const gerirCarros = () => {
  carros.innerHTML = "";
  a_carros.forEach((c) => {
    const div = document.createElement("div");
    div.setAttribute("class", "carro");
    div.innerHTML =`Nome:${c.nome}\n Portasj ` ;
    carros.appendChild(div);
  });
};

btnAdd.addEventListener("click", () => {
  if (f_tipoNormal.checked) {
    const c = new Carro(f_nome.value, f_portas.value);
    a_carros.push(c);
  } else {
    const c = new Militar(
      f_nome.value,
      f_portas.value,
      f_blindagem.value,
      f_municao.value
    );
    a_carros.push(c);
  }
  gerirCarros();
  f_nome.value = "";
  f_portas.value = 0;
  f_blindagem.value=0
  f_municao.value=0
});

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
c3.ligarNitro();
c3.ligar();

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
  }\nNitro...:${c3.nitro ? "acelera" : "nas calmas"}\n 
--------------------------`
);
