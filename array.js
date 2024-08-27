// Two ways of writing arrays

let arr = [1, 2, 3, 6, 'Muhammad', true];
let arr2 = [1, 2, 3, 4, 5, 6]
// console.log(arr[5]);

const array = new Array(1, 3, 5, "Hey Guys!", null, undefined);
// console.log(array[3]);


arr.push(5) //Add element on the last index
arr.pop() //Remove element on the last index
arr.unshift(8) //Add element on the first index
arr.shift(8) //Romove element on the first index
console.log(arr.includes(5));//Find the element in the array and responsed in boolean data type
console.log(arr.indexOf(5));//Find the index of element and if the element is not present always give the -1 response
console.log(arr);

let newArr = arr2.join()//Change the array data type 

console.log(newArr);
console.log(typeof newArr);


//Slice and Splice

console.log(arr2);
let newArr2 = arr2.slice(2, 6);//Pick the required elements and show the elements in dublicate array and original array is same
console.log(newArr2);

console.log(arr2);
let newArr3 = arr2.splice(0, 2);//Pick the required elements and modify the original array
console.log(arr2);


var array1 = [1, 2, 3, 4, 5, 6];
var array2 = ["a", "b", "c", "d", "e", "f"];
array1.push(array2);//In this situation complete array on the last index just like nested array also change in original array
console.log(array1);


var arrAy = array1.concat(array2);//In this situation add complete array on the last index and give new array
console.log(arrAy);


var fruits = ["Apple", "Banana", "Cherries", "Date" ];
var vegitables = ["LadyFinger", "Cucumber", "Onion", "Potato"];
var mixSalad = [...fruits, ...vegitables];//Combine all arrays in one array called spread method sign is(...)
console.log(mixSalad);


var numbers = [1, 2, 3, 4, [5, 6, 7, 8, 9, 10], 11, 12, 13, 14, 15, [16, 17, 18, [19, 20, 21, 22]], 23, 24, 25];
var sequenceNumbers = numbers.flat(Infinity);//Combine all the nested arrays
console.log(sequenceNumbers);

let score1 = 25;
let score2 = 15;
let score3 = 10;

console.log(Array.of(score1, score2, score3));//Convert all variables into array
