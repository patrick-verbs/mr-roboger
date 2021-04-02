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
  return array
}