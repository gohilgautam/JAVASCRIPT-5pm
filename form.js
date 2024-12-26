let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let email = document.getElementById('mail')
let pass = document.getElementById('pass')
let date = document.getElementById('DOB')
let gender = document.getElementById('gender')
let hobby = document.getElementById('hobbies')

let form = document.addEventListener("submit" , (event) => {
    event.preventDefault();
    console.log(event);

    if(fname.value = "")(document.getElementById("fnameerr").innerHTML="please enter First-name Please")

});