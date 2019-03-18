var str = 'abc aaa resa';
console.log(str.replace('a',0));

var re = /a/;
console.log(str.replace(re,0));

var re2 = /a/g;
console.log(str.replace(re2, 0));
