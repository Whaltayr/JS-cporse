/*const f = function(v1,v2){
    return v1+v2
}
console.log(f(4,3))

const f = function(...valores){
   let res = 0
   for(v of valores){
    res+=v
   }
    return res

}*/
const f = new Function("v1","v2","v3", "return v1+v2+v3")/* função construtor anonimo*/

console.log(f(9,3,5))