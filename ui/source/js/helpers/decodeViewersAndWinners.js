function getActiveTeamColorCSS(isBlueTurn, winner) {
    if (winner) {
        return winner;
    } else {
        return isBlueTurn ? 'blue' : 'red';
    }
}

function getViewerColorCSS(viewerNumber) {
    switch(viewerNumber) {
        case 0:
            return "master";
            break;
        case 1:
            return "blue";
            break;
        case 2:
            return "red";
            break;
    }
}

function getViewerName(viewerNumber) {
    switch(viewerNumber) {
        case 0:
            return "Master";
            break;
        case 1:
            return "Blue Team";
            break;
        case 2:
            return "Red Team";
            break;
    }
}

export {getActiveTeamColorCSS, getViewerColorCSS, getViewerName};