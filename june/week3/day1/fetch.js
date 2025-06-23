// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("promise executed");
//         resolve("ex")
//         reject("rejected")

//     }, 2000)
// })
// console.group(promise)


// function getUserData(userID) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("user id", userID);
//             resolve("sucess")

//         }, 2000);
//     })
// }
// getUserData(1).then(() => {
//     return getUserData(2).then(() => {
//         return getUserData(3)


//     })
// })
// async && await
async function fetchMethod() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/")
    console.log(response);

    let data = await response.json()
    console.log(data);

    data.forEach(element => {
        console.log(element.id, element.title);


    });

}
fetchMethod()