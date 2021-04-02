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
  }
  listedCount = rewriteNumberWithDigit(listedCount)
  return listedCount
}

function rewriteNumberWithDigit(array) {
  if (Array.isArray(array) === false) {
    return -1
  } else {
    for (i = 0; i < array.length; i++) {
      let reducedNum = array[i]
      while (reducedNum > 0) {
        const oneTenthOfNum = (reducedNum / 10).toFixed(1)// toFixed() prevents floating point errors on decimals
        const thisDigit = 10 * ( oneTenthOfNum - Math.floor(oneTenthOfNum) ).toFixed(1)
        if (thisDigit === 1) {
          array[i] = "Beep!"
          break// No need to finish while-loop once a "1" is found
        }
        reducedNum = Math.floor(oneTenthOfNum)
      }
    }
    return array
  }
}