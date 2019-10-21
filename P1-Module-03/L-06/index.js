const isArray = arr => Object.prototype.toString.call(arr).includes("Array")
var a = '[a,b,c,d]'
var b = [1, 2, 3, 4]
console.log(isArray(a), isArray(b)) // false true

const multiplyFactor = (arr, factor) => arr.map(item => item * factor) // es6

function multiplyFactorByES5(arr, factor) {
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

console.log(multiplyFactor(b, 2)) // [ 2, 4, 6, 8, 10 ]

console.log(multiplyFactorByES5(b, 2)) // [ 2, 4, 6, 8, 10 ]

const splitArray = (arr, type) => {
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
const type = 2;
console.log(splitArray(colors, type))  // Red+Green+White+Black


a = [5, 1, 8, 10, 4];
// TODO: callback
const sortArray = (arr, _type) => {
    if (isArray(arr)) {
        return arr.sort()
    }
}
console.log(sortArray(a, 'asc'))