/**
 * JS限制只能是整数，不能是⼩数
 * @param curObj
 */
function clearNoInt(curObj) {
    curObj.value = curObj.value.replace(/[^\d]/g, ""); //清 除“数字”和“.”以外的字符
} < input type = "text"onkeyup = "clearNoInt(this)" > //⽂本框输⼊
//⾮数字会被清除替换