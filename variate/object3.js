let obj = {};
let arr = [];

({foo: obj.props,bar: arr[0]} = {foo: 123,bar: true});

console.log(obj,arr);//{ props: 123 } [ true ]

var {x=3} = {}
console.log(x);//3

var {y,z=5} = {y:1};
console.log(y,z);//1,5

var {h: i=4} = {};
// console.log(i,h);//4 ,h is not undefined

var {h:i=5} = {h:33};
console.log(i);

var {message: msg = 'something went wrong'} = {};
console.log(msg); 
