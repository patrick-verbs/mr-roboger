// Business logic
/////////////////
function countToThis(number) {
  let listedCount = []
  if (number < 0 || typeof number != "number") {
    return -1
  } else {
    let counter = 0
    let integer = Math.floor(number)
    while (counter < integer) {
      listedCount.push(counter)
      counter ++
    }
    listedCount.push(integer)
  }
  return listedCount
}

function replaceNumbersIfDigit(numberArray, targetDigit, newValue) {
  if (Array.isArray(numberArray) === false) {
    return -1
  } else {
    let revisedArray = numberArray
    for (let i = 0; i < numberArray.length; i++) {
      let reducedNum = numberArray[i]
      while (reducedNum > 0) {
        const oneTenthOfNum = (reducedNum / 10).toFixed(1)// toFixed() prevents floating point errors on decimals
        const thisDigit = 10 * ( oneTenthOfNum - Math.floor(oneTenthOfNum) ).toFixed(1)
        if (thisDigit === parseInt(targetDigit)) {
          revisedArray[i] = newValue
          break// No need to finish the while-loop once a target digit is found
        }
        reducedNum = Math.floor(oneTenthOfNum)
      }
    }
    return numberArray
  }
}

// User-interface logic
///////////////////////
$(document).ready(function() {

  $("form#formOne").submit(function(event) {
    // Prevent the form data from being pushed to a server,
    // since all data is being handled here in JS/CSS/HTML:
    event.preventDefault()

    let countTo
    const surveyInputPairs = []

    // Set the number the user wants Mr. Roboger to count to
    countTo = parseInt($("input#count").val())

    // Scrape the DOM for the *single digits* the user wants to target
    $("input.digitInput").each(function(i) {
      surveyInputPairs.push([$(this).val(), "test"])
    })

    // Scrape the DOM for the *new values* the user wants their targeted numbers to be replaced with
    $("input.valueInput").each(function(i) {
      surveyInputPairs[i][1] = [$(this).val()]
    })

    // Pass form inputs (as an array) to a business-logic function:
    const countingSequence = countToThis(countTo)
    let revisedSequence = countingSequence

    let targetDigit
    let newValue

    for (let i = 0; i < surveyInputPairs.length; i++) {
      targetDigit = surveyInputPairs[i][0]
      newValue = surveyInputPairs[i][1]
      revisedSequence = replaceNumbersIfDigit(revisedSequence, targetDigit, newValue)
    }
  


    // Reveal the count
    $("#roboCounter").addClass("showMe")
    $("#roboCounter").removeClass("hideMe")
    for (let i = 0; i < revisedSequence.length + 4; i++) {
      const pCount = "#count" + i
      $("#roboCounter").prepend("<p id=\"count" + i + "\"></p>")
      if (i < revisedSequence.length) {
        $(pCount).append(revisedSequence[i])
      } else {
        $(pCount).append("<br>")
      }
      $(pCount).hide().delay(750 * (i + 1)).fadeIn()
      $(pCount).delay(3000).fadeOut()
    }
  })
})