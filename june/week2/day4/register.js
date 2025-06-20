let inputs = document.querySelectorAll("input");
let btn = document.querySelector("button");
let form = document.querySelector("form");
let div = document.querySelector("#createEle");

console.log(btn);

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

btn.addEventListener('click', () => {

    console.log(inputs[0].value);
    console.log(inputs[1].value);
    console.log(inputs[2].value);
    console.log(inputs[3].value);
    console.log(inputs[4].value);


    let userObj = {
        fullName: inputs[0].value,
        age: inputs[1].value,
        phoneno: inputs[2].value,
        Email: inputs[3].value,
        password: inputs[4].value,
    };


    localStorage.setItem("user", JSON.stringify(userObj));


    inputs.forEach(input => input.value = "");
});