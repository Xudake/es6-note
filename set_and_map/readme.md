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

- has()

- add()

- delete()

- clear()
