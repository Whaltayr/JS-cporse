const caixa = document.getElementById("caixa");

let mapa = new Map();

mapa.set("nome1", "josy");
mapa.set("nome2", "vissuma");
mapa.set("nome3", "ferreira");
mapa.set("nome4", "eduardo");
//map funciona con key and value, não use o mesmo nome para a key, se não o valor sera overwrited
console.log(mapa);

if (mapa.has("nome4")) {
caixa.innerHTML="Valor encontrado"    
}
else{
    caixa.innerHTML="Valor não encontrado"    
}

//caixa.innerHTML = mapa.get("nome1");
