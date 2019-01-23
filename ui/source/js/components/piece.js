import React from 'react';

function Piece(props) {
	return (
	  	<button
			className={"piece piece--" + props.owner}
			onClick={props.onClick}
			disabled={props.isDisabled}
		>
			{props.word}
		</button>
	);
}

export default Piece;