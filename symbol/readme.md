# symbol

>表示独一无二的值，第七种数据类型，(前六种分别是：undefined,null,布尔值，string，对象，数值),引入这个，可以解决对象的属性名的冲突
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