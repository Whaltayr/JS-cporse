/* const soma=(...valores)=>{

    const somar = val =>{
        let res = 0
        for(v of val)
            res+=v
        return res
    }
    return somar(valores)

 }
valor = [5,6,7,8]
 console.log(soma(...valor))*/

 const soma = (...valores)=>{
    const somar = val =>{
        let res = 0
        for(v of val)
            res += v
        return res
    }
    return somar(valores)
 }
 valor = [5,6,7,8]
 console.log(soma(...valor))
