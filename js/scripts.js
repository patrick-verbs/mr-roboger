// Business logic
/////////////////
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
  listedCount = rewriteNumberWithDigit(listedCount, 3, "Won't you be my neighbor?")
  listedCount = rewriteNumberWithDigit(listedCount, 2, "Boop!")
  listedCount = rewriteNumberWithDigit(listedCount, 1, "Beep!")
  return listedCount
}

function rewriteNumberWithDigit(array, targetDigit, newValue) {
  if (Array.isArray(array) === false) {
    return -1
  } else {
    for (i = 0; i < array.length; i++) {
      let reducedNum = array[i]
      while (reducedNum > 0) {
        const oneTenthOfNum = (reducedNum / 10).toFixed(1)// toFixed() prevents floating point errors on decimals
        const thisDigit = 10 * ( oneTenthOfNum - Math.floor(oneTenthOfNum) ).toFixed(1)
        if (thisDigit === targetDigit) {
          array[i] = newValue
          break// No need to finish the while-loop once a target digit is found
        }
        reducedNum = Math.floor(oneTenthOfNum)
      }
    }
    return array
  }
}

// User-interface logic
///////////////////////
$(document).ready(function() {
  let countTo
  let surveyInputPairs = []

  $("#form1").submit(function(event) {
    // Prevent the form data from being pushed to a server,
    // since all data is being handled here in JS/CSS/HTML:
    event.preventDefault()

    // Set the number the user wants Mr. Roboger to count to
    countTo = $(`input#count`).val()

    // Scrape the DOM for the *single digits* the user wants to target
    $(`input.digitInput`).each(function(index) {
      surveyInputPairs[index][0] = [$(this).val]
    })

    // Scrape the DOM for the *new values* the user wants their targeted numbers to be replaced with
    $(`input.valueInput`).each(function(index) {
      surveyInputPairs[index][1] = [$(this).val]
    })

    // Pass form inputs (as an array) to a business-logic function:
    const surveyOutputs = listCountToInput(countTo)


    // Reveal the count
    // $("section#survey-form").removeClass()
    // $("section#survey-form").addClass("hide-me")
    $("section#survey-results").addClass("show-me")
    $("section#survey-results").removeClass("hide-me")
    
  })
})