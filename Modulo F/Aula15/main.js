//  LIÇÃO (1)
// let n = [5, 8, 2, 9, 3]
// n.push(1)
// n.sort()
// console.log(n)
// console.log(`O vetor tem ${n.length} posições`)
// console.log(`O valor é ${n[0]}`)
// console.log(`O valor é ${n[1]}`)
// console.log(`O valor é ${n[2]}`)
// console.log(`O valor é ${n[3]}`)
// console.log(`O valor é ${n[4]}`)


//LIÇÃO 2 
// let valores = [8, 1, 7, 4, 2, 9]
// for(let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)    
// }

// for(let pos in valores) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)  
// }


// LIÇÃO 3
let valores = [8, 1, 7, 4, 2, 9]
valores.sort();
console.log(valores);

let pos = valores.indexOf(6)
console.log(pos);
if(pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}

