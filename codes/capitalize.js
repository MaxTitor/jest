function capitalize(string) {
    let firstLetter = string.charAt(0);
    firstLetter = firstLetter.toUpperCase();

    let restOfLetters = string.slice(1, string.length + 1);
    const capitalizedWord = firstLetter + restOfLetters;

    return capitalizedWord
}

module.exports = capitalize