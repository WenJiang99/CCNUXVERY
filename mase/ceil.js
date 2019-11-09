function Ceil(x, y) {
    this.x = +x
    this.y = +y
    this.connectList = []
    this.mapToArray = _ => {
        this.map_x = 2 * this.x + 1
        this.map_y = 2 * this.y + 1
    }
    this.mapToArray()
}

module.exports = {
    Ceil
}