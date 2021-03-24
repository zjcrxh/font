/**
 * JS允许输⼊⼩数位的数字
 * @param curObj
 */
function clearNoFloat(curObj) {
    curObj.value = curObj.value.replace(/[^\d.]/g, ""); //
    //清除“数字”和“.”以外的字符
    curObj.value = curObj.value.replace(/^\./g, ""); //验证
    //第⼀个字符是数字⽽不是.
    curObj.value = curObj.value.replace(/\.{2,}/g, "."); //
    //只保留第⼀个. 清除多余的.
    curObj.value =
        curObj.value.replace(".", "$#$").replace(/\./g, "").replace(
            "$#$", ".");
}
<input type="text" onkeyup="clearNoFloat(this)"> 
</input>//JS允许输⼊⼩数，只能是数字，如果是其他字符，则会替换掉