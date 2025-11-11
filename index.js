/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const lenParagEl = document.getElementById("len-el")



inputBtn.addEventListener("click", function() {
  const inputValue = Number(inputEl.value)
  const lenResult = len(inputValue)

  console.log(lenResult.totalMeter)
  console.log(lenResult.totalFeet)

  render(inputValue, lenResult)

  inputEl.value = ""
})

function len(inputValue) {
  const totalMeter = Number(inputValue) * 3.281
  const totalFeet = Number(inputValue) / 3.281
  
  return {
    totalMeter: totalMeter.toFixed(3),
    totalFeet: totalFeet.toFixed(3)
  }
}

function render(inputValue, lenResult) {
  lenParagEl.textContent = 
    `${inputValue} meters = ${lenResult.totalMeter} feet | ` +
    `${inputValue} feet = ${lenResult.totalFeet} meters`
}

