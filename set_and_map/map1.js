const m = new Map();
const o = {P: 'hellp world'};

m.set(o,'content');
console.log(m.get(o));

console.log(m.has(o));
m.delete(o);
console.log(m.has(o));

const map = new Map([
    ['name','张三'],
    ['title', 'Author']
]);

console.log(map.size);
console.log(map.has('name'));
console.log(map.get('name'));
console.log(map.has('title'));
console.log(map.get('title'));