console.log(0b111110111===503);//true
console.log(0o767 === 503);//true

console.log(0o11===011); //true

{
    'use strict'
    // console.log(0o11===011) //SyntaxError: Octal literals are not allowed in strict mode.
}

console.log(Number('0b111'));
console.log(Number('0o10'));