// 解构不成功
let [bar,foo] = [1];
console.log(bar,foo);

let [a] = [];
console.log(a);

// 不完全解构
let [x,y] = [1,2,3];
console.log(x,y);

let [b,[c],d] = [1,[2,3],4];
console.log(b,c,d);

