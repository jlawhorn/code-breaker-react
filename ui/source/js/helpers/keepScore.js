function keepScore(pieces, blackPieces, bluePieces, redPieces) {
    const chosenPieces = pieces.filter(piece => piece.isChosen === true);
	const chosenBlackPieces = chosenPieces.filter(piece => piece.owner === 'black');
	const chosenBluePieces = chosenPieces.filter(piece => piece.owner === 'blue');
    const chosenRedPieces = chosenPieces.filter(piece => piece.owner === 'red');
    const score = {
        black: blackPieces - chosenBlackPieces.length,
        blue: bluePieces - chosenBluePieces.length,
        red: redPieces - chosenRedPieces.length
    }
    return score;
}

export default keepScore;