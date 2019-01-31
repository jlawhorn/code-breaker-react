import React from 'react';

function Piece(props) {

	function getVisibleClass() {
		return (props.isChosen || props.viewer === 0) ? `piece--${props.owner}` : 'piece--neutral';
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