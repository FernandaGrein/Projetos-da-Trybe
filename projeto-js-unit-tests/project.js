// ex.1 
const average = (array) => {
  let sumIndex = 0;
  let media = 0;
  if (array.length === 0) {
    return undefined;
  }

  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
     return undefined;
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    sumIndex += array[index];
    media = Math.round(sumIndex / array.length);
  }
  return media;
};

// ex. 3
const vqv = (name, age) => {
  if (typeof name === 'string' && typeof age === 'number') {
    let phrase = `Oi, meu nome é ${name}!
    Tenho ${age} anos,
    trabalho na Trybe e mando muito em programação!
    #VQV!`;
    return phrase;
  }
  return undefined;
};

// ex. 5 const goodPerson = () => 'Eita pessoa boa!';
const createStudent = (nome) => {
  const object = {
   name: nome, 
   feedback: goodPerson,
  };
  return object;
};

// ex. 7
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

const calculator = (number1, number2) => {
  const object = {
    sum: number1 + number2,
    mult: number1 * number2,
    div: Math.trunc(number1 / number2),
    sub: number1 - number2,
  };
  return object;
};
  
const arrayGenerator = (type, object) => {
  let result = ('');
   if (type === 'keys') {
    result = 'keys: ' + Object.keys(object);
   } else if (type === 'values') {
    result = 'values: ' + Object.values(object);
   } else if (type === 'entries') {
    result = 'entries: ' + Object.entries(object);
   }
   return result;
};

// ex. 8
const myCounter = () => {
  var myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let counter2 = 2; counter2 <= 3; counter2 += 1) {
      myArray.push(counter2);
    }
  }
  return myArray;
};
myCounter();