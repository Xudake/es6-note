let [a = 1] = [undefined];
let [a=1] = [undefined];
console.log(a);

let [b=2] = [null];
console.log(b);

function f() {
    console.log('aaa');
    return 'aa';
}

let [c = f()] = [];

console.log(c);
