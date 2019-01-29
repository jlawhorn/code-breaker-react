import React, {Component} from 'react';
import Piece from './piece.js';

class Board extends React.Component {

	renderPiece(i) {
		return <Piece
			viewer = {this.props.viewer}
			value = {this.props.pieces[i]}
			word = {this.props.pieces[i].word}
			owner = {this.props.pieces[i].owner}
			isChosen = {this.props.pieces[i].isChosen}
			key = {i}
			onClick = {() => this.props.onClick(i)}
		/>;
	}

	renderPieces(pieceCount) {
		let pieceList = [];
		for (let i = 0; i < pieceCount; i++) {
			pieceList.push(this.renderPiece(i));
		}
		return pieceList;
	}

	render() {
		return (
			<div className="board">
				<div className="grid">
					{this.renderPieces(this.props.totalPieces)}
				</div>
			</div>
		);
	}
}

export default Board;