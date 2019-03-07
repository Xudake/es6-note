// let a = 1;
// let b = 2;
// let c = 3;

// console.log(a,b,c);

let [a,b,c] = [11,22,33];
console.log(a,b,c);

let [foo,[[bar],baz]] = [1,[[2],3]];
console.log(foo,bar,baz);

let [,,third] = ['foo','bar','baz'];
console.log(third);

let [x,,y] = [1,2,3];
console.log(x,y);

let [head,...tail] = [1,2,3,4];
console.log(head,tail);

let [m,n,...l] = ['a'];
console.log(m,n,l);