const btn = document.getElementById('btn')
const firstNumber = document.getElementById('firstNumber')
const secondNumber = document.getElementById('secondNumber')
const opt = document.getElementById('opt')
const resText = document.getElementById('resText')
const result = document.getElementById('result')

const getResult = ()=> {
    resText.innerText = "Result: "
    if (opt[opt.selectedIndex].value === 'sum') {
        result.innerText = +firstNumber.value + +secondNumber.value
    }
    else if (opt[opt.selectedIndex].value === 'sub') {
        result.innerText = +firstNumber.value - +secondNumber.value
    }
    else if (opt[opt.selectedIndex].value === 'multi') {
        result.innerText = +firstNumber.value * +secondNumber.value
    }
    else if (opt[opt.selectedIndex].value === 'div') {
        result.innerText = +firstNumber.value / +secondNumber.value
    }
    else {
        resText.innerText = "Please select an operation"
    }
}

