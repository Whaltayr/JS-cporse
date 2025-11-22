const caixa = document.querySelector("#caixa1");
const curso = document.querySelector(".curso");
const tdcursos = ["CSS", "HTML", "Python", "Ruby", "Lua", "Dart"];

tdcursos.map((el, chave) => {
  const novoelemento = document.createElement("div");
  novoelemento.setAttribute("class", "curso");
  novoelemento.setAttribute("id", chave);
  novoelemento.innerHTML = el;

  const btn_lixeira = document.createElement("img");
  btn_lixeira.setAttribute("class", "btn_li");
  btn_lixeira.setAttribute("src", "./img/trash.png");
  btn_lixeira.addEventListener("click", (evt) => {
    caixa.removeChild(evt.target.parentNode);
  });

  novoelemento.appendChild(btn_lixeira);
  caixa.appendChild(novoelemento);
});

//console.log(cursos[0].children.length > 0 ? "Possui filhos" : "Não Possui filhos")
