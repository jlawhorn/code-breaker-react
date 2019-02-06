import {shuffleArray} from './random.js';

function getWordlist(count) {
    const wordList = [
        'air', 'ambulance', 'ammonia', 'apple', 'appendix', 'archipelago',

        'ball', 'bark', 'baron', 'barrier', 'bed', 'belt', 'bill', 'bingo', 'blackberry', 'bonus',
        'bottle', 'bow', 'box', 'broccoli', 'brunch', 'bug', 'bugle',

        'cap', 'cartridge', 'cassette', 'catfish', 'cemetery', 'check', 'Chihuahua', 'cilantro', 'circus',
        'cliff', 'coaster', 'coconut', 'code', 'command', 'concert', 'cover', 'conflict', 'cotton', 'coyote',
        'cracker', 'crane', 'crown', 'curfew', 'cursor',

        'dad', 'dawn', 'death', 'demon', 'dentist', 'diagnosis', 'dice', 'dinosaur', 'discovery', 'doctor',
        'donkey', 'dress', 'drop', 'duchess', 'duck',

        'Easter', 'eagle', 'editor', 'epilepsy', 'equator', 'error', 'espionage',

        'fall', 'fan', 'flask', 'flora', 'fries', 'fundraiser', 'fusion',

        'glass', 'glove', 'glucose', 'google', 'green', 'gun',

        'hallway', 'hamburger', 'hammock', 'hand', 'head', 'heart', 'Himalayas', 'hole', 'honey', 'horn',
        'horseman', 'hurricane',

        'iceberg', 'illness', 'intersection', 'ivory',

        'jerky', 'joker', 'juror',

        'kangaroo', 'ketchup', 'kingdom',

        'leopard', 'ligament', 'litter', 'logic', 'lookout',

        'mango', 'mass', 'matrix', 'medic', 'mirth', 'molasses', 'morale', 'motto', 'murder',

        'network', 'nexus', 'nightmare', 'noodle',

        'oasis', 'offense', 'olive', 'Olympus', 'opera', 'oracle', 'orange', 'oxygen',

        'pan', 'panther', 'pasta', 'paste', 'patriotism', 'pilot', 'pirate', 'plaza', 'point', 'poker',
        'pool', 'potassium', 'pottery', 'poultry', 'press', 'princess', 'prisoner', 'privacy', 'processor',
        'protein', 'prototype', 'puberty', 'pupil', 'pyramid',

        'quart', 'quartz', 'queen',

        'racism', 'ranger', 'recipe', 'recreation', 'refrigerator', 'reins', 'repository', 'republic', 'restaurant', 'roadblock',
        'robber', 'robot', 'rodeo', 'rocks',

        'saloon', 'Saturday', 'scenario', 'scholarship', 'scientist', 'scissors', 'scrum', 'seduction', 'senator', 'sesame',
        'setup', 'shadow', 'shop', 'shot', 'siding', 'sister', 'skate', 'snack', 'snail', 'snapshot',
        'snow', 'soccer', 'spaghetti', 'spoiler', 'squad', 'staff', 'stadium', 'stage', 'stairway', 'straw',
        'statement', 'star', 'stocks', 'subscription', 'suburb', 'success', 'sweater', 'syndrome', 'syntax',

        'tavern', 'teacher', 'technology', 'telescope', 'telephone', 'terror', 'theater', 'therapy', 'thunder', 'tie',
        'tiger', 'time', 'today', 'touchdown', 'torch', 'tourist', 'tractor', 'transmission', 'trauma', 'treadmill',
        'trilogy', 'trout', 'turkey', 'tyrant',

        'underdog', 'underwear', 'university',

        'vaccination', 'vacuum', 'vampire', 'vanguard', 'victory', 'viewpoint', 'villa', 'vista', 'vocalist', 'volcano',
        'voltage',

        'waistcoat', 'waitress', 'wardrobe', 'warmth', 'Washington', 'watchdog', 'wealth', 'werewolf', 'whisky', 'widget',
        'width', 'windfall', 'wiring', 'witchcraft', 'words', 'workman',

        'yak', 'yogurt', 'youngster',

        'Zanzibar', 'zibra', 'zoo'
    ];
    return shuffleArray(wordList).slice(0, count);
}

export default getWordlist;