const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btn=document.querySelector("#btn-copy")
const todosCursos=[...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso=evt.target
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click",()=>{
    const cursosselect=[...document.querySelectorAll(".selecionado")]
    const nocursosselect=[...document.querySelectorAll(".curso:not(.selecionado)")]
    cursosselect.map((el)=>{
        caixa2.appendChild(el)
    })
    nocursosselect.map((el)=>{
        caixa1.appendChild(el)
    })
})
