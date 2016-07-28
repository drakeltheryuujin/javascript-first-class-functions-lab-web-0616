function countdown(callback) {
  window.setTimeout(callback, 200)
}

function createMultiplier(multiplier){
  var num = multiplier
  return multiplierValue(num)
}

//helper function
function multiplierValue(num) {
  var multiplier = num
  return (num) => {
    return num * multiplier
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(multiplier, value) {
  return multiplier * value
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
