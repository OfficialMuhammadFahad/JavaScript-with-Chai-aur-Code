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
let newArr2 = arr2.slice(2, 6);//Pick the required elements and show the elements in dublicate array and main array is same
console.log(newArr2);

console.log(arr2);
let newArr3 = arr2.splice(0, 2);//Pick the required elements and modify the main array
console.log(newArr3);
console.log(arr2);


