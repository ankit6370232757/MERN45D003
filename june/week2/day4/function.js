// console.log("This is functional page");
function Myfunction() {
    console.log("This is my bamed function");

}
Myfunction();
// types of fuction
// named fuction 
// expression function
// arrow function
// call back function
// higher order function
let expressionfunction = function() {
    console.log("This is expression function");

}

expressionfunction()

let arrowfunction = () => {
    console.log("this is my arrow function");

}

arrowfunction()

// passing parameter
let printValue = (a) => {
    console.log("value is :", a);

}
printValue(20)
    // higher order functtion
function highorderfuntion(fun) {
    fun()
}
// call back function
highorderfuntion(() => {
        console.log("this is my highorder function");

    })
    // array function
    // forEach
let arr = [1, 2, 3, 4, 5, 6]
arr.forEach((v) => {
    console.log(v);

})
let filterValue = arr.filter((v) => {
    return v % 2 == 0;
})
console.log(filterValue);
// Dom Manupulation
let a = document.getElementById("ankit");
console.dir(a);