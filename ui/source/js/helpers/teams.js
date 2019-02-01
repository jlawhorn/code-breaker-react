function setPlayerTeam(playerArray, playerId, newPlayerTeam) {
    const position = getPlayerPositionInArray(playerArray, playerId);
    playerArray[position].team = newPlayerTeam;
    return playerArray;
}

function setPlayerIsMaster(playerArray, playerId, newPlayerIsMaster) {
    const position = getPlayerPositionInArray(playerArray, playerId);
    playerArray[position].isMaster = newPlayerIsMaster;
    return playerArray;
}

function getPlayerPositionInArray(playerArray, playerId) {
    if (!playerArray) {
        console.error('No team array');
    }
    return playerArray.map(player => player.id).indexOf(playerId);
}

function getPlayerTeam(playerArray, playerId) {
    const position = getPlayerPositionInArray(playerArray, playerId);
    return playerArray[position].team;
}

function getPlayerIsMaster(playerArray, playerId) {
    const position = getPlayerPositionInArray(playerArray, playerId);
    return playerArray[position].isMaster;
}

function generateTeams() {
    return [
        {
            id: 1,
            name: 'Joseph',
            isMaster: true,
            team: 1
        },
        {
            id: 2,
            name: 'Jac',
            isMaster: false,
            team: 1
        },
        {
            id: 3,
            name: 'Jeff',
            isMaster: false,
            team: 1
        },
        {
            id: 4,
            name: 'Aaron',
            isMaster: true,
            team: 2
        },
        {
            id: 5,
            name: 'Anna',
            isMaster: false,
            team: 2
        },
        {
            id: 6,
            name: 'Andy',
            isMaster: false,
            team: 2
        }
    ];
}

export {generateTeams, setPlayerTeam, setPlayerIsMaster, getPlayerTeam, getPlayerIsMaster};