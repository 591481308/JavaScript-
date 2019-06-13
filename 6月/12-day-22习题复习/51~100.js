//正则表达式
/* 语法：
var 变量 = new RegExp("正则表达式","匹配模式");
使用typeof检查正则对象，会返回object
var reg = new RegExp("a"); 这个正则表达式可以来检查一个字符串中是否含有a
在构造函数中可以传递一个匹配模式作为第二个参数，
    可以是 
        i 忽略大小写 
            g 全局匹配模式 
*/


/*  正则表达式的方法：
test()
    - 使用这个方法可以用来检查一个字符串是否符合正则表达式的规则，
    如果符合则返回true，否则返回false
*/

var reg = new RegExp("ab", "i");

var str = "a";

var result = reg.test(str);
console.log(result);
console.log(reg.test("Ac"));