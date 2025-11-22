const p_array = document.querySelector("#array");
const txtProcurar = document.querySelector("#txt_pesquisar");
const btnProcurar = document.querySelector("#btnProcurar");
const resultados = document.querySelector("#resultados");

// const elementos_array = [4, 5, 6, 7, 23, 756];
const elementos_array = ["Java", "Rust", "Python", "C", "C#", "C++"];
p_array.innerHTML = elementos_array;

btnProcurar.addEventListener("click", (evt) => {
  const ret = elementos_array.find((e, i) => {
    if (e.toUpperCase() == txtProcurar.value.toUpperCase()) {
      resultados.innerHTML = `Valor oesquisado: ${e} na posição ${i}`;
      return e;
    } else {
      console.log("problme");
    }
  });
  console.log(ret);
});
