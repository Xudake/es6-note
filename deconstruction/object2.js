let {foo:baz} = {foo: 'hahaha'};
console.log(baz);

let obj = {first: 'hello',last: 'world'};
let {first:f,last: l} = obj;

console.log(f,l);
// console.log(first);//ReferenceError: first is not defined

let obj2 = {
    p: [
        'hello',
        {y: 'world'}
    ]
};

let {p,p: [x,{y}]} = obj2;

console.log(p,x,y);

const node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
}

let {loc,loc:{start},loc: {start:{line}}} = node;
console.log(line,loc,start);