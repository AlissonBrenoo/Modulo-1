let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maiorNum = 0;
let numImpar = 0;
let minorValue = 0;
let array1To25 = []; 


for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
if (soma > 20) {
    console.log("O valor da média aritmética é maior que 20");
} else {
    console.log("O valor da média aritmética é menor ou igual a 20");
}
console.log('A média entre os números dos arrays é ' + soma / 10);



for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    if (numbers[index1] > maiorNum) {
        maiorNum = numbers[index1]
    }
}
console.log("O maior número é", maiorNum);


minorValue = maiorNum;
for (let index3 = 0; index3 < numbers.length; index3+=1) {
    if (numbers[index3] < minorValue) {
        minorValue = numbers[index3];
    }
}
console.log('O menor número é', minorValue);


for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index2] % 2 != 0) {
        numImpar += 1
    }
}

if (numImpar > 0) {
        console.log('Tem um total de', numImpar,'números impares');

    } else {
        console.log("Nenhum valor ímpar encontrado");
}


for (let index4 = 0; index4 < 25; index4+=1) {
    array1To25[index4] = index4 +1;
}
console.log("Array de 1 a 25 ", array1To25);

console.log("Divisão por 2 de todos os números do array acima");
for (let index5 = 0; index5 < array1To25.length; index5+=1) {
    console.log(array1To25[index5] / 2);
}