/**
 * 判断是否以某个字符串结束
 * @param str 总字符串
 * @param s 某个字符串
 * @returns {boolean}
 */
function endWith(str, s) {
    let d = str.length - s.length;
    return (d >= 0 && str.lastIndexOf(s) == d);
}
let str = "sdasd sdx adsad asd sa";
console.log(endWith(str, "a"));