const CONNECTABLE_FLAG = 1
const ROAD_FLAG = 1

function ArrayField(arr) {
  this.arrayField = arr || []
  this.X_Bound = arr.length
  this.Y_Bound = (arr[0] || []).length
  if (!this.arrayField.length > 0 && this.X_Bound > 0 && this.Y_Bound > 0) {
    throw new Error("Invalid Array " + arr)
  }
  this.connect = (ceil1, ceil2) => {
    if (this.isConnectable(ceil1, ceil2) === CONNECTABLE_FLAG) {
      ceil1.connectList.push(ceil2)
      ceil2.connectList.push(ceil1)
      const road_x = ceil1.x === ceil2.x ? ceil1.map_x : (Math.max(ceil1.map_x, ceil2.map_x) - 1)
      const road_y = ceil1.y === ceil2.y ? ceil1.map_y : (Math.max(ceil1.map_y, ceil2.map_y) - 1)
      this.arrayField[ceil1.map_x][ceil1.map_y] = ROAD_FLAG
      this.arrayField[ceil2.map_x][ceil2.map_y] = ROAD_FLAG
      this.arrayField[road_x][road_y] = ROAD_FLAG
      return true
    } else {
      if (this.isOutOfRange(ceil1) || this.isOutOfRange(ceil2)) {
        throw new Error("Number Out Of Range", this.isOutOfRange(ceil1) ? ceil1 : ceil2)
      }
      if (this.isConnectable(ceil1, ceil2) > CONNECTABLE_FLAG) {
        throw new Error("Maze format error")
      }
    }

  }

  // 判断两点是否可以连通
  this.isConnectable = (ceil1, ceil2) => Math.abs(ceil1.x - ceil2.x) + Math.abs(ceil1.y - ceil2.y)

  this.isOutOfRange = ceil => !ceil || ceil.x < 0 || ceil.x >= this.X_Bound || ceil.y < 0 || ceil.y >= this.Y_Bound

}

module.exports = {
  ArrayField
}