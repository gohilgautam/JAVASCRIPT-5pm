// Array ==> Store multiple values in a single variable

// let fruit = ["Apple", "Banana", "Cherry", "watermelon", "Grapes"];
//index no.     0          1         2          3           4
// console.log(fruit);

// for know a index variable

// console.log(fruit[3]);

// replace elememt in array 

// fruit[3] = "guavava"
// console.log(fruit);

// for know a typeof Array

// console.log(typeof fruit);

//for know a length of array

// console.log(fruit.length)

//Methods of Array
/*
    push method
    pop method
    shift method
    unshift method
    splice method
*/

//push method

// let numbers = [1, 2, 3, 4, 5];
// numbers.push(6)
// console.log(numbers);

// pop method 

// numbers.pop()
// console.log(numbers);

//unshift method

// numbers.unshift(8, 9, 10);
// console.log(numbers);

// shift method

// numbers.shift()
// console.log(numbers);

//splice method

// numbers.splice(3, 2, 200)
// console.log(numbers);


//higher order function in Array

//filter method => return a new array with all elements that pass the test implemented by the provided function.

let data = [11, 22, 33, 44, 55]
// let arr = data.filter ((ele, index) => {
//     return ele >= 20;
// })
// console.log(arr);

// find method => 

// let arr = data.find((ele, index) =>{
//     return ele >= 30;
// })
// console.log(arr);

// find indx method => 

// let arr = data.findindex((ele, index) =>{
//     return ele === 33;
// })
// console.log(arr);

// map method => return a new array with the results of applying the provided function on every element in this

// array.
// let arr = data.map((ele, index) => {
//     return ele * 2
// })
// console.log(arr);

// foreach method => call a function on every element in this array.

// for(let i = 0; i < data.length; i++){
//     console.log(data[i]);
// };
// data.forEach((ele, index) => {
//     console.log(ele);
// });
// console.log(data);


