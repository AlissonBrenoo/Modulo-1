// Faça uma lista com as suas frutas favoritas
const specialFruit = ['uva', 'manga', 'maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['pera', 'amendoim', 'banana'];

const fruitSalad = (fruit, additional) => {
 const newItens = [...fruit, ...additional]
 return newItens;
};

console.log(fruitSalad(specialFruit, additionalItens));