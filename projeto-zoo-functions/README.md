Neste projeto foram realizadas diversas funções cumprindo os seguintes requisitos:
Para acessar esse projeto basta fazer um git clone do repositório.
1 - Foi implementda a função 'getSpiciesById' que busca a espécie pelo id dela, a função pode receber um id ou mais, retornando a espécie de todos os ids passados, caso não receba parâmetros a função retorna um array vazio, caso receba vários ids a função retorna um array com o nome das espécies.

2 - Foi implementada uma função que recebe o nome da espécie e uma idade mínima, e testa se todos os animais da espécie possuem a idade mínima passada.

3 - Foi implementada uma função que busca o funcionário por meio do primeiro ou do último nome dela, caso não receba parâmetros retorna um objeto vazio.

4 - Foram implementadas duas funções, a função 'isManager' que verifica se o funcionário é gerente ou não, com base no id recebido, devendo retornar um booleano. A função 'getRelatedEmployees' que com base na primeira função retorna: Caso o id seja de um gerente, retorna um array com o nome das pessoas que o gerente é responsável. Caso  o id seja de um funcionário que não é gerente deverá ser lançado um erro informando que o ID não é de um gerente.

5 - Foi implementada uma função que  conta a quantidade de animais de cada espécie. Se não receber parâmetros a função retorna um objeto com o nome de cada espécie como chave e o total de animais de cada espécie como valor. Recebendo como parâmetro o nome de uma espécie retorna o número da quantidade de animais daquela espécie e se receber a espécie e o genero retorna a quantidade de animais daquele genero.

6 - Foi implementada uma função que recebe um array de visitantes, com o nome e a idade de cada pessoa, que retorna um objeto com a contagem de crianças, adultos e seniors que são visitantes.

Na sequencia com base no objeto recebido na função anterior calcula o valor total a ser cobrando de entrada dos visitates. A segunda função deve retornar zero caso receba um objeto vazio ou nenhum parâmetro como argumento.

7 - Foi implementada uma função que disponibiliza as informações de horários dos animais, retornando o cronograma da semana, do dia ou de um animal específico. Sem parâmetros ou caso receba parâmetros que não sejam nem um animal e nem um dia retorna os horários de cada dia da semana e quais animais estarão disponível. Se receber um dia como parâmetro retorna os horários e os animais disponíveis para aquele dia. Se receber o nome de um animal retorna um array com os dias em que este estará em exibição.

8 - Foi implementada uma função recebe o ID de um funcionário como parâmetro e retorna as informações do animal mais velho da primeira espécie gerenciada por este funcionário.

9 - Foi implementada uma função que recebe o nome, sobrenome ou o ID do funcionário a ser buscado retornando um objeto contendo o ID e o nome completo do funcionário, as espécies as quais a pessoa é responsável e a localização dessas espécies. Se for chamada sem parâmetros retorna um array com a cobertura de todas as pessoas funcionárias. Se não for encontrada uma pessoa com o nome, sobrenome ou ID passado deve lançar um erro. 
