const ifequal = (a, b, options) => {
    if (a == b) {
        return options.fn(this);
    }
    return options.inverse(this);
}

const getCharactersFirst = (a, b) => {
    return a.charAt(0) + b.charAt(0);
}

module.exports = {ifequal, getCharactersFirst}