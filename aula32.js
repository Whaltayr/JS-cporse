//const c1=document.querySelector(".c1")
const cursos=[...document.querySelectorAll(".class")]

cursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const el=evt.target
        el.classList.add("destaque")
        console.log(el.innerHTML + " foi clicado")

        if (el.innerHTML == "C++") {
            el.classList.add("st")
            el.classList.add("st:hover")
            el.classList.add("destaque2")
        }
    })
})


/*
const msg=()=>{
    alert("oi mano")
}*/

/*
c1.addEventListener("click",(evt)=>{
    const el=evt.target
    el.classList.add("destaque")
    
})*/