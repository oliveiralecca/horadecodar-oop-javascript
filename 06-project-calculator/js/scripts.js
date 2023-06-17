class Calculator {
  constructor() {
    this.upperValue = document.querySelector('#upper-number')
    this.resultValue = document.querySelector('#result-number')
    this.reset = 0
  }

  btnPress() {
    console.log('click')
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
