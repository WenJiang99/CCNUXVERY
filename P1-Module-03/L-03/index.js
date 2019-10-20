const getRealType = element => Object.prototype.toString.call(element).replace(/[\[\] ]|(object)/g, '')

console.log(getRealType([1, 2, 3])) // Array
console.log(getRealType("sss")) // String
console.log(getRealType({})) // Object
console.log(getRealType(null))  // Null
console.log(getRealType(undefined))  //  Undefined
console.log(getRealType(NaN))  // Number

