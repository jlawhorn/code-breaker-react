function calculateWinner(score, isBlueTurn) {

	if (score.black === 0) {
		if (isBlueTurn) {
			return 'red';
		} else {
			return 'blue';
		}
	} else if (score.blue === 0) {
		return 'blue';
	} else if (score.black === 0) {
		return 'red';
	}

	return null;
}

export default calculateWinner;