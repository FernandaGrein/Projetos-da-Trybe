// ex. 2
describe('2 - Implemente os casos de teste para a função `numbers`', () => {
    it('Verifica se a função `numbers`retorna `true` quando o array contém apenas numeros e falso caso contrário', () => {

        // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
        expect(numbers([1, 2, 3, 4, ])).toBeTruthy();
        // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
        expect(numbers([1, 2, '3', 4, 5])).toBeFalsy();
        // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
        expect(numbers([1, 'a', 3])).toBeFalsy();
        // Escreva um teste em que a função recebe [' '] e retorna false
        expect(numbers([' '])).toBeFalsy();
    });
});

// ex. 4
describe('4 - Implemente os casos de teste para a função `circle`', () => {
    it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {


        // object.keys - retorna um array das propriedades do objeto, sendo possível checar o tamanho do array
        // usar as propriedades do array

        // ESCREVA SEUS TESTES ABAIXO:
        // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
        expect(circle('string')).toBeUndefined();
        // Teste se circle retorna um objeto. - adiciona uma função
        expect(typeof circle(1)).toBe('object');
        expect(circle(1)).toEqual({
            radius: 1,
            area: 3.14,
            circumference: 6.28
        });
        expect(circle(7)).toEqual({
            radius: 7,
            area: 153.86,
            circumference: 43.96
        });
        // Teste se o objeto retornado tem 3 propriedades.
        expect(() => {
            Object.keys(circle).length > 3
        }).toBeTruthy();
        // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
        expect(circle()).toBeUndefined();
        // Teste se dentro do objeto retornado, a função retorna uma key com value igual a circunferência correta para um círculo de raio 2.
        expect(Object.values(circle(2))[2]).toBeCloseTo(12.56);
        // Teste se dentro do objeto retornado, a função retorna uma key com value igual a área correta para um círculo de raio 3.
        expect(Object.values(circle(3))[1]).toBeCloseTo(28.26)
        // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
        expect(circle(3)).toEqual({
            radius: 3,
            area: 28.25,
            circumference: 18.84
        });
    });
});

// ex. 6
//https://jestjs.io/pt-BR/docs/expect#tocontainitem
// https://www.w3schools.com/jsref/jsref_isarray.asp
describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
    it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
      // ESCREVA SEUS TESTES ABAIXO:
      // Teste se productDetails é uma função.
      expect(typeof productDetails).toEqual('function')
      // Teste se o retorno da função é um array.
      expect(typeof productDetails()).toEqual('object')
      expect(Array.isArray(productDetails())).toBeTruthy(); 
      // Teste se o array retornado pela função contém dois itens dentro.
      expect(() => {productDetails().length === 2}).toBeTruthy();
      // Teste se os dois itens dentro do array retornado pela função são objetos.
      expect(() => {typeof productDetails()[0] === 'object'}).toBeTruthy();
      expect(() => {typeof productDetails()[1] === 'object'}).toBeTruthy();
      // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
     expect(productDetails('Alcool gel', 'Máscara')).toEqual([
      { name: 'Alcool gel', details: { productId: 'Alcool gel123' } },
      { name: 'Máscara', details: { productId: 'Máscara123' } }]);
     expect(productDetails()[0]).not.toBe(productDetails()[1]);
      // Teste se os dois productIds terminam com 123.
     expect(Object.values(productDetails('pao', 'suco')[1])[1].productId).toContain('123') 
    });
});

// ex. 9 
// https://jestjs.io/pt-BR/docs/expect#tostrictequalvalue
describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
    it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
      // ESCREVA SEUS TESTES ABAIXO:
      // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
      expect(getCharacter()).toBeUndefined();
      // Teste se a função retorna o objeto correto para o parâmetro 'Arya',
      expect(getCharacter('Arya')).toStrictEqual({
        name: 'Arya Stark',
        class: 'Rogue',
        phrases: ['Not today', 'A girl has no name.']
      })
      // Teste se a função retorna o objeto correto para o parâmetro 'Brienne',
      expect(getCharacter('Brienne')).toStrictEqual({
        name: 'Brienne Tarth',
        class: 'Knight',
        phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.']
      })
      // Teste se a função retorna o objeto correto para o parâmetro 'Melissandre',
      expect(getCharacter('Melissandre')).toStrictEqual({
        name: 'Melissandre',
        class: 'Necromancer',
        phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.']
      })
      // Teste se os parâmetros não são Case Sensitive.
      expect(getCharacter('Arya')).toBe(getCharacter('ArYA'))
      expect(getCharacter('ARYA')).toBe(getCharacter('arYA'))
      // Teste se ao passar um nome que não está na tabela, a função retorna undefined.
      expect(getCharacter('Ana')).toBeUndefined()
      expect(getCharacter('undefined')).toBeUndefined()
    });
  });