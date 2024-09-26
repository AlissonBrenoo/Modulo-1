const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    const recebeItem = createItem('Teclado', 50, 250, 10)
    const posRecebe = { name: 'Teclado', unit: 50, price: 250, quantity: 10 }
expect(recebeItem).toEqual(posRecebe)
  });
  
  it('utiliza zero como quantidade padrão', () => {
expect(createItem('banana', 'kg', 1.99)).toHaveProperty('quantity', 0) 
  });

//TEST 3
  it('Lança um erro quando não recebe parâmetros', () => {
  expect(() => createItem()).toThrow()  
  });

//TEST 4
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(1.99, 'kg', 'banana', 20)).toThrow('O nome do item deve ser uma string')
  });
 
  //TEST 5
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('banana', 'kg', -1.99, 10)).toThrow('O preço do item deve ser maior que zero')
  });

  it('Lança um erro se o preço é zero',() => {
    expect(() => createItem('banana', 'kg', 0, 10)).toThrow('O preço do item deve ser maior que zero')
  });
});