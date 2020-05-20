const items = [
    ['name','张三'],
    ['title','author']
]

const map = new Map();
items.forEach(([key, value]) => map.set(key, value))

console.log(map);
console.log(map.get('name'));

const map2 = new Map(items);

console.log(map2);

const set = new Set([
    ['foo',1],
    ['bar',2]
])

const m1 = new Map(set);
console.log(m1);
console.log(m1.get('foo'));

const m2 = new Map([['baz',3]])
const m3 = new Map(m2);
console.log(m3);
console.log(m3.get('baz'));