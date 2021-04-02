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
      decimalShift = 1
      thisDigit = Math.floor(array[i] / decimalShift)
      while (thisDigit > 0) {
        if (thisDigit != 1) {
          Math.floor(array[i] / 10)
        } else {
        array[i] = "Beep!"
        break
        }
      }
    }
    return array
  }
}