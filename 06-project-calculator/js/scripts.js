class Calculator {
  constructor() {
    this.upperValue = document.querySelector('#upper-number')
    this.resultValue = document.querySelector('#result-number')
    this.reset = 0
  }

  clearValues() {
    this.upperValue.textContent = '0'
    this.resultValue.textContent = '0'
  }

  isLastDigitASymbol(input, upperValue, isNumber) {
    if(!isNumber(input) && !isNumber(upperValue[upperValue.length - 1])) {
      return true // se o input é um símbolo e o último dígito foi um símbolo
    } else {
      return false
    }
  }

  btnPress() {
    let input = this.textContent
    let upperValue = calculator.upperValue.textContent

    // verify if input is a number
    const isNumber = (item) => !isNaN(item)

    // active clear display method
    if(input === 'AC') {
      calculator.clearValues()
    } else {
      // verify if need to add or not
      if (calculator.isLastDigitASymbol(input, upperValue, isNumber)) {
        return false // isLastDigitASymbol() retorna true, então aborta a função btnPress
      }

      // add spaces to operators
      if(!isNumber(input)) {
        input = ` ${input} `
      }

      // add input to display
      if(upperValue === '0') {
        calculator.upperValue.textContent = input
      } else {
        calculator.upperValue.textContent += input
      }  
    }
  }
}

// start object
const calculator = new Calculator()

// start buttons
const buttons = document.querySelectorAll('.btn')

// map all buttons
for (let button of buttons) {
  button.addEventListener('click', calculator.btnPress)
}
