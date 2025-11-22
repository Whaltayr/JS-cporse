let n = 1
let max = 1000
let pares = 0

for (n = 0; n < max; n++) {
    if (n % 2 != 0) {
        continue
    }
    pares++
}

console.log("Quantidade de pares: " + pares)

/*
while (n < 1000) {
    console.log(n)
    n++    
    if (n > 20) {
        break
    }
}
*/