const cx=document.querySelector("#caixa")

let mus = new Set(["musica1","musica2","musica3"])

mus.add("musica4")
mus.add("musica1")
mus.add("musica1")

console.log(mus);

mus.forEach((elemento)=>{
   cx.innerHTML += `${elemento} <br/>`
})

