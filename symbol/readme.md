# symbol

>表示独一无二的值，第七种数据类型，(前六种分别是：undefined, null, 布尔值，string，对象，数值),引入这个，可以解决对象的属性名的冲突
```

let s = Symbol();

typeof s;
// 'symbol'

```

## 可以接受一个字符串作为参数

>不加参数不利于区分两个Symbol的值，加了以后可以区分开。

```
    let s1 = Symbol('foo');
    let s2 = Symbol('bar');

    s1 //Symbol('foo')
    s2 //Sybbol('bar')

    s1.toString(); //"Symbol('foo')"
    s2.toString(); //"Symbol('bar')"

```

- 如果参数是一个对象，会调用对象的toString的方法。转化为字符串，然后再生成一个Symbol的值
- 参数只是当前Symbol值的一个描述，相同的参数的Symbol函数的返回值是不相等的

```
// 无参数的情况
let s1 = Symbol();
let s2 = Symbol();

s1 === s2; // false

// 有参数的情况
let s1 = Symbol('foo');
let s2 = Symbol('foo');

s1===s2 // false
```
- symbol值不能与其他的类型的值运算，会报错。但是可以显式的转化为字符串，也可以转化成布尔型，但是不能转化为数值

```
let sym = Symbol('tt');
String(sym) // "Symbol('tt')"
sym.toString() // "Symbol('tt')"

Boolean(sym) // true
!sym // false

Number(sym); // TypeError
sym + 2; // TypeError
```

## Symbol.prototype.description
>Symbol的描述就是参入的参数，原先只能通过显式的转化为字符串才能看到，es2019提供一个新的实例属性description,直接返回Symbol的描述

```
const sym = Symbol('foo');

String(sym) // "Symbol('foo')"
sym.toString() // "Symbol('foo')"

//es2019
sym.description // 'foo'
```

## 作为属性名的Symbol
> 因为symbol的每一个值都是不相等的，这意味着SYMbol值可以作为标识符，用于对象的属性名，就可以保证不会出现同名的属性，可以防止某一个键被不小心的改写或者覆盖

```
let mySymbol = Symbol();

// 写法一
let a = {};
a[mySymbol] = 'hello world';

//写法二
let a = {
    [mySymbol]: 'hello world'
}

//写法三
Object.defineProperty(a, mySymbol, {value: 'hello world'})


//以上的写法都得到相同的结果
a[mySymbol] 'hello world'

```

- symbol作为属性的时候，不能使用点运算符
- symbol可以用来定义一组常量，保证这组常量的值都不相等


## 属性名的遍历
>Symbol作为属性名，遍历对象的时候，该属性不会出现在for...in,for...of循环中，也不会被Object.keys(),Object.getOwnPropertyNames(),JSON.stringify()返回

- 使用一个叫Object.getOwnPropertySymbols()的方法，可以获取指定对象的所有Symbol属性名，该方法返回一个数组，成员是当前对象的所有用作属性名的Symbol的值

```
const obj = {};
let a = Symbol('a');
let b = Symbol('b');
obj[a] = 'hello';
obj[b] = 'world';
const objectSymbols = Object.getOwnPropertySymbols(obj);

objectSymbols
// [Symbol('a'),Symbol('b')]
```

- 使用for...in循环和Object.getOwnpropertyNames方法都得不到Symbol键名，需要使用Object.getOwnPropertySymbols()方法

```
const obj = {};
const foo = Symbol('foo');
obj[foo] = 'bar';

for(let i in obj){
    console.log(i);    // []
}

Object.getOwnPropertyNames(obj); // []
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
```

- Reflect.ownKeys()方法可以返回所有类型的键名，包括常规键名和Symbol键名

```
let object = {
    [Symbol('my_key')]: 1,
    enum: 2,
    nonEnum: 3
}
Reflect.ownKeys(obj);
// ['enum','nonEnum', Symbol(my_key)]
```

## Symbol.for() 和 Symbol.keyfor()

