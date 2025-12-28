//questão 1: Criar uma função que exibe "Olá, mundo!" no console.
function exibirNoCosole(){
    console.log ('olá mundo');
}
exibirNoCosole();

//questão 2: Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function digitarNome(nome){
    console.log (`Olá ${nome}`);
}
digitarNome('jordânia');

//questão 3: Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function retorno (numero){
    return 2 * numero;
}
let variavelDobro = retorno(10);
console.log(variavelDobro);

//questão 4: Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(num1, num2, num3){
    return (num1 + num2 + num3)/3;
}
let variavelMedia = media(2, 4, 6);
console.log(variavelMedia);

//questão 5: Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function calcularMaiorNumero(a, b){
    return a > b? a : b;
}
let maiornumero = calcularMaiorNumero(8,16);
console.log(maiornumero);

//questão 6: Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function calcularOQuadrado(num){
    return  num ** 2;
}
let resultado = calcularOQuadrado(8);
console.log(resultado);
//questão 7: Qual a lógica para uma função que recebe um preço e um percentual de desconto, e retorna apenas o valor do desconto em reais?
function descontoEmReais(preco, porcentagem){
    return (preco*porcentagem/100);
}
let desconto = descontoEmReais(100, 20);
console.log(desconto);