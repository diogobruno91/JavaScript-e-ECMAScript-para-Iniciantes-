
//LIÇÃO 1.
function parOuImpar(n) {
    if(n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

//console.log(parOuImpar(223));

//Lição 2.
function soma(n1=0, n2=0) {
    return n1 + n2;
}

// console.log(soma(7,3));

let v = function(x) {
    return x*2;
}

// console.log(v(5));

//Lição 3. 
function fatorial(n) {
    let fat = 1;
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

// console.log(fatorial(5))

//Lição 4.
//RECURSIVIDADE
function fatorial(n) {
    if(n == 1) {
        return 1 
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))