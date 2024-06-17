function verificarSubstring(string, substring) {
    return string.includes(substring);
}


console.log("Teste 1:");
let string1 = "Hello, world!";
let substring1 = "world";
console.log(verificarSubstring(string1, substring1)); 

console.log("Teste 2:");
let string2 = "Olá mundo!";
let substring2 = "Mundo"; 
console.log(verificarSubstring(string2, substring2)); 
