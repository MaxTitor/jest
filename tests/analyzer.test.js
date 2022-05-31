const analyzer = require('../codes/analyzer');

test('array analyzer', () => {
    const object = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    };
    expect(analyzer([1,8,3,4,2,6])).toStrictEqual(object);
})