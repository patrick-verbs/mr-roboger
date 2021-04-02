function listCountToInput(number) {
  let listedCount = []
  if (number < 0 || typeof number != "number") {
    return -1
  } else {
    numberAsInteger = Math.floor(number)
    listedCount.push(numberAsInteger)
    return listedCount
  }
}