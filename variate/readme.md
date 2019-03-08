# 变量的解构赋值

## 数组的解构赋值

### 定义

> 允许按照一定的模式，从数组和对象中提取值，对变量进行赋值，被称为解构

+ 如果解构不成功，变量的值为undifined
+ 等号左边的模式只匹配一部分等号右边的数组，属于不完全解构，可以解构成功
+ 如果等号右边，不是数组或者说不是可遍历的结构，就会报错
+ set数据结构也可用数组的结构赋值,具有Iterator接口，可以采用数组形式的解构赋值

### 默认值

> 解构赋值允许指定默认值

+ 解构的值所在的位置要严格等于undefined，默认值才会生效
+ 如果默认值是一个表达式，这个表达式惰性求值，用到的时候才会求值
+ 默认值可以引用解构赋值的其他变量，但是该变量必须已经声明完成(类似于声明变量，不存在变量的提升)

## 对象的解构赋值

> 和数组解构赋值的区别，数组元素是按次序排列的，变量的取值由他的位置决定，对象的取值由他的名称决定

+ 变量名和属性名不一样，使用键值对的形式,按照键的名称寻找匹配，把匹配到数据赋值给值
```
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
```
+ 与数组一样，解构也可以用于嵌套解构的对象
```
let obj = {
    p: [
        'hello',
        {y: 'world'}
    ]
};

let {p: [x,{y}]} = obj;
x;//hello
y;//world
```
+ 支持默认值，严格等于undefined默认值才生效
+ 不可将大括号写在首行，避免被解释成代码块
```
// 错误的写法
let x;
{x} = {x: 1};
// SyntaxError: syntax error

// 正确的写法
let x;
({x} = {x: 1});
```
+ 可以很方便的把现有对象的一些方法，赋值给某个变量
```
let { log, sin, cos } = Math;
```
+ 可以对数组进行对象的解构赋值


## 字符串的解构赋值
```
const [a,b,c,d,e] = 'hello';
console.log(a,b,c,d,e); //h e l l o

let {length: l} = 'hello';
console.log(l);//5
```

## 数值和布尔型的解构赋值
> 只要等号右边不是对象或数组 都要先转为对象 由于undefined和null无法转为对象
```
let {toString: s} = 123;
let {toString: bs} = true;
console.log(s===Number.prototype.toString)//true
console.log(bs===Boolean.prototype.toString)//true
```

## 函数参数的解构赋值
```
function move({x=0,y=0}={}){
    return [x,y];
}

console.log(move({x:3,y:8}))
console.log(move({x:3}))
console.log(move({}))
console.log(move())
// [3, 8]
// [3, 0]
// [0, 0]
// [0, 0]

function move2({x,y}={x:0,y:0}){
    return [x,y]
}

console.log(move2({x:3,y:8}))
console.log(move2({x:3}))
console.log(move2({}))
console.log(move2())
// [3, 8]
// [3, undefined]
// [undefined, undefined]
// [0, 0]
```

## 解构赋值的作用

### 交换变量的值
```
let x = 1;
let y = 2;
[x,y]=[y,x];
console.log(x,y);
```

### 从函数返回多个值
```
function example(){
    return [1,2,3];
}

let [a,b,c] = example();
console.log(a,b,c);

function example2() {
    return {
        foo: 1,
        bar: 2
    }
}

let [foo,bar] = example();
console.log(foo,bar);

```

### 函数参数定义
```
function f([x,y,z]){}
f([1,2,3])

function f({x,y,z}){}
f({z:3,x:2,y:1});
```

### 提取JSON的数据
```
let jsonData = {
    id: 42,
    status: 'ok',
    data: [888,999]
}

let {id,status,data:number} = jsonData;
console.log(id,status,number);//42 'ok' [ 888, 999 ]
```

### 函数参数的默认值

### 遍历Map解构的数据
```
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world

// 获取键名
for (let [key] of map) {
  // ...
}

// 获取键值
for (let [,value] of map) {
  // ...
}
```

### 输入模块的指定方法
```
const {SourceMapConsumer,sourceNode} = require('source-map')
```