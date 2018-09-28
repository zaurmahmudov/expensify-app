// Object Desctructuring
// const person = {
//     age: 21,
//     location: {
//         city: 'LA',
//         temp: 30
//     }
// };

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);

// if(person.location.city && person.location.temp) {
//     console.log(`It's ${person.location.temp} in ${person.location.city}.`);
// }

// const {city, temp:temperature} = person.location;

// if(city, temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

/**
 * In destructuring we can set default name, rename value 
 * and It's just easier to read and work with
 */

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name = 'Self Published' } = book.publisher;

// console.log(name);

// 
// Array Desctructing
//

// const address = ['1229 S Juniper', 'Philadelphiya','Pennsylvania', '19127'];
// const address = [];

// For object desctucturing we use curly brackets {} 
// For array destructing we use [] brackets 

// let [street, city,state, zip] = address;
// let [,city,state, zip] = address;
// let [ , ,state = 'New Jorsey'] = address;


// console.log(`You are in  ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2,75'];

const [Coffee, , med] = item;
console.log(`A Medium ${Coffee} costs ${med}.`);