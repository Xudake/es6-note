const s = new Set();

[2,3,4,5,2,3,3,4,22,323].forEach(x=>s.add(x));

console.log(s);
for(let i of s) {
    console.log(i);
}

// let arr = ["a", "b"];
// arr.name = 'xx';
// for (a in arr) {
//     console.log(a); //0,1
// }

// for (a of arr) {
//     console.log(a); //a,b
// }