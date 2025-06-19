// for in loop


let str = "Qlith";
console.log(str[1]);
// property
console.log(str.length);
console.log(str.toUpperCase())
console.log(str.toLocaleUpperCase())
console.log(str.trim().length)
console.log(str.slice(0, 3))
console.log(str.substring(-2));
console.log(str.replace("Q", "E"));
console.log("Qlith".concat("Inovation"));
console.log(str);
let arr = [12345]
console.log(arr);
let obj = "Ankit"
console.log(obj);
for (let key in arr) {

}
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
// add or remove from th last
arr1.push(7, 8);
console.log(arr1);
arr1.pop()
console.log(arr1);
// add or remaove from thef 
arr1.unshift(0);
console.log(arr1);
arr1.shift()
console.log(arr1);
// lenght
console.log(arr1.length);

console.log(arr1.slice(0, 4));
console.log(arr1.splice(2, 2, 30));
console.log(arr1);

let arr2 = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log(arr2);

arr2.unshift()
console.log(arr2);
arr2.shift()
console.log(arr2);

console.log(arr2.splice(1, 1, "Ola"));
console.log(arr2);
arr2.pop()
console.log(arr2);
arr2.push("Amazon")
console.log(arr2);
// object
let obj3 = {
    age: 30,
    name: "Ankit",
    phone: 57644899,
    email: "drrdryy@gmail.com",
}
console.log(obj.name);
console.log(obj.name);
console.log(obj["email"]);
obj.name = "y"
console.log(obj.name);


console.log("for-in-loop");
// for-in
for (let key in obj) {
    console.log(obj[key]);

}
for (let idx in arr) {
    console.log(arr[idx]);

}