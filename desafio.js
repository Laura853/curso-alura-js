console.log("Boas vindas!");

let meuNome = Laura;

console.log(`Bem vinda ${meuNome}`);

alert(`Olá ${meuNome}`);

let nome = prompt ("Digite o seu nome");

console.log(`Boas vindas ${nome}`);

let linguagem = prompt ("Qual linguagem de programação você mais gosta?");

console.log(linguagem);

let valor1 = 2;

let valor2 = 5;

let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

let valor3 = 2;

let valor4 = 5;

let resultado2 = valor3 - valor4;

console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado2}`);


let idade = prompt("Digite a sua idade");

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

let numero = prompt ("Digite um valor");

if (numero >= 0) {
    alert("Esse é um número positivo");
} else {
    alert("Esse é um número negativo");
}


let numeros = 1;

while (numeros < 11) {
    console.log(numeros++);
}

let nota = 10;

if (nota >= 7) {
    console.log("Você foi aprovado!");
} else {
    console.log("Você foi reprovado!");
}

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

let numeroAleatorio2 = (Math.random() * 10 + 1);
console.log(numeroAleatorio2);

let numeroAleatorio3 = (Math.random() * 1000 + 1);
console.log(numeroAleatorio3);
