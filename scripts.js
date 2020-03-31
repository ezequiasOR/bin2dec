const input = '00111100'

let bin = parseInt(input)
let dec = 0

for (let i = 0; bin > 0; i++) {
  dec = dec + 2**i * (bin%10)
  bin = Math.floor(bin/10)
  console.log(i + '. >> dec: ', dec)
  console.log(i + '. >> bin: ', bin)
}

console.log(dec)
