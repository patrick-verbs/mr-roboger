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
  listedCount = replaceNumbersIfDigit(listedCount, 3, "Won't you be my neighbor?")
  listedCount = replaceNumbersIfDigit(listedCount, 2, "Boop!")
  listedCount = replaceNumbersIfDigit(listedCount, 1, "Beep!")
  return listedCount
}

function replaceNumbersIfDigit(numberArray, targetDigit, newValue) {
  alert(targetDigit)
  if (Array.isArray(numberArray) === false) {
    return -1
  } else {
    for (i = 0; i < numberArray.length; i++) {
      let reducedNum = numberArray[i]
      while (reducedNum > 0) {
        const oneTenthOfNum = (reducedNum / 10).toFixed(1)// toFixed() prevents floating point errors on decimals
        const thisDigit = 10 * ( oneTenthOfNum - Math.floor(oneTenthOfNum) ).toFixed(1)
        if (thisDigit === targetDigit) {
          numberArray[i] = newValue
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
    let surveyInputPairs = []

    // Set the number the user wants Mr. Roboger to count to
    countTo = parseInt($(`input#count`).val())

    // Scrape the DOM for the *single digits* the user wants to target
    $("input.digitInput").each(function(i) {
      surveyInputPairs.push([$(this).val(), ""])
    })

    // Scrape the DOM for the *new values* the user wants their targeted numbers to be replaced with
    $("input.valueInput").each(function(i) {
      surveyInputPairs[i][1] = [$(this).val()]
    })

    // Pass form inputs (as an array) to a business-logic function:
    alert("Mr. Roboger will count to " + countTo)
    const surveyOutputs = countToThis(countTo)


    // Reveal the count
    // $("section#survey-form").removeClass()
    // $("section#survey-form").addClass("hide-me")
    $("#roboCounter").addClass("show-me")
    $("#roboCounter").removeClass("hide-me")
    $("#roboCounter").append("<p>" + surveyOutputs + "</p>")
  })
})