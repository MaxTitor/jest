const capitalize = require('../codes/capitalize');

test('capitalizes the first letter', () => {
    expect(capitalize('za warudo')).toBe('Za warudo');
})