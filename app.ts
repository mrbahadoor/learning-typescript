// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'John',
//     age: 30
// };

const person = {
    name: 'John',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[]; //type array of strings
favoriteActivities = ['Sports'];

// console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}