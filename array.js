// Array ==> Store multiple values in a single variable

let fruit = ["Apple", "Banana", "Cherry", "watermelon", "Grapes"];
//index no.     0          1         2          3           4
console.log(fruit);

// for know a index variable

console.log(fruit[3]);

// replace elememt in array 

fruit[3] = "guavava"
console.log(fruit);

// for know a typeof Array

console.log(typeof fruit);

//for know a length of array

console.log(fruit.length)

//Methods of Array
/*
    push method
    pop method
    shift method
    unshift method
    splice method
*/

//push method

let numbers = [1, 2, 3, 4, 5];
numbers.push(6)
console.log(numbers);

// pop method 

numbers.pop()
console.log(numbers);

//unshift method

numbers.unshift(8, 9, 10);
console.log(numbers);

// shift method

numbers.shift()
console.log(numbers);

//splice method

numbers.splice(3, 2, 200)
console.log(numbers);





