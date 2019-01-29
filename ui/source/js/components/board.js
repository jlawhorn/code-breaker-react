import React, {Component} from 'react';
import Piece from './piece.js';

function Board(props) {

	function renderPiece(i) {
		return <Piece
			viewer = {props.viewer}
			value = {props.pieces[i]}
			word = {props.pieces[i].word}
			owner = {props.pieces[i].owner}
			isChosen = {props.pieces[i].isChosen}
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
		<div className="board">
			<div className="grid">
				{renderPieces(props.totalPieces)}
			</div>
		</div>
	);
}

export default Board;