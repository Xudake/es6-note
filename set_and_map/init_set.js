const set = new Set([1,2,3,4,5,3])
console.log([...set]);

const items = new Set([1,2,3,4,5,5,5,5,5,5,5,5])
console.log(items.size)

let array = [1,2,3,4,5,6,12,2,3,4,5]
console.log([...new Set(array)]);

let str = 'ababccd';
console.log([...new Set('ababc')].join(''));

let set1 = new Set();
let a = NaN;
let b = NaN;
set1.add(a);
set1.add(b);
console.log(set1);

console.log({}=={})