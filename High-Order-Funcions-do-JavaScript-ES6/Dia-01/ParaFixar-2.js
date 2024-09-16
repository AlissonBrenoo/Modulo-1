// FIXAR 1
const numbers = [19, 21, 30, 3, 45, 22, 15];

const numeros = numbers.find((numbers) => numbers % 3 === 0 && numbers % 5 === 0);

console.log(numeros);

// FIXAR 2

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const verifanomes = names.find((names) => names.length === 5)
console.log(verifanomes);

//FIXAR 3

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  const findId = musicas.find((musicas) => musicas.id === '31031685'
  ).title
  console.log(findId);