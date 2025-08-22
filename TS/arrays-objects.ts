let hobbies: string[] = ['Reading', 'Cooking']

//hobbies.push(10)


// Union Type
let users: (string | number)[] = [];

users = ['ROBIN', 21];
users = [42, 5];

//Another way to write  a union type array is using the Array<T> syntax
let users2: Array<string | number> ;

// Tuples - is defined as an array with fixed number of elements and known types

let possibleResults: [number, number]

possibleResults = [42, -5];

//Notice the array length below shoots an error because it expects exactly two elements
//possibleResults = [5, 10, 12];

//Objects

let user: {
    name: string;
    age: number;
    hobbies: string[];
    role: { admin: boolean; ID: number } ;
} = {
    name: 'ROBIN',
    age: 51,
    hobbies: ['Reading', 'Cooking'],
    role: { admin: true, ID: 12345 }
};


//The "Must Not Be Null" Type

// let val: {} = null; // This will throw an error in strict mode

//Flexible Objects with the Record Type

//The definition of Record Type is a utility type that allows you to create an object type with specific keys and values.

let data: Record <string, number | string>;

data = {
    entry1: 1,
    entry2: 'two',
}

