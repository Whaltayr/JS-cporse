const   soma=(v1,v2,v3)=>{
    return v1+v2+v3
}
/*
!operador spread espalaha os valores de uma array,
?no conslole log espalhamos o svalores da array valores para serem somados pela função soma
*/ 
let valores = [1,5,4]
console.log(soma(...valores))