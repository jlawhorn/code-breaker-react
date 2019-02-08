import getWordlist from './generateWordList.js';
import {stripSpecialCharacters} from './stringUtilities.js';

function getSeed() {
    let seed = stripSpecialCharacters(window.location.hash).toLowerCase().substr(0,20);
    if (!seed) {
        seed = createSeed();
    }
    setSeed(seed);
    return seed;
}

function createSeed(newSeed) {
    if (!newSeed) {
        return getWordlist(2).join('-').toLowerCase();
    } else {
        return newSeed.toLowerCase();
    }
}

function setSeed(newSeed) {
    window.location.hash = newSeed;
}

export {getSeed, setSeed, createSeed};