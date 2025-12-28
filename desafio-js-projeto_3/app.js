//questão 1
function calcularIMC(peso, altura){
    return peso/(altura**2);
}
let imc = calcularIMC(42.5, 1.6);
console.log(imc);

//questão 2
function calcularfatorial(num){
    if(num === 1 || num === 0){
        return 1;
    }
    let fatorial = 1;
    for (i=2; i<=num; i++){
        fatorial = fatorial*i; //fatorial*=i
    }
    return fatorial;
}
let fatorial = calcularfatorial(5);
console.log(fatorial);

//questão 3
function converteDolarEmReal(dolar){
    return dolar*4.8;
}
let real = converteDolarEmReal(5);
console.log(real);

//questão 4
function calcularAreaPerimetro(altura, largura){
    let area = altura*largura;
    let perimetro = 2*(altura + largura);
    console.log(`A área é ${area} m² e o perímetro é ${perimetro} m`);
}
calcularAreaPerimetro(12.8, 6.5);

//questão 5
function calcularAreaPerimetroCirculo(raio){
    let pi = 3.14;
    let area = pi*raio**2; //ou Math.PI * raio * raio;
    let perimetro = 2*raio*pi; // ou 2*raio* Math.PI;
    console.log(`A área e o perímetro da sala circular são, respectivamente, ${area.toFixed(2)} m² e ${perimetro.toFixed(2)} m.`);
}
calcularAreaPerimetroCirculo(5);

//questão 6
function tabuadaMultiplicação(num){
    for(let i=1; i<=10; i++){
        let resultado = num*i;
        console.log(`${num} X ${i} = ${resultado}`);
    }
}
tabuadaMultiplicação(6);