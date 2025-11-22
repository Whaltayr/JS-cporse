const val_def=0

function some(...valores) {
     
     let res = 0
     for (let i = 0; i < valores.length; i++) {
          res += valores[i]
          
     }
     return res

}

console.log(some(2,8,4))
