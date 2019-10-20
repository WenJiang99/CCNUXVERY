const convertToUpperCase = str => String(str).toUpperCase()
var name = 'hello'
console.log(convertToUpperCase(name)) // HELLO


const convertFistLetter = sentence => String(sentence).split(' ').map(
    word => word.length > 0 && word[0].toUpperCase() + word.substring(1)
).join(" ")
var sentence = "good afternoon , mr mike"
console.log(convertFistLetter(sentence))  // Good Afternoon , Mr Mike



const getMoney = str => String(str).match(/\d+/)[0]  // 可以对任意的字符串进行提取，提取出第1组数字

const getMoneyByIndex = str => String(str).substring(1) // 只能针对给定的形式的字符串进行提取

var money = "￥20"
console.log(getMoney(money))  // 20
console.log(getMoneyByIndex(money)) // 20