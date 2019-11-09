const Ceil = require('./ceil')
const ArrayField = require('./arrayField').ArrayField
const COMMAND = `3 3
0,1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1   
`
/**
 * 3 3 
0,1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1 
 */
const INIT_VALUE = 0


function Maze(command) {
  this.create = _ => {
    if (!this.checkCommandPattern(command)) {
      throw new Error("Incorrect command format")

    }
    const [size, ceils] = command.split('\n')
    this.arrayField = new ArrayField(this.createField(...size.split(' ')))
    this.connectedCeilPair = ceils.split(';').map(
      ceilPair => ceilPair.split(' ').map(
        _ceil => {
          if (!_ceil) {
            return
          }
          const [x, y] = _ceil.split(',')
          if (isNaN(x) || isNaN(y)) {
            throw new Error("Invalid number format")
          }
          return new Ceil.Ceil(x, y)
        }
      )
    )
    this.connect()
  }


  this.connect = _ => {
    for (const ceilPair of this.connectedCeilPair) {
      if (!this.arrayField.connect(...ceilPair)) break
    }

  }

  this.createField = (row, column) => {
    const arr = new Array()
    for (let i = 0; i < 2 * row + 1; i++) {
      arr[i] = new Array()
      for (let j = 0; j < 2 * column + 1; j++) {
        arr[i][j] = INIT_VALUE
      }
    }
    return arr
  }

  this.render = _ => {
    // const callback = (acc, item) => acc + (item === 0 ? '[W] ' : '[R] ')
    const callback = (acc, item) => acc + (item === 0 ? '[#] ' : '[ ] ')
    Array.isArray(this.arrayField.arrayField) ? this.arrayField.arrayField.map(row => {
      console.log(row.reduce(callback, ''))
    }) : null
  }
  this.checkCommandPattern = _command => {
    /**
    * 3 3 
    0,1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1 
    */
    const ceilCommandPattern = /^(\d+\,\d+ \d+,\d+\;)+(\d+\,\d+ \d+,\d+\;?)$/g
    const sizeCommandPattern = /^\d+ \d+$/g
    const [sizeCommand, ceilCommand] = _command.split("\n").map(item => item.trim())
    return sizeCommandPattern.test(sizeCommand) && ceilCommandPattern.test(ceilCommand)

  }
}
module.exports = {
  Maze,
  COMMAND
}