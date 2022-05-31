const calculator = require('../codes/calculator');

test('calculator', () => {
    expect(calculator(1, '+', 1)).toBe(2);
})

test('calculator', () => {
    expect(calculator(1, '-', 1)).toBe(0);
})

test('calculator', () => {
    expect(calculator(1, '*', 1)).toBe(1);
})

test('calculator', () => {
    expect(calculator(1, '/', 1)).toBe(1);
})