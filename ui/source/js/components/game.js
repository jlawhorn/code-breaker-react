import React, {Component} from 'react';
import Board from './board.js';
import Stats from './stats.js';
import Controls from './controls.js';
import getWordlist from '../helpers/generateWordList.js';
import getOwnershipList from '../helpers/generateOwners.js';
import generateTeams from '../helpers/teams.js';
import switchTurns from '../helpers/switchTurns.js';
import keepScore from '../helpers/keepScore.js';
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
			score: {
				black: blackPieceCount,
				blue: bluePiecesCount,
				red: redPiecesCount
			},
			pieces: buildPieceArray(),
			viewer: 0,
			winner: null,
			teams: generateTeams()
		};
	}

	switchTeamsClick() {
		this.setState({ isBlueTurn: !this.state.isBlueTurn });
	}

	setViewer(i) {
		this.setState({ viewer: i });
	}

	pieceChosenClick(i) {
		if (this.state.winner === null) {
			const updatedPieces = Array.from(this.state.pieces);
			const clickedPieceOwner = updatedPieces[i].owner;
			updatedPieces[i].isChosen = true;
			const newScore = keepScore(updatedPieces, blackPieceCount, bluePiecesCount, redPiecesCount);
			const newWinner = calculateWinner(newScore, this.state.isBlueTurn);
			this.setState({
				score: newScore,
				pieces: updatedPieces,
				winner: newWinner,
				isBlueTurn: switchTurns(this.state.isBlueTurn, clickedPieceOwner)
			});
			if (newWinner !== null) {
				this.endGame(newWinner);
			}
		}
		return false;
	}

	promptNewGame() {
		if (confirm(strResetGame)) {
			this.newGame();
		}
	}

	newGame() {
		this.setState({
			winner: null,
			isBlueTurn: true,
			pieces: buildPieceArray()
		});
	}

	endGame() {
		const updatedPieces = Array.from(this.state.pieces);
		updatedPieces.forEach(piece => piece.isChosen = true);
		this.setState({ pieces: updatedPieces });
	}

	render() {
		return (
			<div className="game">
				<Stats
					isBlueTurn={this.state.isBlueTurn}
					winner={this.state.winner}
					viewer={this.state.viewer}
					score={this.state.score}
					teams={this.state.teams}
				/>
				<Board
					totalPieces={gamePiecesCount}
					pieces={this.state.pieces}
					viewer={this.state.viewer}
					winner={this.state.winner}
					onClick={(i) => this.pieceChosenClick(i)}
				/>
				<Controls
					viewer={this.state.viewer}
					winner={this.state.winner}
					onClickSwitchTeams={() => this.switchTeamsClick()}
					onClickViewMaster={() => this.setViewer(0)}
					onClickViewBlue={() => this.setViewer(1)}
					onClickViewRed={() => this.setViewer(2)}
					onClickPromptNewGame={() => this.promptNewGame()}
				/>
			</div>
		);
	}
}

export default Game;