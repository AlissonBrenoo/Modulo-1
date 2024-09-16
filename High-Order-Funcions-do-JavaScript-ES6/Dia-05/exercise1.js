const myList = [5, 2, 3];
// escreva swap abaixo
// const [number1, number2, number3] = myList
// console.log(number3, number2, number1);
const swap = ([a, b, c]) => ([c, b, a])
console.log(swap(myList));