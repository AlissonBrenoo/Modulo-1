// Exercise 1
const temperaturesCelsius = [23, 10, 32, 21, 47];

const temperaturesFahrenheit = temperaturesCelsius.map((temperatura) => fahrenheit = (temperatura * 9/5) + 32)

console.log(temperaturesFahrenheit);

// Exercise 2

const numbers = [4, 9, -1, 16, -5, 25];

const square = numbers.map((number) => atuallynumber = Math.sqrt(number))

console.log(square);

// Exercise 3

const data = {
    books: [
      {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
          name: 'George R. R. Martin',
          birthYear: 1948,
        },
        releaseYear: 1991,
      },
      {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
          name: 'J. R. R. Tolkien',
          birthYear: 1892,
        },
        releaseYear: 1954,
      },
      {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
          name: 'Isaac Asimov',
          birthYear: 1920,
        },
        releaseYear: 1951,
      },
      {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
          name: 'Frank Herbert',
          birthYear: 1920,
        },
        releaseYear: 1965,
      },
      {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
          name: 'Stephen King',
          birthYear: 1947,
        },
        releaseYear: 1986,
      },
    ],
};
const books = data.books
const formatedBookNames = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)

console.log(formatedBookNames);

// Exercise 4

const nameAndAge = books.map((book) => { 
   let array = { author: book.name,
    age: book.releaseYear - book.author.birthYear}
    return array;
})
console.log(nameAndAge);