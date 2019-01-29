function calculateWinner(pieces, bluePieces, redPieces, isBlueTurn) {

	const chosenSquares = pieces.filter(piece => piece.isChosen === 1);
	const chosenBlackSquares = chosenSquares.filter(piece => piece.owner === 'black');
	const chosenBlueSquares = chosenSquares.filter(piece => piece.owner === 'blue');
	const chosenRedSquares = chosenSquares.filter(piece => piece.owner === 'red');

	if (chosenBlackSquares.length > 0) {
		if (isBlueTurn) {
			return 'red';
		} else {
			return 'blue';
		}
	} else if (chosenBlueSquares.length === bluePieces) {
		return 'blue';
	} else if (chosenRedSquares.length === redPieces) {
		return 'red';
	}

	return null;
}

export default calculateWinner;