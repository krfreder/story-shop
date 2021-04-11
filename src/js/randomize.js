const randy = require('randy');

export function randomize(list) {
    return randy.choice(list);
}