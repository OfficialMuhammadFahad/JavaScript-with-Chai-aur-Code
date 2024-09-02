// Today is Wednesday and date is August 21, 2024

let myDate = new Date();  //Date is an object
console.log(typeof myDate);
console.log(myDate); //2024-08-21T11:55:02.235Z
console.log(myDate.toString()); //Wed Aug 21 2024 16:55:02 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toDateString()); //Wed Aug 21 2024
console.log(myDate.toISOString()); //2024-08-21T11:55:02.235Z
console.log(myDate.toJSON()); //2024-08-21T11:55:02.235Z
console.log(myDate.toLocaleDateString()); //8/21/2024
console.log(myDate.toLocaleString()); //8/21/2024, 4:55:02 PM
console.log(myDate.toLocaleTimeString()); //4:55:02 PM


let customizedDate = new Date(2001, 9, 28, 1, 15); //In JS Month index start with 0 //10/28/2001, 1:15:00 AM
console.log(customizedDate.toLocaleString());
console.log(customizedDate.toDateString());

console.log(myDate.getDay()); //3
console.log(myDate.getDate()); //21
console.log(myDate.getMonth() + 1); //8
console.log(myDate.getTime()); //1724391437749
console.log(Math.floor(myDate.getTime()/1000));


//Comparsion always in mini seconds

console.log(`Today is ${myDate.getDay()} day and date is ${myDate.toLocaleDateString()}`); //Today is 5th day and date is 8/23/2024


console.log(myDate.toLocaleString("default", {
    weekday: "long",//Three Properties Short/ Long/ Narrow //The answer of every value is Fri/ Friday/ F
}));
