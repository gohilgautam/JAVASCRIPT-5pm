// DOM => Document Object Method

/*
    1. getElementsByTagName()
    2. getElementsByClassName()
    3. getElementsByClassName()
    4. querySelector()
*/

// 1. getElementId() => Returns a NodeList of elements that match the specified tag name.

// let elements = document.getElementById("num");
// console.log(elements);
// elements.style.fontSize = "20px";
// elements.style.color = "purple";

// 2. getElementsByTagName() => Returns a NodeList of elements that match the specified tag name.

// let data = document.getElementsByTagName("h2");
// console.log(data);
// data.style.fontSize = "20px";
// data.style.color = "blue";

//3. getElementsByClassName() => Returns a NodeList of elements that match the specified class name.

let data = document.getElementsByClassName("data");
console.log(data);
data[0].style.fontSize = "20px";
data[0].style.color = "blue";

//4. querySelector() => Returns the first element that matches the specified selectors.

let data = document.querySelector(".data");
console.log(data);
data.style.fontSize = "20px";
data.style.color = "yelloww";

