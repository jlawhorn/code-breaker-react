import React, {Component} from 'react';
import update from 'react-addons-update';
import Board from './board.js';
import capitalizeFirstLetter from '../helpers/stringFunctions.js';
import getWordlist from '../helpers/generateWordList.js';
import getOwnershipList from '../helpers/generateOwners.js';
import switchTurns from '../helpers/switchTurns.js';
import calculateWinner from '../helpers/winner.js';

const gamePiecesCount = 25;
const blackPieceCount = 1;
const bluePiecesCount = 9;
const redPiecesCount = 8;

const strResetGame = 'Start a new game?';

function buildPieceArray() {
	const wordArray = getWordlist(gamePiecesCount);
	const ownershipArray = getOwnershipList(gamePiecesCount, blackPieceCount, bluePiecesCount, redPiecesCount);
	const piecesArray = [];
	for (let i = 0; i < gamePiecesCount; i++) {
		const piece = {
			word: wordArray[i],
			owner: ownershipArray[i],
			isChosen: false
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
			pieces: buildPieceArray(),
			viewer: 0,
			winner: null
		};
	}

	switchTeamsClick() {
		this.setState({ isBlueTurn: !this.state.isBlueTurn });
	}

	setViewer(i) {
		this.setState({ viewer: i });
	}

	pieceChosenClick(i) {
		const updatedPieces = Array.from(this.state.pieces);
		const clickedPieceOwner = updatedPieces[i].owner;
		updatedPieces[i].isChosen = true;
		this.setState({ pieces: updatedPieces });
		this.setState({ winner: calculateWinner(this.state.pieces, bluePiecesCount, redPiecesCount, this.state.isBlueTurn) });
		this.setState({ isBlueTurn: switchTurns(this.state.isBlueTurn, clickedPieceOwner) });
	}

	getStatus(winner) {
		if (winner === null) {
			return 'Current Turn: ' + (this.state.isBlueTurn ? 'Blue' : 'Red');
		}
		winner = capitalizeFirstLetter(winner);
		this.endGame();
		return `${winner} team is the winner.`;
	}

	promptNewGame() {
		if (confirm(strResetGame)) {
			this.newGame();
		}
	}

	newGame() {
		console.log('start game');
	}

	endGame() {
		console.log('end game');
	}

	render() {
		const turnStatus = this.getStatus(this.state.winner);
		return (
			<div className="game">
				<div className="game__info">
					<div className="game__status">
						{turnStatus}
					</div>
					<div className="button-set">
						<button type="button" className="button" onClick={() => this.switchTeamsClick()}>End Turn</button>
						<button type="button" className="button" onClick={() => this.setViewer(0)}>View as Master</button>
						<button type="button" className="button" onClick={() => this.setViewer(1)}>View as Blue Player</button>
						<button type="button" className="button" onClick={() => this.setViewer(2)}>View as Red Player</button>
						<button type="button" className="button button--alt" onClick={() => this.promptNewGame()}>New Game</button>
					</div>
				</div>
				<div className="game__board">
					<Board
						totalPieces={gamePiecesCount}
						pieces={this.state.pieces}
						viewer={this.state.viewer}
						onClick={(i) => this.pieceChosenClick(i)}
					/>
				</div>
			</div>
		);
	}
}

export default Game;