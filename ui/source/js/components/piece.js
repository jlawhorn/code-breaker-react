import React from 'react';
import {getPlayerIsMaster} from '../helpers/teamUtilities.js';

function Piece(props) {

	function getVisibleClass() {
		return (props.isChosen || getPlayerIsMaster(props.teams, props.playerId) === true)
			? `piece--${props.owner}` : 'piece--neutral';
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