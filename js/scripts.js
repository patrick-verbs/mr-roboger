function listCountToInput(number) {
  let listedCount = []
  if (number < 0 || typeof number != "number") {
    return -1
  } else {
    listedCount.push(number)
    return listedCount
  }
}