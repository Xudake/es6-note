var reg = /[a-z]\d+([a-z])?/;
var text = 'ff12wer3123';

reg.test(text);

console.log(RegExp.input);
console.log(RegExp.lastMatch);
console.log(RegExp.lastParen);
console.log(RegExp.leftContext);
console.log(RegExp.rightContext);
console.log(RegExp.multiline);