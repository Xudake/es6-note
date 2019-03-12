console.log(`in js \n is a line-feed`);

console.log("hahahah\n eeeee")

console.log(
`in js this is
not legal.`
)

console.log(
`string text line 1
string text line 2`
)

//字符串中嵌入变量
let name = 'bob';
let time = 'today';
let str = `hello ${name},how are you ${time}?`
console.log(str);

// 模板字符串中使用反引号~ 需要转义
let str2 = `\`YO\` world`;
console.log(str2);
var html2 = `
<ul>
    <li>first</li>
    <li>second</li>
    <li>third</li>
</ul>
`.trim();
console.log(html2);

var html = `
<ul>
    <li>first</li>
    <li>second</li>
    <li>third</li>
</ul>
`
console.log(html);

let x = 1, y = 2;
console.log(`${x} + ${y} = ${x+y}`);
console.log(`${x} + ${y*2} = ${x+y*2}`);

let obj = {x:1,y:2};
console.log(`${obj.x + obj.y}`)
console.log(`${obj}`);

function fn(){
    return 'hello world';
}
console.log(`${fn()}`)

// let msg = `hello ${price}`; //ReferenceError: price is not defined

console.log(`hello ${'world ya'}`);

let temp = addrs => `
    <table>
        ${addrs.map(addr=>`
        <tr><td>${addr.first}</td></tr>
        <tr><td>${addr.last}</td></tr>
        `).join('')}
    </table>
`

const data = [
    {first: 'janes',last: 'bond'},
    {first: 'xu',last: 'ke'}
]

console.log(temp(data));

//引用模板字符串本身，在需要时执行