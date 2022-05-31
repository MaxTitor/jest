const reverse = require('../codes/reverse');

test('reverses the string', () => {
    expect(reverse('za warudo')).toBe('oduraw az');
})