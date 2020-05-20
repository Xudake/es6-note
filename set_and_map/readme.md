# set

## 基本用法
> set类似于数组，区别是所有成员的值都是唯一的，没有重复的值

```
const s = new Set();

[2,3,4,5,2,3,3,4,22,323].forEach(x=>s.add(x));

console.log(s);
for(let i of s) {
    console.log(i);
}
```

- Set函数可以接收一个数组或者具有iterable接口的其他数据结构作为参数，用来初始化
```
const set = new Set([1,2,3,4,5,3])
console.log([...set]); //[ 1, 2, 3, 4, 5 ]

const items = new Set([1,2,3,4,5,5,5,5,5,5,5,5])
console.log(items.size) // 5
```

- 数组去重
```
let array = [1,2,3,4,5,6,12,2,3,4,5]
console.log([...new Set(array)]); // [ 1, 2, 3, 4, 5, 6, 12 ]
```

- 去除重复字符串
```
let str = 'ababccd';
console.log([...new Set('ababc')].join('')); //abc
```

- 向set加入值的时候，不会发生类型转换，所以5和'5'是两个不同的值，set判断两个值是否相等，类似于精准相等运算符（'==='，区别是NaN不等于本身，这里set加入值的认为NaN等于本身）

```
let set1 = new Set();
let a = NaN;
let b = NaN;
set1.add(a);
set1.add(b);
console.log(set1); // { NaN }
```

# Set方法和属性 

- size Set数据的尺寸

四个操作方法

- has() 判断是否有指定元素

- add() 添加元素

- delete() 删除元素

- clear() 清除元素


遍历方法

- keys() 返回键名的遍历器

- values() 返回键值的遍历器

- entries() 返回键值对的遍历器

- forEach() 使用回调函数遍历每个对象


> keys,values,entries方法返回的都是遍历器对象，由于Set结构没有键名，只有键值，所以keys方法和values()方法的行为完全一致。

Set默认可以遍历

```
Set.prototype[Symbol.iterator] === Set.prototype.values
// true

let set = new Set(['red', 'green', 'blue']);

for (let x of set) {
  console.log(x);
}
// red
// green
// blue
```

遍历的应用

```
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
// Set { 1, 2, 3, 4, 5, 6, 7 }

// 交集
let intersect = new Set([...a].filter(x=>b.has(x)));
console.log(intersect);
// Set { 2, 3, 4, 5 }

// 差集
let difference = new Set([...a].filter(x=>!b.has(x)));
console.log(difference);
// Set { 1 }

```

# Map

> js的对象，本质上是键值对的集合，但是传统上只能用字符串作为键

