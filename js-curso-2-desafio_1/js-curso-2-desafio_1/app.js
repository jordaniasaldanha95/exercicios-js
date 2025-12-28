let tituloExercicio = document.querySelector('h1');
tituloExercicio.innerHTML = 'Hora do Desafio';
let nomeCidadeDigitado;
let n1;
let n2;
let soma; 
let condicao;

function botaoClicado(){

    console.log("O botão foi clicado");
}

function botaoPrompt(){

   nomeCidadeDigitado = prompt("Qual o nome da cidade do Brasil?");
   condicao = 1;
}

function botaoAlerta(){

   
    if(condicao == 1){
       alert(`Estive em ${nomeCidadeDigitado} e lembrei de você`);
    }
    else{
        alert(`O resultado da soma dos números inteiros é ${soma}`);
    }
}

function calculoSoma(){

    n1 = parseInt(prompt("Diga o primeiro número inteiro"));
    n2 = parseInt(prompt("Diga o segundo número inteiro"));
    soma = n1 + n2;
    condicao = 2;
}