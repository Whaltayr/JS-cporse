const caixa = document.querySelector("#caixa1")
const cursos = [...document.querySelectorAll(".curso")]
const todoscursos = ["CSS", "HTML", "C++", "Python", "Ruby", "Lua", "Dart"]

todoscursos.map((el, chave)=>{
    const novoelemento = document.createElement("div");
     novoelemento.setAttribute("class", "curso");
     novoelemento.setAttribute("id", chave);
     novoelemento.innerHTML = el;
     caixa.append(novoelemento);

})

//console.log(cursos[0].children.length > 0 ? "Possui filhos" : "Não Possui filhos")
