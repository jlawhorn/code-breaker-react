function switchTurns(isBlueTurn, ownerOfLastSquare) {
    if ((isBlueTurn === true && ownerOfLastSquare === 'blue') ||
        (isBlueTurn === false && ownerOfLastSquare === 'red') ||
        (ownerOfLastSquare === 'black')) {
            return isBlueTurn;
    }
    return !isBlueTurn;
}

export default switchTurns;