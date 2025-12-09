//membros Static, quando vc cria e altera o menbros static, a alteração é feita para todos os elemento s com essa clasee

//a funçao alertar não é da instanciao alerta ja não pertence ao metodo, mas sim a classe npc.
class Npc {
  static alerta = false;
  constructor(energia) {
    this.energia = energia;
  }
  info = function () {
    console.log(
      `Energia: ${this.energia}\nAlerta:${
        Npc.alerta ? "Sim" : "Não"
      }\n----------------------------`
    );
  };
  static alertar = function () {
    Npc.alerta=true
  };
}
//mudamos o stacic menber para true e todos os elementos agora respondem com sim

const npc1 = new Npc(10);
const npc2 = new Npc(40);
const npc3 = new Npc(100);
Npc.alertar()

npc1.info();
npc2.info();
npc3.info();
