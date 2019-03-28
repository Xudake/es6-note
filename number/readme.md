# 数值的拓展

### 二进制和八进制的表示法

> es6提供了二进制和八进制新的写法，分别用前缀0b(0B)和0o(0O)表示

### Number.isFinite(),Number.isNaN()

+ Number.isFinite() 一个数值是否有限
> 参数不是数值一律返回false

+ Number.isNaN() 一个值是否为NaN
> 参数不是数值一律返回false

+ 传统的isFinite和isNaN，会先调用Number()将非数值转成数值

### Number.parseInt() Number.parseFloat
> 将全局方法移植到Number对象上，行为不变，目的减少全局方法，使语言逐步模块化

### Number.isInteger()
> 判断一个数值是否为整数

### Number.EPSILON 
> js能够表示的最小精度，误差如果小于这个值，就认为不存在误差。

### 安全整数 Number.isSafeInteger()
> 整数范围在-2^53到2^53之间

### 新增指数运算符 **
> **运算符的特点是右结合
