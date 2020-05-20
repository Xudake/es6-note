const map = new Map();

map.set(1,'aaa').set(1,'bbb');

console.log(map.get(1)); // bbb

console.log(new Map().get('asdfgh'));

const map1 = new Map();
map1.set(['a'],5);
console.log(map1.get(['a']));

const map2 = new Map();
const k1 = ['a'];
const k2 = ['a'];
map2.set(k1,1).set(k2,2);
console.log(map2.get(k1))
console.log(map2.get(k2))
