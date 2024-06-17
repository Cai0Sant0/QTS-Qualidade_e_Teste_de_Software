function verificarArray(array, valor) {
    return array.includes(valor);
}

let array = [2,4,5,6,8];

console.log("Teste 1:");
console.log(verificarArray(array,9));

console.log("Teste 2:");
console.log(verificarArray(array,2));
