describe('1 - Teste a função fecthProducts', () => {
    it ('Verifica se fetchProducts é uma função', () => {
      expect(typeof fetchProducts).toBe('function')
    });
    
    it ('Verifica se a função fetchProducts com o argumento "computador" foi chamada', async () => {
      await fetchProducts('computador');
      expect(fetch).toHaveBeenCalled();
    });
  
    it('Verifica se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint determinado;', async () => {
      await fetchProducts('computador')
      const endpoint = "https://api.mercadolibre.com/sites/MLB/search?q=computador"
      expect(fetch).toHaveBeenCalledWith(endpoint)
    })
  
    it('Verificase o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
      const func = await fetchProducts('computador')
      const result = computadorSearch
      expect(func).toEqual(result)
    })
  
    it('Verifica se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
      const func = await fetchProducts()
      expect(func).toEqual('You must provide an url');
    })
});

  describe('2 - Teste a função fecthItem', () => {
  
    it('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchItem).toBe('function');
    })
  
    it('Verifica se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled()
    })
  
    it('Verifica se a função fetch utiliza o endpoint', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527'
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith(endpoint)
    })
  
    it('Verifica se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    const func = await fetchItem('MLB1615760527')
    const result = item;
    expect(func).toEqual(result)
    })
  
    it('Verifica se a função fetchItem sem argumento, retorna um erro', async () => {
    const func = await fetchItem()
    expect(func).toEqual('You must provide an url')
    })  
});

  describe('4 - Teste a função saveCartItems', () => {
    it('Verifica se ao executar saveCartItems, o método localStorage.setItem é chamado', () => {
      const value = '<li class="cart__item">SKU: MLB1607748387 | NAME: Pc Computador Cpu Intel Core I5 + Ssd 240gb, 8gb Memória Ram | PRICE: $1573.79</li><li class="cart__item">SKU: MLB2048397577 | NAME: Pc Computador Cpu Intel Core I3 Ssd 240gb / 8gb Memória Ram | PRICE: $1221.06</li><li class="cart__item">SKU: MLB2048397577 | NAME: Pc Computador Cpu Intel Core I3 Ssd 240gb / 8gb Memória Ram | PRICE: $1221.06</li>'
      saveCartItems(value)
      expect(localStorage.setItem).toHaveBeenCalled()
    })
    
    it('Verifica se ao executar saveCartItems, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento', () => {
      const value = '<li class="cart__item">SKU: MLB1607748387 | NAME: Pc Computador Cpu Intel Core I5 + Ssd 240gb, 8gb Memória Ram | PRICE: $1573.79</li><li class="cart__item">SKU: MLB2048397577 | NAME: Pc Computador Cpu Intel Core I3 Ssd 240gb / 8gb Memória Ram | PRICE: $1221.06</li><li class="cart__item">SKU: MLB2048397577 | NAME: Pc Computador Cpu Intel Core I3 Ssd 240gb / 8gb Memória Ram | PRICE: $1221.06</li>'
      saveCartItems(value)
      expect(localStorage.setItem).toHaveBeenCalledWith('cartItems',value)
    })
});

  describe('4 - Teste a função getSavedCartItems', () => {
    it('Verifica se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
      getSavedCartItems()
      expect(localStorage.getItem).toHaveBeenCalled()
    })
  
    it('Verifica se o método localStorage.getItem é chamado com o "cartItems" como parâmetro', () => {
      getSavedCartItems()
      expect(localStorage.getItem).toHaveBeenCalledWith('cartItems')
    })
});  