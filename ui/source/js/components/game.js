import React, {Component} from 'react';
import Board from './board.js';
import getWordlist from '../helpers/generateWordList.js';
import getOwnershipList from '../helpers/generateOwners.js';
import calculateWinner from '../helpers/winner.js';

const gamePiecesCount = 25;
const blackPieceCount = 1;
const bluePiecesCount = 9;
const redPiecesCount = 8;

function buildPieceArray() {
	const wordArray = getWordlist(gamePiecesCount);
	const ownershipArray = getOwnershipList(gamePiecesCount, blackPieceCount, bluePiecesCount, redPiecesCount);
	const piecesArray = [];
	for (let i = 0; i < gamePiecesCount; i++) {
		const piece = {
			word: wordArray[i],
			owner: ownershipArray[i],
			isDisabled: 0
		}
		piecesArray.push(piece);
	}
	return piecesArray;
}

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isBlueTurn: true,
			pieces: buildPieceArray()
		};
	}

	switchTeamsClick() {
		console.log('switch teams');
		this.state.isBlueTurn = !this.state.isBlueTurn;
	}

	pieceChosenClick(i) {
		this.state.pieces[i].isDisabled = 1;
	}

	render() {
		const winner = calculateWinner(pieces);
		const turnStatus = 'Current Team: ' + (this.state.isBlueTurn ? 'Blue' : 'Red');
		return (
			<div className="game">
				<div className="game__info">
					<div className="game__status">
						{turnStatus}
						<button type="button" className="button">End Turn</button>
					</div>
				</div>
				<div className="game__board">
					<Board
						totalPieces={gamePiecesCount}
						pieces={this.state.pieces}
						onClick={(i) => this.pieceChosenClick(i)}
					/>
				</div>
			</div>
		);
	}
}

export default Game;