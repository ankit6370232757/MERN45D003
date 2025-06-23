let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");
let div = document.querySelector("#createEle");

localStorage.setItem("user", JSON.stringify({
    email: "ankitkumarrath@gmail.com",
    password: "Ankit123"
}));

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let enteredEmail = inputs[0].value;
    let enteredPassword = inputs[1].value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (
        storedUser &&
        enteredEmail === storedUser.email &&
        enteredPassword === storedUser.password
    ) {
        alert("User logged in Successfully")

    } else {
        alert("invalid user")


    }
});