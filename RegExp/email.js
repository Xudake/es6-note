// 一串英文数字下换线    @    一串英文数字      .     一串英文

//  \w+                @     [a-z0-9A-Z]+    \.    [a-zA-Z]+

var re = /\w+@[a-z0-9]+\.[a-z]+/i

var re2 = /^\w+@[a-z0-9]+\.[a-z]+/i

var re3 = /^\w+@[a-z0-9]+\.[a-z]+$/i

console.log(re.test('wwfsal@wer.com'));
console.log(re.test('---wwfsal@wer.com'));
console.log(re.test('你好wwfsal@wer.com'));
console.log(re.test('wwfsal@wer.com----'));
console.log('---------------------------')

console.log(re2.test('wwfsal@wer.com'));
console.log(re2.test('---wwfsal@wer.com'));
console.log(re2.test('你好wwfsal@wer.com'));
console.log(re2.test('wwfsal@wer.com----'));
console.log('---------------------------')

console.log(re3.test('---wwfsal@wer.com'));
console.log(re3.test('---wwfsal@wer.com'));
console.log(re3.test('你好wwfsal@wer.com'));
console.log(re3.test('wwfsal@wer.com----'));