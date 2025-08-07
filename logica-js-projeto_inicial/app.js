alert("Boas vindas ao nosso site!");

let nome = "Lua";

let idade = 25;

let numeroDeVendas = 50;

let saldoDisponivel = 1000;

let mensagemDeErro = "Erro preencha todos os campos"

alert (mensagemDeErro);

let nomeUsuario =  prompt ("Digite o seu nome"
);
let idadeUsuario =  prompt ("Digite sua idade");

if 
    (idadeUsuario >= 18) {
        alert("Pode tirar a habilitação!");
    }

console.log(saldoDisponivel);    

diaDaSemana = prompt ("Qual é o dia da semana?");

if (diaDaSemana == 'Sábado') {
    alert("Bom fim de semana");
} else if (diaDaSemana == 'Domingo') {
    alert("Bom fim de semana!");
}   else {
    alert("Boa semana!");
} 


let numero = prompt("Digite um número");

if (numero >= 0) {
    alert("Esse é um número positivo!");
} else {
    alert("Esse é um número negativo!");
}


let pontuacao = 108;

if (pontuacao >= 100) {
    console.log("Parabéns, você ganhou!");
} else {
    console.log("Tente novamente para ganhar!");
}

alert(`Seu saldo disponível é : ${saldoDisponivel}`);

let usuarioNome = prompt("Digite seu nome:");
alert(`Boas vindas ${usuarioNome}`);


    