# learn es6 note

## let和const

### let

#### 特点

+ 存在块级作用域 只在它所在的块的内部有效
+ 不存在变量提升
+ 暂时性死区(简称：TDZ)
+ 不允许重复声明

#### 块级作用域和函数声明
> 最好不要在块级作用域内使用函数声明，因为不同浏览器对函数的实现方式不同，es6环境类似于let声明，但是有些浏览器声明类似于var，标准不一

### const

#### 特点

+ 一旦声明，常量的值不能改变
+ 声明以后必须初始化
+ 块级作用域
+ 暂时性死区（简称：TDZ）
+ 不允许重复声明
+ 保存值的时候，值不能被改变，保存复杂数据类型时候，其地址不变，里面的内容可以改变
+ Object.freeze()冻结复杂数据类型，值就不能改变啦~ （严格模式下，改变会报错）

#### 冻结对象和对象的属性
```
var constant = (obj)=>{
    Object.freeze(obj);
    // console.log(Object.keys(obj));
    Object.keys(obj).forEach((key,i)=>{
        if(typeof obj[key] == 'object'){
            constant(obj[key]);
        }
    })
    return obj;
}
```

### 声明变量的六种方法
> var function let const class import

### 顶层对象属性
> var 和 function 声明的全局变量，依然是顶层对象的属性;let、const、class声明的全局变量不属于顶层对象的属性