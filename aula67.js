const morno = function(energia){
    this.energia=energia
    this.disparos=300
}
//toda qu efor necessario adicionar proprieedade o sfunçoes a um ojeto, podemos usar o prototype
const m1= new morno(100)

morno.prototype.escudos=200
morno.prototype.disparar=function(){
    if (this.disparos>0) {
        this.disparos--
    }
}

m1.disparar()
m1.disparar()
m1.disparar()
m1.disparar()


console.log(m1);
console.log(morno);
