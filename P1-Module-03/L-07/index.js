/**
 * 
 * @param {number} num 要进行小数点控制的数字
 * @param {int32} n 保留的小数点的位数
 */

const numberFormat = (num, n) => {
    const _num = num + '' // 将num转换成字符串
    n = Math.floor(n) > 0 ? Math.floor(n) : 0 // 小数数目应该是正整数
    const dotIndex = _num.indexOf('.')  // 判断num是否为整数
    if (dotIndex > 0) {
        const floatLength = _num.split('.')[1].length // 判断num的小数点位数与要保留的位数大小关系
        return floatLength > n ? Math.round(num * Math.pow(10, n)) / Math.pow(10, n) : _num + "".padEnd(n - floatLength, '0')
    } else {
        return _num + ".".padEnd(n + 1, '0')
    }

}

let num = 1.2266662
console.log(numberFormat(num, 3), numberFormat(num, 5), numberFormat(num, 0)) // 1.227, 1.22667, 1

let num2 = 100.173
console.log(numberFormat(num2, 5), numberFormat(num2, 1)) // 100.17300, 100.2

const num3 = 100
console.log(numberFormat(num3, 3)) // 100.000




const numberFormatByPrecision = (num, n) => num.toPrecision(n + String(num).split('.').shift().length)


num = 1.2266662
console.log(numberFormatByPrecision(num, 3), numberFormatByPrecision(num, 5), numberFormatByPrecision(num, 0)) // 1.227, 1.22667, 1
num2 = 100.173
console.log(numberFormatByPrecision(num2, 5), numberFormatByPrecision(num2, 1)) // 100.17300, 100.2



console.log(Math.round(2.3), Math.round(55.5)) // 2 , 56

const num4 = 1.2664
const num5 = 100
console.log(num4.toPrecision(2), num4.toPrecision(3), num4.toPrecision(7)) // 1.3 , 1.27,  1.266400
console.log(num5.toPrecision(5)) // 100.00



const num6 = 1.22
const num7 = -1.22
console.log(Math.ceil(num6), Math.floor(num6), ~~num6) // 2, 1 , 1
console.log(Math.ceil(num7), Math.floor(num7), ~~num7) // -1,  -2, -1