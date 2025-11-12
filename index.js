const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const lenParagEl = document.getElementById("len-el")
const volParagEl = document.getElementById("volume-el")
const massParagEl = document.getElementById("mass-el")

inputBtn.addEventListener("click", function() {
  const inputValue = Number(inputEl.value)
  const lenResult = len(inputValue)
  const volResult = volume(inputValue)
  const massResult = mass(inputValue)
  render(inputValue, lenResult, volResult, massResult)
  inputEl.value = ""
})

function render(inputValue, lenResult, volResult, massResult) {
  lenParagEl.textContent = 
    `${inputValue} meters = ${lenResult.totalMeter} feet | ` +
    `${inputValue} feet = ${lenResult.totalFeet} meters`

  volParagEl.textContent = 
    `${inputValue} liters = ${volResult.totalGallons} gallons | ` +
    `${inputValue} gallons = ${volResult.totalLiters} liters`

    massParagEl.textContent = 
    `${inputValue} kilos = ${massResult.totalPounds} pounds | ` +
    `${inputValue} pounds = ${massResult.totalKilos} kilos`
}

function len(inputValue) {
  const totalMeter = Number(inputValue) * 3.281
  const totalFeet = Number(inputValue) / 3.281
  
  return {
    totalMeter: totalMeter.toFixed(3),
    totalFeet: totalFeet.toFixed(3)
  }
}

function volume(inputValue) {
  const totalGallons = Number(inputValue) * 0.264
  const totalLiters = Number(inputValue) / 0.264
  
  return {
    totalGallons: totalGallons.toFixed(3),
    totalLiters: totalLiters.toFixed(3)
  }
}

function mass(inputValue) {
  const totalPounds = Number(inputValue) * 2.204
  const totalKilos = Number(inputValue) / 2.204
  
  return {
    totalPounds: totalPounds.toFixed(3),
    totalKilos: totalKilos.toFixed(3)
  }
}

