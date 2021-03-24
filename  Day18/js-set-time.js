/**
 * JS时间个性化输出功能
 * 1、< 60s, 显示为“刚刚”
 * 2、>= 1min && < 60 min, 显示与当前时间差“XX分钟前”
 * 3、>= 60min && < 1day, 显示与当前时间差“今天 XX:XX”
 * 4、>= 1day && < 1year, 显示⽇期“XX⽉XX⽇ XX:XX”
 * 5、>= 1year, 显示具体⽇期“XXXX年XX⽉XX⽇ XX:XX”
 * @param time
 * @returns {string}
 */
function timeFormat(time) {
    var date = new Date(time),
        curDate = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 10,
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        // 调⽤⽅法：
        // ⼆⼗、JS判断是否为中⽂名
        // JS判断是否为中⽂名
        // 代码如下：
        curYear = curDate.getFullYear(),
        curHour = curDate.getHours(),
        timeStr;
    if (year < curYear) {
        timeStr = year + '年' + month + '⽉' + day + '⽇ ' + hour +
            ':' + minute;
    } else {
        var pastTime = curDate - date,
            pastH = pastTime / 3600000;
        if (pastH > curHour) {
            timeStr = month + '⽉' + day + '⽇ ' + hour + ':' +
                minute;
        } else if (pastH >= 1) {
            timeStr = '今天 ' + hour + ':' + minute + '分';
        } else {
            var pastM = curDate.getMinutes() - minute;
            if (pastM > 1) {
                timeStr = pastM + '分钟前';
            } else {
                timeStr = '刚刚';
            }
        }
    }
    return timeStr;
}
console.log(timeFormat(new Date())); // 例：刚刚