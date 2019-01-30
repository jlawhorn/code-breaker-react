import React, {Component} from 'react';
import Piece from './piece.js';

function Board(props) {

	function renderPiece(i) {
		return <Piece {...props.pieces[i]}
			viewer = {props.viewer}
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
		<div className={"board winner--" + props.winner}>
			<div className="grid">
				{renderPieces(props.totalPieces)}
			</div>
		</div>
	);
}

export default Board;