// Desafio 1
function compareTrue(value1, value2) {
    if (value1 === true && value2 === true) {
      return true
    } else {
      return false
    }
  } compareTrue(true, true);
  
  // Desafio 2
  function calcArea(base, height) {
    let area = 0
    area = (base * height) / 2
    return area
  } calcArea(10, 50)
  calcArea(5, 2)
  calcArea(51, 1)
  
  // Desafio 3
  // https://blog.betrybe.com/javascript/javascript-split/
  function splitSentence(word) {
    let letter = word.split(" ");
    return letter;
  
  } splitSentence('go Trybe');
  splitSentence('vamo que vamo');
  splitSentence('foguete');
  
  // Desafio 4
  function concatName(phrases) {
    return phrases[phrases.length - 1] + ', ' + phrases[0];
  
  } concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])
  concatName(['foguete', 'não', 'tem', 'ré'])
  concatName(['captain', 'my', 'captain'])
  
  // Desafio 5
  function footballPoints(wins, ties) {
    let points = 0
    points = (wins * 3) + (ties * 1);
    return points;
  
  } footballPoints(14, 8);
  footballPoints(1, 2);
  footballPoints(0, 0);
  
  // Desafio 6
  // for para encontrar o maior número do array
  // outro for para contar quantas vezes esse número aparece
  function highestCount(numbers) {
    let compare = numbers[0];
    let manyTimes = 0;
  
    for (index = 1; index < numbers.length; index += 1) {
      if (compare < numbers[index]) {
        compare = numbers[index]
      }
    }
  
    for (index2 = 0; index2 < numbers.length; index2 += 1) {
      if (compare === numbers[index2]) {
        manyTimes += 1
      }
    } return manyTimes
  
  
  } highestCount([9, 1, 2, 3, 9, 5, 7])
  highestCount([0, 4, 4, 4, 9, 2, 1])
  highestCount([0, 0, 0])
  
  // Desafio 7
  // calcula a distância de cada gato em relação ao rato 
  // if para retornar o gato mais próximo
  // https://www.w3schools.com/jsref/jsref_abs.asp
  function catAndMouse(mouse, cat1, cat2) {
    let distanceCat1 = Math.abs(mouse - cat1)
    let distanceCat2 = Math.abs(mouse - cat2)
  
    if (distanceCat1 > distanceCat2) {
      return 'cat2'
    } else if (distanceCat1 < distanceCat2) {
      return 'cat1'
    } else {
      return 'os gatos trombam e o rato foge'
    }
  } catAndMouse(3, 2)
  catAndMouse(6, 12)
  
  // Desafio 8
  // percorrer todos os valores do array 
  // verificar se cada valor é divisível apenas por 3 ou apenas por 5
  // verificar cada valor se é divisível por 3 e 5
  // adicionar a mensagem de bug para as demais situações
  // adicionar todas as respostas em um mesmo array
  // https://www.w3schools.com/jsref/jsref_push.asp
  function fizzBuzz(arrayNumbers) {
    let answersTogether = []
    for (counter = 0; counter < arrayNumbers.length; counter += 1) {
      if (arrayNumbers[counter] % 3 === 0 && arrayNumbers[counter] % 5 !== 0) {
        answersTogether.push('fizz');
      } else if (arrayNumbers[counter] % 5 === 0 && arrayNumbers[counter] % 3 !== 0) {
        answersTogether.push('buzz');
      } else if (arrayNumbers[counter] % 5 === 0 && arrayNumbers[counter] % 3 === 0) {
        answersTogether.push('fizzBuzz');
      } else {
        answersTogether.push('bug!');
      }
    } return answersTogether;
  
  } fizzBuzz([2, 15, 7, 9, 45])
  fizzBuzz([7, 9])
  fizzBuzz([9, 25])
  
  // Desafio 9
  //https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
  //https://www.w3schools.com/jsref/jsref_replace.asp
  function encode(newPhrase) {
    let encodePhrase = ' '
    for (let letters = 0; letters < newPhrase.length; letters += 1) {
      encodePhrase = newPhrase.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5');
    } return encodePhrase;
  
  } encode("hi there!");
  
  
  function decode(originalPhrase) {
    let decodePhrase = ' '
    for (let iletter = 0; iletter < originalPhrase.length; iletter += 1) {
      decodePhrase = originalPhrase.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
    } return decodePhrase;
  } decode("h3 th2r2!")
  
  // Desafio 10
  
  function techList(tecnologies, name) {
    tecnologies =tecnologies.sort()
    let newList = [];
   
    if (tecnologies.length === 0) {
      newList = 'Vazio!';
    }
   
    for (let techs = 0; techs < tecnologies.length; techs += 1) {
      let object = {
        tech: ' ',
        name: ' '
      }
        object.tech = tecnologies[techs]
        object.name = name
        newList.push(object);
    } return newList
  } techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "lucas")
   techList ([], 'ana')

// Desafio 11
// if para tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto."
// if para se algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, 
// generatePhoneNumber deverá retornar a string 
//"não é possível gerar um número de telefone com esses valores".
function generatePhoneNumber(numbers) {
    let manyTimes = 0; 
    let receiveNumbers = "Array com tamanho incorreto.";
    
     for (let index = 0; index < numbers.length; index += 1) {
       for (let idx = 1; idx < numbers.length; idx += 1) {
         if ( numbers[idx] === numbers [index]) {
           manyTimes += 1 
         }
        
       }
     } 
   
     
     for (let index = 0; index < numbers.length; index += 1) {
       
       if (numbers[index] > 9 || numbers[index] < 0 || manyTimes - 13 >= 3) {
         receiveNumbers = "não é possível gerar um número de telefone com esses valores"
         break
       } else if (numbers.length !==11) {
         receiveNumbers = "Array com tamanho incorreto."
         break
       } else {
         receiveNumbers = "(" + numbers[0] + numbers[1] + ")" + " " + numbers[2] +
           numbers[3] + numbers[4] + numbers[5] + numbers[6] + "-" +
           numbers[7] + numbers[8] + numbers[9] + numbers[10];
       }
     }  return receiveNumbers
   
   } generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])
   generatePhoneNumber([1, 9, 2, 8, 0, 2, 3, 4, 5, 6, 7, 5])
   generatePhoneNumber([9, 4, 6, 1, 2, 3, 1, 5, 1, 7, 8])
   generatePhoneNumber([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])