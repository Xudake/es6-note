# 字符串的拓展

## 字符的Unicode表示法

### 介绍

> js采用\uxxxx的形式表示一个字符，其中xxxx表示字符的Unicode码点，但是，这种表示只限于码点在\u0000~\uffff之间的支付，超出这部分只能用两个双字节的形式表示

### es6对于码点超出的字符，用大括号括起来，就可以被理解

```
console.log('\ud842\udfb7')
//𠮷

console.log('\u20bb7')
//₻7

console.log('\u{20bb7}')
//𠮷
```

### 六种方法表示一个字符

```
// 六种表示字符的方法
console.log('z' === 'z');
console.log('\z' === 'z');
console.log('\172' === 'z');
console.log('\x7A' === 'z');
console.log('\u007A' === 'z');
console.log('\u{7A}' === 'z');
```

## codePointAt方法
