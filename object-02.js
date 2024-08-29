//1. Singleton Object

const singleTonObject = new Object();//This is a singleton object
console.log(singleTonObject);


const nonSingleTonObject = {};//This is a non singleton object
console.log(nonSingleTonObject);


singleTonObject.id = "0001"
singleTonObject.name = "Single Ton Object"
singleTonObject.reference = "There is no reference"

console.log(singleTonObject);


const userDetails = {
    email: "random@gmail.com",
    userName: {
        userFullName: {
            firstName: "Muhammad",
            lastName: "Fahad"
        },
        userNickname: "Fahad" 
    },
    age: 22,
}

console.log(userDetails.userName.userFullName); //Through the dot (.) we can access the nested objects


const object01 = {
    a: 1,
    b: 2
}; 

const object02 = {
    3: "c",
    4: "d"
};

const object03 = Object.assign(object01, object02)//Combine two or more objects together
const object04 = Object.assign({}, object01, object02)//This empty {} brackets also do same things but it's for good practice
const object05 = {...object01, ...object02}//This is also a way to combine two or more objects together
console.log(object03);
console.log(object04);
console.log(object05);

console.log(Object.keys(userDetails));//Give all the keys of an object
console.log(Object.values(userDetails));//Give all the keys values of an object

console.log(userDetails.hasOwnProperty('userFullName'));//Check the userFullName property in userDetails object and answer is in boolean form true or false

