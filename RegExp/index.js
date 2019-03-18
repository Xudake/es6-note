// 第一个正则表达式

var re = new RegExp('a');//a本身
var re2 = /a/;
var str = 'acsdfsdf';

console.log(str.search(re));
console.log(str.search(re2));
console.log(str.match(re));

console.log('-----------------------')
var re3 = new RegExp('a','i'); //忽略大小写
var re4 = /a/i;
var str2 = 'Asdfsdfdsf';
console.log(str2.search(re3));
console.log(str2.search(re4));


console.log('-----------------------')
// 找第一个出现的数字
var re5 = new RegExp('\\d');
var re6 = /\d/;
var str3 = 'werweqr 323sfaewr';
console.log(str3.search(re5));
console.log(str3.search(re6));

