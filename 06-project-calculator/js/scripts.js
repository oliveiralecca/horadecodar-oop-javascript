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

  isLastDigitASymbol(input, upperValue, regex) {
    if(!regex.test(input) && !regex.test(upperValue[upperValue.length - 1])) {
      return true // se o input é um símbolo e o último dígito foi um símbolo
    } else {
      return false
    }
  }

  refreshValues(total) {
    this.upperValue.textContent = total
    this.resultValue.textContent = total
  }

  sum(n1, n2) {
    return Number(n1) + Number(n2)
  }

  sub(n1, n2) {
    return Number(n1) - Number(n2)
  }

  mult(n1, n2) {
    return Number(n1) * Number(n2)
  }

  div(n1, n2) {
    return Number(n1) / Number(n2)
  }

  result() {
    // parse input string to array
    let upperValueArray = this.upperValue.textContent.split(' ')

    // final result
    let result = 0

    // operations
    for(let i = 0; i <= upperValueArray.length; i++) {
      let operation = 0
      let currentItem = upperValueArray[i]

      if(currentItem === 'x') {
        result = calculator.mult(upperValueArray[i - 1], upperValueArray[i + 1])
        operation = 1
      } else if(currentItem === '/') {
        result = calculator.div(upperValueArray[i - 1], upperValueArray[i + 1])
        operation = 1
      } else if(!upperValueArray.includes('x') && !upperValueArray.includes('/')) {
        if(currentItem === '+') {
          result = calculator.sum(upperValueArray[i - 1], upperValueArray[i + 1])
          operation = 1
        } else if(currentItem === '-') {
          result = calculator.sub(upperValueArray[i - 1], upperValueArray[i + 1])
          operation = 1
        }
      }
    

      // update array values to next operation
      if(operation) {
        // previous value is operation result
        upperValueArray[i - 1] = result

        // remove already used values
        upperValueArray.splice(i, 2)

        // update index value
        i = 0
      }
    }

    if(result) {
      calculator.reset = 1
    }

    // refresh display values
    calculator.refreshValues(result)
  }

  btnPress() {
    let input = this.textContent
    let upperValue = calculator.upperValue.textContent

    // verify if contains only numbers
    const regex = new RegExp('^\\d+$')
    
    // start a new operation after another
    if(calculator.reset && regex.test(input)) {
      upperValue = '0'
    }
    calculator.reset = 0

    // active clear display method
    if(input === 'AC') {
      calculator.clearValues()
    } else if(input === '=') {
      calculator.result()
    } else {
      // verify if need to add or not
      if (calculator.isLastDigitASymbol(input, upperValue, regex)) {
        return false // isLastDigitASymbol() retorna true, então aborta a função btnPress
      }

      // add spaces to operators
      if(!regex.test(input)) {
        input = ` ${input} `
      }

      // add input to display
      if(upperValue === '0') {
        if(regex.test(input)) {
          calculator.upperValue.textContent = input
        }
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
