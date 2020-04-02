let binaryInput = document.querySelector('#binary-input')
let decimalOutput = document.querySelector('#decimal-output')

function inputValidation(binary) {
  for (value of binary.split('')) {
    if (value !== '0' && value !== '1') return true
  }
  return false
}

function inputIsEmpty(binary) {
  if (binary === '') return true
  return false
}

function convertToBin(e) {
  e.preventDefault()

  if (inputValidation(binaryInput.value) || inputIsEmpty(binaryInput.value))
    return alert('Please, enter a binary number')

  let decimalValue = parseInt(String(binaryInput.value), 2)

  decimalOutput.value = decimalValue
}
