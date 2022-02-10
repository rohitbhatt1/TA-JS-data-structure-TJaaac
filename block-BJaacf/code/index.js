// 1. Create an array named numbers and store 5 number values in it

let numbers = ["2","4","3",6,"9"];

// 2. Calculate the sum of array items and print it to the console using console.log()

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(`Addition of the array value of  ${sum}`);

// 3. Calculate the average of array items and print it to the console using console.log()

console.log(sum/numbers.length);

// 4. Find the highest number in the array and print it to the console using console.log()

let highestNumbers = numbers[0];
for(number of numbers) {
if (numbers >= highestNumbers) {
    highestNumbers = number;
}
}
console.log(highestNumbers);

// 56.

// 5. Find the lowest number in the array and print it to the console using console.log()

let numbers = [23,34,34,26,56];
let lowestnumbers = numbers[0];
for (number of numbers) {
if (numbers <= lowestnumbers){
 lowestnumbers = numbers;
}
}
console.log(lowestnumbers);

// output 23


// 6. Find the even numbers in the array and print them to the console using console.log()

for (let number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}
/*
let even = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        even.push(numbers[i]);
    }else continue;
}
console.log(`Even values in the array are ${even}`);    
*/

// 7. Find the odd numbers in the array and print them to the console using console.log()

for (let number of numbers) {
    if (number % 3 === 0) {
        console.log(number);
    }
}

/*

let odd = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        odd.push(numbers[i]);
    }else continue;
}
console.log(`Odd values in the array are ${odd}`);


*/

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

let num = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0) {
        num.push(numbers[i]);
    }else continue;
}
console.log(`Numbers divisible by 5 in the array are ${num}`);


// 9. Log all the element of the array one by one

for (let number of numbers) {
    console.log(number);
  }


// 10. Find all the number in the array that is divisible by 3

for (let number of numbers) {
    if (number % 3 === 0) {
        console.log(number);
    }
}
