const caesar = require('../codes/caesar');

test('casear cipher', () => {
    expect(caesar('a', 1)).toBe('b');
})

test('casear cipher', () => {
    expect(caesar('z', 1)).toBe('a');
})

test('casear cipher', () => {
    expect(caesar('A', 1)).toBe('B');
})

test('casear cipher', () => {
    expect(caesar('Z', 1)).toBe('A');
})

test('casear cipher', () => {
    expect(caesar('Za. Warudo', 1)).toBe('Ab. Xbsvep');
})