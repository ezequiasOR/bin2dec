let binaryInput = document.querySelector('#binary-input')
let decimalOutput = document.querySelector('#decimal-output')

function convertToBin(e) {
  e.preventDefault()
  let decimalValue = parseInt(String(binaryInput.value), 2)

  // console.log('. >> binaryValue: ', decimalValue)

  decimalOutput.value = decimalValue
}
