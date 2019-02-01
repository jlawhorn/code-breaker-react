import getWordlist from '../helpers/generateWordList.js';

function getSeed() {
    let seed = window.location.hash;
    if (!seed) {
        seed = createSeed();
    }
    setSeed(seed);
    return seed;
}

function createSeed(newSeed) {
    if (!newSeed) {
        return getWordlist(2).join('-');
    } else {
        return newSeed;
    }
}

function setSeed(newSeed) {
    window.location.hash = newSeed;
}

export default getSeed;