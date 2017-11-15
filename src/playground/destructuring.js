// const person = {
//   name: 'Eric',
//   age: 29,
//   location: {
//     city: 'Montreal',
//     temp: -5
//   }
// };

// const {name: firstName = 'Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;
// // c'est le meme chose

// console.log(`${firstName} is ${age}.`);


// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Publish' } = book.publisher 

console.log(publisherName);

//object destruct ^^
// array distruct

const address = ['1299 S Junipeger Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address; // [ , , state]

console.log(`You are in ${city} ${state}.`);