// 1 part

let y = prompt('Ввести 1 число')
let x = prompt('Ввести 2 число')
const num = (y,x) => {
    (isNaN(y))||(isNaN(x))
    console.log(Math.min(y,x))
}
num(y,x)

// 2 part

const vernyt = prompt('напиши что нибудь')
const back = (vernyt) => {
    console.log(`Длина строки равна ${vernyt.length}`)

}
back(vernyt)

// 3 part

let num1 = Number(prompt('Ввести 1 число'))
let operation = prompt('выберите действие \n+\n-\n*\n/')
let num2 = Number(prompt('Ввести 2 число'))
const calc = () => {
    let result
    (isNaN(num1)) || (isNaN(num2)) ?
        alert('Введите число!') :
        true

    switch (operation) {
        case '+':
            result = num1 + num2;
            break
        case '*':
            result = num1 * num2;
            break
        case '/':
            result = num1 / num2;
            break
        case '-':
            result = num1 - num2;
            break
        default:
            alert('выберите правильное действие!')

    }
    alert(result)
}
calc()
