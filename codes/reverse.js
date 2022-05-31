function reverse(string) {
    const split = string.split('');
    const reversed = split.reverse();
    const join = reversed.join('');
    return join;
}

module.exports = reverse;