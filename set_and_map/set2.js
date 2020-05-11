let s = new Set();
s.add(1).add(2).add(2);
console.log(s.size);
console.log(s.has(1));
console.log(s.has(2));
console.log(s.has(3));
s.delete(2);
console.log(s.has(2));