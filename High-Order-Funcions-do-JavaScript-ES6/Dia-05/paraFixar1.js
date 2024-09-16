const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

const primeNumbers1 = [17, 23, 37]
const [indexZero, indexONe, indexTwo] = primeNumbers1


sum(indexZero, indexTwo);

// --------------------------------------------------------------------------------
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
const itens = ['gato', 'água', 'arroz']
const [animalCat, drink, food] = itens;
console.log(food, animalCat, drink,);

//--------------------------------------------------------------------------------

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima
const [impar1, impar2, impar3, par1, par2, par3, par4] = numerosPares
const numbersPar = [par1, par2, par3, par4]
console.log(numbersPar);

