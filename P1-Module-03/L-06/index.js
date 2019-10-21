const isArray = arr => Object.prototype.toString.call(arr).includes("Array")
var a = '[a,b,c,d]'
var b = [1, 2, 3, 4]
console.log(isArray(a), isArray(b)) // false true



const multiplyFactor = (arr, factor) => arr.map(item => item * factor) // es6

function multiplyFactorByES5(arr, factor) { // es5
  if (isArray(arr)) {
    const len = arr.length
    let index = 0
    while (index < len) {
      arr[index++] *= factor
    }
  }
  return arr
}

b = [1, 2, 3, 4, 5]
const factor = 2 // 乘的因子
console.log(multiplyFactor(b, factor)) // [ 2, 4, 6, 8, 10 ]
console.log(multiplyFactorByES5(b, factor)) // [ 2, 4, 6, 8, 10 ]




const joinArray = (arr, type) => {
  if (isArray(arr)) {
    switch (Number(type)) {
      case 1: return arr.join(' ')
      case 2: return arr.join('+')
      case 3: return arr.join(',')
    }
  }
  return arr;
}

var colors = ["Red", "Green", "White", "Black"];
const type = 2;  // 连接符号的类型
console.log(joinArray(colors, type))  // Red+Green+White+Black




a = [5, 1, 8, 10, 4];
const sortArray = (arr, _type) => {
  if (isArray(arr)) {
    return arr.sort(
      (a, b) => _type === 'desc' ? (a > b ? -1 : 1) : (a > b ? 1 : -1)
    )
  } else {
    return arr
  }
}
console.log(sortArray(a, 'desc'))  // [ 10, 8, 5, 4, 1 ]
console.log(sortArray(a, 'asc'))  // [ 1, 4, 5, 8, 10 ]



/**
 * 先对数组进行去重，得到数组中的基本元素集合
 * 然后把数组转换成一个字符串str
 * 对集合进行遍历，用每一个基本元素对str进行切分，得到新数组 b
 * 新数组 b 的长度就是用于切分的基本元素的出现次数
 */
const getMostFrequenceElementBySplit = arr => {
  if (isArray(arr)) {
    const elementList = new Set(arr)
    let currentMaxLength = 0, lastMaxLength = 0;
    let target = null;
    for (const el of elementList) {
      lastMaxLength = currentMaxLength  // 上一个最大值
      currentMaxLength = Math.max(currentMaxLength, arr.join('').split(el).length)  // 当前最大值
      target = currentMaxLength === lastMaxLength ? target : el  // 出现的最多次数的元素是否发生变化

    }
    return target;
  }
}

/**
 * 对数组每一个元素进行循环，使用一个对象count对每一个元素及其出现的次数进行计数
 * 同时把当前出现次数最多的元素在循环时候用target存储起来，避免二次循环
 * 每次循环，比较当前元素和已知的出现最多次的元素的次数进行比较，得到新的target
 */
const getMostFrequenceElementByCount = arr => {
  if (isArray(arr)) {
    const count = {}
    let target = null
    arr.forEach(
      item => {
        count[item] = (!!count[item] ? count[item] + 1 : 1)
        target = (item === target) || !target ? item : (count[item] > count[target] ? item : target)
      }
    )
    return target
  }
}


var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(getMostFrequenceElementBySplit(a))  // a
console.log(getMostFrequenceElementByCount(a)) // a