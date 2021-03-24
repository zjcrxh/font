/**
 * JS验证密码，必须是字⺟和数字结合
 * @param password 密码
 * @returns {boolean} 返回true或false
 */
function checkPasswordValidate(password) {
    return /^(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z] {6,20}$/.test(password);
}
//调⽤⽅法：
console.log(checkPasswordValidate("dasdas1132156"))
//true
console.log(checkPasswordValidate("dsadasdas"))
//false