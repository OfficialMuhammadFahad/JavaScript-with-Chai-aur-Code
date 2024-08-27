// There are two ways to declare the objects
// 1. Singleton -- when you create singleton object that's like it's a specfic object or like it's a unique object
// 2. Object literals -- when you create object literals it's means it has multiple instance

// 1. Singleton method

Object.create 


// 2. Object Literals

const sym = Symbol ("Symbol-01")

const jsUsers = {
    name: "Muhammad Fahad",
    "full name": "Muhammad Fahad Muhammad Khalid",
    age: 22,
    height: 5.4,
    email: "abc@gmail.com",
    contactNumber: +923111111111,
    address: "New Karachi",
    isLoggedIn: true,
    lastLoggedIn: ["Tuesday", "Thursday", "Saturday"],
    familyDetails: undefined,
    familyContacts: null,
    [sym]: "Symbol-01" //When you use symbol type from array use this syntax
}

console.log(jsUsers.familyContacts);//That's not the right way
console.log(jsUsers.email);//That's ok but if you want to access of any string value for that this is not the right way
console.log(jsUsers["full name"]); //That's the right way to access any object which is in string
console.log(jsUsers["name"]);//That's the right way
console.log(jsUsers[sym]);//When you use symbol type in array use this syntax


jsUsers.isLoggedIn = false //When user want's to change the data in object so this method is for access the object key/field
console.log(jsUsers);

Object.freeze(jsUsers)//Freeze stop the user to changing in object
jsUsers.lastLoggedIn = ["Monday", "Tuesday", "Thursday", "Saturday"];

console.log(jsUsers);

jsUsers.greeting = function(){
    console.log("Hey Everyone");
}

jsUsers.greetingTwo = function(){
    console.log(`Hey Dear ${this.name}`);
}

console.log(jsUsers.greeting());
console.log(jsUsers.greetingTwo());







