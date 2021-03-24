/**
 * @desc JS现⾦额转⼤写
 * @param {Number} n
 * @return {String}
 */
function digitUppercase(n) {
    let fraction = ['⻆', '分']
    let digit = [
        '零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'
    ]
    let unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ]
    let head = n < 0 ? '⽋' : ''
    n = Math.abs(n)
    let s = ''
    for (let i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
    }
    s = s || '整'
    n = Math.floor(n)
    for (let i = 0; i < unit[0].length && n > 0; i++) {
        let p = ''
        for (let j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p
            n = Math.floor(n / 10)
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') +
            unit[0][i] + s
    }
    return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整')
}

console.log(digitUppercase(1023456789.56)); // 壹拾亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元伍⻆伍分