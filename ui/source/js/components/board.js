import React, {Component} from 'react';
import Piece from './piece.js';

function Board(props) {

	function renderPiece(i) {
		return <Piece {...props.pieces[i]}
			teams = {props.teams}
			playerId = {props.playerId}
			key = {i}
			onClick = {() => props.onClick(i)}
		/>;
	}

	function renderPieces(pieceCount) {
		let pieceList = [];
		for (let i = 0; i < pieceCount; i++) {
			pieceList.push(renderPiece(i));
		}
		return pieceList;
	}

	return (
		<div className="game__board">
			<div className={"board winner--" + props.winner}>
				<div className="grid">
					{renderPieces(props.totalPieces)}
				</div>
			</div>
		</div>
	);
}

export default Board;