// 过滤敏感词
var re = /中国|上海|徐家汇/g;

var str = '啥好说的反馈哈首付款后中国，三楼的发哈煽风点火拉烧开后徐家汇拉萨的合法双方均按时发货快结了婚上海，水电费黑卡是结核杆菌卡是';

console.log(str.replace(re,'***'));