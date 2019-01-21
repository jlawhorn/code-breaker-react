import React from 'react';

function Piece(props) {
	return (
	  	<button
			className="piece"
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

export default Piece;