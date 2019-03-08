let {log,sin,cos} = Math;
console.log(log,sin,cos);

let arr = [1,2,3];
let {0: first,[arr.length-1]: last} = arr;
console.log(first,last);