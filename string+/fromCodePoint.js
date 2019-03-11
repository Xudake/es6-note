//es5的方法formCharCode()
console.log(String.fromCharCode(0x20bb7));//第一位2被舍弃了，结果是错的
console.log(String.fromCharCode(0x0bb7));
// ஷ
// ஷ

console.log(String.fromCodePoint(0x20bb7)); //𠮷

console.log(String.fromCodePoint(0x78,0x20bb7,0x79)) //x𠮷y

