// Two ways of console the string

let firstName = "Muhammad"
let lastName = "Fahad"

console.log("My name is " + firstName + " " + lastName);  //That's is old method

console.log(`My Name is ${firstName} ${lastName}`); //That's the new way to console the string there is one more benefit in it if you want to use any property you can use ${firstName.length} like this

//One more way to write a string variable

let fullName = new String("Muhammad Fahad");

let newPerson = new String("            New One        ");

console.log(fullName[5]); //Find the 5 element 
console.log(fullName.length); //Find the total length of element
console.log(fullName.toLowerCase()); //lowercase all the element 
console.log(fullName.charAt(7)); //Find 7 index element 
console.log(fullName.indexOf("h")); //Find index of element
console.log(fullName.substring(0, 5)); //Find index of element with positions
console.log(fullName.slice(0, 10)); //Find index of element with positions and also take negative values
console.log(newPerson); //Print the same value
console.log(newPerson.trim()); //Remove the all extra spaces before and after value. There are 2 more trim methods --> trimStart and trimEnd
console.log(fullName);


let randomUrl = "https:linktr.ee/OfficialMuhammad%20Fahad"
console.log(randomUrl.replace("%20" , "" ));//When user write the url and add space in url during finding websites so browser automatically add %20 for the blank space so the replace function replace that %20 to "" empty space. It takes 2 values first what you want to remove and second from which you want to replace  
console.log(randomUrl.includes("Muhammad"));//Check the element in url response in boolean form
console.log(randomUrl.includes("Fawad"));//Check the element in url response in boolean formnn




