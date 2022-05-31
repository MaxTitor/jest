function calculator(num1, operation, num2) {
    switch (operation) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
        default:
            return "error";
            break;
    }
}

module.exports = calculator;