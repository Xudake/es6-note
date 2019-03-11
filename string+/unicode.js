

/*  
如果直接在\u后面跟上超过0xFFFF的数值（比如\u20BB7），
JavaScript 会理解成\u20BB+7。由于\u20BB是一个不可打印字符，
所以只会显示一个空格，后面跟着一个7。
*/
console.log('\ud842\udfb7');
console.log('\u20bb7');
console.log('\u{20bb7}');
console.log('-----------------------');


// ABC
console.log('\u0041\u0042\u0043');
console.log('\u{41}\u{42}\u{43}');
console.log('-----------------------');

// 变量中的字符用unicode表示
let hello = 123;
console.log(hello);
console.log(hell\u006f);
console.log(hell\u{6f});
console.log('-----------------------');

// 超出范围的字符的不同表示
console.log('\uD83D\uDE80'); //🚀
console.log('🚀' === '\uD83D\uDE80');
console.log('\u{1F680}' === '\uD83D\uDE80');
console.log('-----------------------');



// 六种表示字符的方法
console.log('z' === 'z');
console.log('\z' === 'z');
console.log('\172' === 'z');
console.log('\x7A' === 'z');
console.log('\u007A' === 'z');
console.log('\u{7A}' === 'z');
