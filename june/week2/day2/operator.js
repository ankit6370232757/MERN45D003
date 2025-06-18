console.log("today we arfe going to study operator");
console.log(1 + 2);
console.log(5 - 3);
console.log(3 * 3);
console.log(10 / 2);
console.log(5 % 3);

let e = 40;
console.log(e++);
console.log(++e);
console.log(e);

console.log(e--);
console.log(e--);
// const num = prompt("Enter a number")
// console.log(num % 5 == 0 ? "number is multiple by 5" : "false");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("THis is while loop")
let i = 1;
while (i <= 3) {
    console.log(i)
    i++;
}

console.log("do while loop")
let n = 1;
do {
    console.log(n)
    n++;
} while (n <= 5);


let a = 50;
let b = 30;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a % 2);
console.log(a ** 2);

console.log(a++);
console.log(++a)

console.log(b--)
console.log(--b)

console.log("string" + 30);
console.log(20 + 30 + "String")
console.log(true + "String")
console.log(+"text");
console.log(typeof + "text")

console.log(+true)
console.log("20" + "30")
console.log("20" + +"30" * 2)


let c = 40;
c += 2;
console.log(c)
c -= 3;
console.log(c)

// comparision operator
let st1 = "abc";
let st2 = "abc";
console.log(st1 == st2);
console.log(st1 === st2)

let n1 = "40";
let n2 = 20;
// normal comparision
console.log(n1 == n2)
    // strict comparision
console.log(n1 === n2)

let is = "true"
console.log(true !== is);


let stMark = 40;
if (stMark >= 90) {
    console.log("Grade A")
} else if (stMark >= 80) {
    console.log("Grade B")
} else if (stMark >= 60) {
    console.log("Grade C")
} else {
    console.log("Fail")
}