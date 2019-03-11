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

> 对于需要4个字节来存储的字符，js无法正确的处理，字符长度会误判为2，而且charAt()方法无法获取整个字符，charCodeAt方法会返回前两个字节和后两个字节的值
```
var s = "𠮷";

s.length // 2
s.charAt(0) // ''
s.charAt(1) // ''
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271
```

### codePointAt()方法可以正确处理4个字节存储的字符，返回一个字符的码点

+ codePointAt方法的参数，是字符在字符串中的位置（从0开始）
+ 对于占用4个字节的字符，codePointAt方法在第一个位置上能识别整个字符，第二个位置会识别字符的后两个字节
+ 对于两个字节存储的字符，返回的结果和charCodeAt方法相同
```
var s1 = '𠮷a';
console.log(s1.length);
console.log(s1.codePointAt(0));
console.log(s1.codePointAt(1));
console.log(s1.codePointAt(2));
// 3
// 134071
// 57271
// 97
```
+ 可以用来判断一个字符是两个字节组成还是四个字节组成的。
```
function is32bit(c){
    return c.codePointAt(0) > 0xffff;
}
console.log(is32bit('𠮷'));//true
console.log(is32bit('a'));//false
```

## String.fromCodePoint()

+ es5提供了方法string.fromCharCode方法，用于从码点返回对应的字符，但是这个方法不能识别(unicode编号大于0xffff)
+ es6提供了String.fromCodePoint方法，弥补了这个问题。
+ 如果String.fromCodePoint方法有多个参数，则它们会被合并成为一个字符串返回

## 字符串的遍历器接口
+ es6为字符串提供了遍历器接口，使的字符串可以被for...of循环遍历
+ 这个遍历器的特点是，可以识别大于0xffff的码点，传统的for循环无法识别