function analyzer(array) {
    let sum = 0
    array.forEach(number => {
        sum = sum + number;
    });

    const object = {
        average: sum / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
    
    return object;
}

module.exports = analyzer