function caesar(string, shift) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const stringSplit = string.split('');
    const shiftedString = [];

    stringSplit.forEach(letter => {
        const where = alphabet.indexOf(letter.toLowerCase());

        if (alphabet.includes(letter.toLowerCase()) === false) {
            shiftedString.push(letter);
        } else if (alphabet.includes(letter) === true && (where + shift) >= 26) {
            shiftedString.push(alphabet[(where + shift) - 26]);
        } else if (alphabet.includes(letter) === false && alphabet.includes(letter.toLowerCase()) === true && (where + shift) < 26) {
            shiftedString.push(alphabet[where + shift].toUpperCase());
        } else if (alphabet.includes(letter) === false && alphabet.includes(letter.toLowerCase()) === true) {
            shiftedString.push(alphabet[(where + shift) - 26].toUpperCase());
        } else {
            shiftedString.push(alphabet[where + shift]);
        }

    })

    return shiftedString.join('');
}

module.exports = caesar;