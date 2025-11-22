const caixaCursos = document.getElementById("caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
const btnRemove = document.getElementById("remover");
const c1_2 = document.getElementById("caixa2");
const cursos = ["CSS", "HTML", "C++", "Python", "Ruby", "Lua", "Dart"];
const btnCursosSelecionado = document.getElementById("btnCursoSelecionado");
const btnAddAntes = document.getElementById("adicionarAntes");
const btnAddDepois = document.getElementById("adicionarDepois");
const nomeCurso = document.getElementById("nomeCurso");

let indice = 0;

const tirarSelecionado = () => {
  const cursosSelecionados = [...document.querySelectorAll(".curso")];
  cursosSelecionados.map((el) => {
    el.classList.remove("selecionado");
  });
};

const criarNovoCurso = (curso) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + indice);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = curso;
  novoElemento.addEventListener("click", (evt) => {
    tirarSelecionado();
    evt.target.classList.toggle("selecionado");
  });

  return novoElemento;
};
cursos.map((el, chave) => {
  const novoElemento = criarNovoCurso(el);
  caixaCursos.appendChild(novoElemento);
  indice++;
});

const cursoSelecionado = () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  return cursosSelecionados[0];
};

btnCursosSelecionado.addEventListener("click", (evt) => {
  try {
    alert(`Curso selecionado: ${cursoSelecionado().innerHTML}`);
  } catch (error) {
    alert("Escolha um curso");
  }
});
btnRemove.addEventListener("click", (evt) => {
    const cs = cursoSelecionado();
    if(cs != undefined){
    cs.remove();
  } else {
    alert("Escolha um curso");
  }
});

btnAddAntes.addEventListener("click", (evt) => {

  try {
    //adicionamos o curso antes dos outros curso funciona

    if (nomeCurso.value != "") {
      const novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado());
      
    } else {
      alert("Escreva um curso");
    }
  } catch (ex) {
    alert("Escolha um curso");
  }
});
btnAddDepois.addEventListener("click", (evt) => {

  try {
    //adicionamos o curso antes dos outros curso funciona

    if (nomeCurso.value != "") {
    
      const novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling);

    } else {
      alert("Escreva um curso");
    }
  } catch (ex) {
    alert("Escolha um curso");
  }
});
