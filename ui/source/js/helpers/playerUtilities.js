function getPlayerName() {
    const playerName = window.localStorage.getItem('playerName');
    return playerName ? playerName : '';
}

function setPlayerName(playerName) {
    console.log(playerName);
    if (playerName) {
        window.localStorage.setItem('playerName', playerName);
    }
}

export {getPlayerName, setPlayerName};