let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");
let div = document.querySelector("#createEle");

// Store the user data once (simulate signup - only for demo purpose)
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
        div.innerHTML = `<p style="color: green; font-weight: bold;">Login successful! Welcome, ${storedUser.email}</p>`;
    } else {
        div.innerHTML = `<p style="color: red; font-weight: bold;">Invalid email or password. Please try again.</p>`;
    }
});