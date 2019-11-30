/**字符串逆序输出 */

function reverseString(message) {
    return Array.from(new String(message)).reverse().join("")
}

console.log(reverseString("hello"))  // olleh

function isLoopString(str) {
    return str === reverseString(str)
}


console.log(isLoopString("hello"), isLoopString("abcba")) // false true

function alphabetSort(message) {
    return Array.from(new String(message)).sort().join("")
}

console.log(alphabetSort("hello"))

const reg = /[\s,\.;]/g

function countWords(message) {
    const target = []
    new String(message).split(reg).forEach(item => {
        if (item) {
            target.push(item)
        }
    })
    return target

}

console.log(countWords('Good morning, I love JavaScript.'))  // 5
