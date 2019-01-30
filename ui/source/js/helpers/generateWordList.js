import {shuffleArray} from './random.js';

function getWordlist(count) {
    const wordList = [
        'press', 'fan', 'pyramid', 'torch', 'fall',
        'Himalayas', 'staff', 'pupil', 'drop', 'cotton',
        'bottle', 'belt', 'stadium', 'glove', 'robot',
        'glass', 'concert', 'bill', 'dress', 'pilot',
        'green', 'turkey', 'ketchup', 'crown', 'cliff',
        'bed', 'mass', 'Washington', 'box', 'dice',
        'honey', 'hole', 'olive', 'star', 'litter',
        'opera', 'shot', 'scientist', 'horn', 'time',
        'apple', 'Olympus', 'telescope', 'snow', 'pan',
        'princess', 'ivory', 'death', 'bugle', 'bark',
        'duck', 'dinosaur', 'paste', 'orange', 'bow',
        'straw', 'bug', 'doctor', 'cover', 'crane',
        'point', 'pool', 'pirate', 'eagle', 'teacher',
        'tie', 'cap', 'check', 'vacuum', 'shadow'
    ];
    return shuffleArray(wordList).slice(0, count);
}

export default getWordlist;