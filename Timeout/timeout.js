// timingfunction => function that returns the time elapsed since the start of the program
    // setTimeout => only one time executes.
    // setInterval => countinue executes base one interval.

let id = setTimeout(() => {
    console.log(10 * 3);
}, 2000);
clearTimeout(id)

console.log("set timeout" , id)

let ID = setInterval(() =>{
    console.log(10 * 3);
}, 4000)
clearInterval(ID)
console.log("set interval" , ID)