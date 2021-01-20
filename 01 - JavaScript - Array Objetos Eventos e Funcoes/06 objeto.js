/*
/**
 * A forma mais utilizada atualmente para declarar um objeto é 
 * let obj = {}
 */

let person = {name: 'Guto', age: 32, height: 1.83, weight: 69}
console.log(person)
console.log(person.name)
//ou
console.log(person['name'])


// Inserção em tempo de execucao
let car = {}

car.brand = 'Toyota'
//ou
car['color'] = 'Black'


console.log(car)


// Array de OBJETO

let listCar = [
    {
        brand: 'Toyota',   
        color: 'blue'
    },
    {
        brand: 'VW',
        color: 'Yellow'
    },
    {
        brand: 'Mercedes',
        color: 'White'
    }
]