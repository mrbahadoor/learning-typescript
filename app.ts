// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; //tuple with fixed length and first element is number and second element is string
// } = {
//     name: 'John',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role:[1, 'author']
// };

// person.role.push('admin');
// // person.role[1] = 10; // !!! ERROR !!!

enum Role { ADMIN, READ_ONLY, AUTHOR }; // declare enum

const person = {
    name: 'John',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN // Access enum value
};




// let favoriteActivities: string[]; //type array of strings
// favoriteActivities = ['Sports'];

// console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}