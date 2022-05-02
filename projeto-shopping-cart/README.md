Esse projeto simula um carrinho de compras por meio de uma requisição na API do mercado livre
o resultado pode ser verificado na URL http://127.0.0.1:5500/index.html.

Foram cumpridos os seguintes requisitos:
- Foi criado uma listagem de produtos por meio da API do Mercado Livre, implementada a função 'fetchProducts' e a URL do mercado livre deve buscar por Computadores.
- Na sequencia foi criada uma função que permite a adição dos produtos no carrinho de compras, sendo feita uma requisição que retorna os dados específicos do produto selecionado, sendo implementada a função 'fetchItem'. O produto deve ser adicionado ao carrinho apresentando as informações de id, título e preço.
- Devendo ser possível remover os ítens do carrinho de compra quando clicado.
- O carrinho de compras deve ficar salvo no LocalStorage, de modo que, ao recarregar a página o carrinho deve ser carregado, caso um ítem novo seja adicionado ou retirado do carrinho este também deve ser atualizado no LocalStorage.
- O valor total do carrinho deve ser calculado a cada adição ou retirada de produto.
Foi implementado o botão 'esvaziar carrinho' que limpa todos os elementos do carrinho, o valor total e as informações do LocalStorage.
- Foram desenvolvidos 4 conjuntos de testes Um para a função 'fetchProducts', outro para a função 'fetchItem', o terceiro conjunto de teste para a função 'saveCartItems' e o último para a função 'getSavedCartItems'.