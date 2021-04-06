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

  // Spriteling.js
  let robot = new Spriteling({
    url: 'img/128px-Green_Robot_by_GrafxKid.png',
    bottom: 86,
    left: 360,
    cols: 7,
    rows: 4
  }, '#robot', true)

  robot.addScript('sleep', [
    {sprite: 20, delay: 1000}
  ])

  robot.addScript('wakeUp', [
    {sprite: 20, delay: 1000},
    {sprite: 26, delay: 600},
    {sprite: 20, delay: 400},
    {sprite: 19, delay: 400},
    {sprite: 20, delay: 400},
    {sprite: 19, delay: 200},
    {sprite: 20, delay: 200},
    {sprite: 7, delay: 400},
    {sprite: 8, delay: 400},
    {sprite: 9, delay: 400},
    {sprite: 15, delay: 1600},
    {sprite: 16, delay: 3000},
    {sprite: 15, delay: 200},
  ])

  robot.addScript('idle', [
    {sprite: 1, delay: 250},
    {sprite: 2, delay: 500},
    {sprite: 3, delay: 250}
  ])

  robot.play('sleep', {
    run: -1,
    delay: 100
  })

  $("form#formOne").submit(function(event) {
    event.preventDefault()

    robot.play('sleep', {
      run: 1,
      delay: 100,
      onStop: function () {
        robot.play('wakeUp', {
          run: 1,
          onStop: function () {
            robot.play('idle', {
              run: -1
            })
          }
        })
      }
    })

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
    const roboCounter = $("#roboCounter")
    roboCounter.addClass("showMe")
    roboCounter.removeClass("hideMe")
    let i = 0
    while (i < revisedSequence.length + 4) {
      const pCount = "#count" + i
      roboCounter.prepend("<p id=\"count" + i + "\"></p>")
      if (i < revisedSequence.length) {
        $(pCount).append(revisedSequence[i])
        i++
      } else {
        $(pCount).append("<br>")
        i++
      }// 8000 ms delay times well with the "wakeUp" animation
      $(pCount).hide().delay( 8000 + (750 * (i + 1)) ).fadeIn()
      $(pCount).delay(3000).fadeOut()
    }
  })
})