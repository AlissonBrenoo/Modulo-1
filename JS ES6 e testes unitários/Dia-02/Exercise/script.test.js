const { removeItem, myFizzBuzz, encode, decode } = require('./script')

describe ('Testes exercicio 1', () => {

    test('Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1,2,4])
})

    test('Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].', () =>{
        expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    })

    test('Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.', () => {
        expect(removeItem([1, 2, 3, 4], 5)).toEqual([1,2,3,4])
    })
});

describe ('Testes exercicio 2', () => {

    test('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".', () => {
        expect(myFizzBuzz(15)).toBe("fizzbuzz")
    })
    
    test('Caso num seja um número divisível apenas por 3, a função retorna "fizz".', () => {
        expect(myFizzBuzz(9)).toBe("fizz")
    })

    test('Caso num seja um número divisível apenas por 5, a função retorna "buzz".', () => {
        expect(myFizzBuzz(10)).toBe("buzz")
    })

    test('Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num.', () => {
        expect(myFizzBuzz(7)).toBe(7)
    })

    test('Caso num não seja um número, a função retorna false.', () => {
        expect(myFizzBuzz('2')).toBeFalsy();
    })
});

describe ('Testes exercicio 2', () => {
    //ESSA LINHA É DIFERENTE DO GABARITO, QUESTIONAR
    test('Teste se encode e decode são funções.', () => {
        expect(typeof encode).toBe('function')
        expect(typeof decode).toBe('function')
    })
});