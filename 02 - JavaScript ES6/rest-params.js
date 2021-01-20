// ES6 como inserir parametros adcionais


function paramsAdicionais (param1, param2, ...otherParams) {
    console.log(otherParams);
}

paramsAdicionais('parametro 1', 'parametro 2', 'parametro 4', '...');


// outra funcionalidade do rest params é concatenar arrays

let array1 = [1,2,3,4];

//concat array1 e array2

let array2 = [5,6,7,8, ...array1];

console.log(array2);


//e tbm serve para splitar uma string

let umaString = 'Luso Augusto Cesar Moreira';

let arrayString  = [...umaString];

console.table(arrayString);