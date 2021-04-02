function listCountToInput(number) {
  let listedCount = []
  if (number < 0 || typeof number != "number") {
    return -1
  } else {
    counter = 0
    integer = Math.floor(number)
    while (counter < integer) {
      listedCount.push(counter)
      counter ++
    }
    listedCount.push(integer)
    return listedCount
  }
}

function beepWriter(array) {
  if (Array.isArray(array) === false) {
    return -1
  } else {
    for (i = 0; i < array.length; i++) {
      let reducedNum = array[i]
      while (reducedNum > 0) {
        const decimalShift = reducedNum / 10
        const thisDigit = 10 * ( decimalShift - Math.floor(decimalShift) )
        if (thisDigit === 1) {
          array[i] = "Beep!"
          break
        }
        reducedNum = Math.floor(decimalShift)
      }
    }
    return array
  }
}