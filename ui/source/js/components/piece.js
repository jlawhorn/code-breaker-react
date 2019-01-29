import React from 'react';

function Piece(props) {

	function getVisibleClass() {
		if (props.isChosen || props.viewer === 0) {
			return `piece--${props.owner}`;
		}
		return 'piece--neutral'
	}

	return (
	  	<button
			className={"piece " + getVisibleClass()}
			onClick={props.onClick}
			disabled={props.isChosen}
		>
			{props.word}
		</button>
	);
}

export default Piece;