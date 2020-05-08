# module的语法

> javascript 一直没有模块体系，无法将大型程序拆分成互相依赖的小文件，再用简单的方法拼接起来。es6之前，主要有commonjs和AMD两种，前者用于服务器，后者用于浏览器。es6实现了模块的功能，es6模块的设计思想

* commonjs方式加载模块,生成一个对象，然后在这个对象上面读取对应的个方法
```
// CommonJS模块
let { stat, exists, readFile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;
```

* es6模块不是对象，而是通过export命令显式的指定输出的代码，再通过import命令输入
```
// ES6模块
import { stat, exists, readFile } from 'fs';

// 只从fs模块中加载三个方法，其他的不加载，效率高
```

* 严格模式

> es6模块自动采用严格模式，不管有没有在头部加"use strict"

* es6模块中，顶层this指向undefined，即不应该在顶层对象中使用this

* 模块的功能主要有两个命令构成，export和import，export用于规定模块对外接口，import命令用于输入其他模块提供的功能。

#### export对象

> 一个模块就是一个独立的文件，该文件的所有变量，外部无法获取，如果希望外部可以获取模块内部的某个变量，就必须使用export关键字输出该变量。
```
// 写法1
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;

// 写法2 （建议这么写，因为这样可以在文件尾部，一下看清，输出了哪些变量）
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export {firstName, lastName, year};

//export输出时，可以使用as关键字重命名
function v1(){...}
function v2(){...}
export {
    v1 as streamV1,
    v2 as streamV2,
    v2 as streamV2Again
}
```

* export是对外接口，必须与模块内部的变量建立一一对应的关系
```
//错误的写法
export 1; //error

var m = 1;
export m; //error

//正确的写法
// 写法1
export var m = 1;

// 写法2
var m = 1;
export {m}

// 写法3
var n = 1;
export {n as m};

```