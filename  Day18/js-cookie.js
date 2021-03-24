/**
 * 设置cooike值
 * setCookike（键，值，保存时长（毫秒））
 * @param name cookie对应名字
 * @param value 该cookie对应的值
 * @param hours
 */
function setCookie(name, value, expire) {
    let date = new Date()
    date.setTime(Number(date) + expire)
    document.cookie = name + "=" + escape(value) + ((expire == null) ? "" : ";expires=" + date.toGMTString())
}

/**
 * js获取Cookie
 * @param name cookie对应名字
 * @returns {string}
 */
function getCookie(name) {
    if (document.cookie.length > 0) {
        start = document.cookie.indexOf(name + "=")
        if (start != -1) {
            start = start + name.length + 1
            end = document.cookie.indexOf(";", start)
            if (end == -1) end = document.cookie.length
            return decodeURI(document.cookie.substring(start, end))
        }
    }
    return ""
}