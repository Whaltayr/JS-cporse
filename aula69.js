//polimorfismo, a capacidae de um mesmo metod ter ações diferentes.

class CarroPadrao{
    constructor(){

        if (this.constructor===CarroPadrao) {
            throw new TypeError("Classe CarroPadrao Não pode ser instanceada")
        }
        if (this.ligar===undefined) {
            throw new TypeError("Não foi criada a função ligar")
        }

        this.rodas=4
        this.portas=4
        this.ligado=false
    }
    ligar(){
        
    }
}

class Carro {
  constructor(tipo, estagioTurbo) {
    this.turbo = new Turbo(estagioTurbo);
    if (tipo == 1) {
      this.velMax = 120;
      this.nome = "Normal";
    } else if (tipo == 2) {
      this.velMax = 160;
      this.nome = "Esportivo";
    } else if (tipo == 3) {
      this.velMax = 200;
      this.nome = "Faisca";
    }

    this.velMax += this.turbo.pot;
  }
  info() {
    console.log(`Nome: ${this.nome}\nVelMax: ${this.velMax}\nTurbo: ${this.turbo.pot}\n-----------------`);
  }
}

class Turbo {
  constructor(e) {
    if (e == 0) {
      this.pot = 0;
    } else if (e == 1) {
      this.pot = 50;
    } else if (e == 2) {
      this.pot = 75;
    } else if (e == 3) {
      this.pot = 100;
    }
  }
}

class CarroEspecial extends Carro {
  constructor(estagioTurbo) {
    super(4, estagioTurbo);
    this.velMax = 400 + this.turbo.pot;
    this.nome = "Super Xandão";
  }
  info(){
     console.log(`|:|:|:|:|:|:|:|:|:|:|:|:|\nNome...: ${this.nome}\nVelMax.: ${this.velMax}\nTurbo..: ${this.turbo.pot}\n-----------------`);
  }
}

const c1 = new Carro(1, 0);
const c2 = new Carro(1, 2);
const c3 = new CarroEspecial(3)

c1.info();
c2.info();
c3.info()
