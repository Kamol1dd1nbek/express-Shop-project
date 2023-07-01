const moment = require('moment');

function ifequal (a, b, options) {
    if (a == b) {
        return options.fn(this);
    }
    return options.inverse(this);
}

const getCharactersFirst = (a, b) => {
    return a.charAt(0) + b.charAt(0);
}

const createdAtdate = (date) => {
    return moment(date).format("DD MMM, YYYY");
}

module.exports = {ifequal, getCharactersFirst, createdAtdate}