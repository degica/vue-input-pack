export default {
  zeroFill(number) {
    let width = 2
    width -= number.toString().length
    if ( width > 0 ) {
      return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number
    }
    return number + ""
  },
  range(x, y) {
    let range = []
    for (var i = x; i <= y; i++) {range.push(i)}
    return range
  }
}
