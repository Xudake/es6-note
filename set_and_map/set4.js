let set = new Set(['red','green','blue']);
let arr = [...set];
console.log(arr);
// [ 'red', 'green', 'blue' ]

let arr2 = [3,5,2,3,5,5];
let unique = [...new Set(arr2)];
console.log(unique);
// [ 3, 5, 2 ]

let set2 = new Set([1,2,3])
set2 = new Set([...set2].map(x=>x*2));
console.log(set2);
// Set { 2, 4, 6 }

let set3 = new Set([1,2,3,4,5,6,7,8,9]);
set3 = new Set([...set3].filter(x=>(x%2)==0))
console.log(set3);
// Set { 2, 4, 6, 8 }

let a = new Set([1,2,3,4,5]);
let b = new Set([2,3,4,5,6,7]);

// 并集
let union = new Set([...a,...b])
console.log(union);

// 交集
let intersect = new Set([...a].filter(x=>b.has(x)));
console.log(intersect);

// 差集
let difference = new Set([...a].filter(x=>!b.has(x)));
console.log(difference);
