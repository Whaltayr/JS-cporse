const verificarBtn = document.getElementById("btnVerificar");
const array = document.getElementById("array");
const resultados = document.getElementById("resultados");

const elementos_array = [24, 4, 36, 47, 23, 56];
array.innerHTML = elementos_array;

verificarBtn.addEventListener("click", (evt) => {
    const ret = elementos_array.every((e, i) => {
        if (e < 18) {
            resultados.innerHTML = `Array não conforme na posição: ${i}`;
        }
        
        return e >= 18;
    });
    if(ret){
        resultados.innerHTML = "fofo";

    }
});
