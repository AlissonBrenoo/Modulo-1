const people = [
  { name: 'João', age: 25 },
  { name: 'Maria', age: 30 },
  { name: 'Pedro', age: 20 },
  { name: 'Ana', age: 35 },
];

const filterAge = people.filter((arrayPeoples) => arrayPeoples.age >= 30);

console.log(filterAge);