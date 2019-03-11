var s = '𠮷';
console.log(s.length);
console.log(s.charAt(0));
console.log(s.charAt(1));
console.log(s.charCodeAt(0));
console.log(s.charCodeAt(1));
// 2
// �
// �
// 55362
// 57271
console.log('----------------------');


var s1 = '𠮷a';
console.log(s1.length);
console.log(s1.codePointAt(0));
console.log(s1.codePointAt(1));
console.log(s1.codePointAt(2));
// 3
// 134071
// 57271
// 97
console.log('----------------------');

// 16进制
var s2 = '𠮷a';
console.log(s2.codePointAt(0).toString(16));
console.log(s2.codePointAt(2).toString(16));
// 20bb7
// 61
console.log('----------------------');

let s3 = '𠮷a';
for(let ch of s3){
    console.log(ch);
    console.log(ch.codePointAt(0).toString(16));
}
console.log('----------------------');

// 测试一个字符是由两个字节还是由四个字节组成的方法
function is32bit(c){
    return c.codePointAt(0) > 0xffff;
}
console.log(is32bit('𠮷'));
console.log(is32bit('a'));