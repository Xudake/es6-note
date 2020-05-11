const s = new Set();

[2,3,4,5,2,3,3,4,22,323].forEach(x=>s.add(x));

console.log(s);
for(let i of s) {
    console.log(i);
}