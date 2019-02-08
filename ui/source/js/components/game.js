import React, {Component} from 'react';
import Board from './board.js';
import Stats from './stats.js';
import Controls from './controls.js';
import {getSeed} from '../helpers/seedUtilities.js';
import getWordlist from '../helpers/generateWordList.js';
import getOwnershipList from '../helpers/generateOwners.js';
import {generateTeams, setPlayerTeam, setPlayerIsMaster} from '../helpers/teamUtilities.js';
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
			seed: this.props.seed,
			score: {
				black: blackPieceCount,
				blue: bluePiecesCount,
				red: redPiecesCount
			},
			pieces: buildPieceArray(),
			winner: null,
			teams: this.props.teams,
			currentPlayerId: this.props.currentPlayerId
		};
	}

	switchTeamTurnClick() {
		this.setState({ isBlueTurn: !this.state.isBlueTurn });
	}

	pieceChosenClick(i) {
		if (this.state.winner === null) {
			let updatedPieces = Array.from(this.state.pieces);
			const clickedPieceOwner = updatedPieces[i].owner;
			updatedPieces[i].isChosen = true;
			const newScore = keepScore(updatedPieces, blackPieceCount, bluePiecesCount, redPiecesCount);
			const newWinner = calculateWinner(newScore, this.state.isBlueTurn);
			if (newWinner !== null) {
				updatedPieces = this.disableAllPieces(updatedPieces);
			}
			this.setState({
				score: newScore,
				pieces: updatedPieces,
				winner: newWinner,
				isBlueTurn: switchTurns(this.state.isBlueTurn, clickedPieceOwner)
			});
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
			seed: getSeed(),
			winner: null,
			isBlueTurn: true,
			pieces: buildPieceArray()
		});
	}

	disableAllPieces(piecesToDisable) {
		return piecesToDisable.map(piece => {
			piece.isChosen = true;
			return piece;
		});
	}

	render() {
		return (
			<div className="game">
				<Stats
					isBlueTurn={this.state.isBlueTurn}
					winner={this.state.winner}
					score={this.state.score}
					teams={this.state.teams}
				/>
				<Board
					totalPieces={gamePiecesCount}
					pieces={this.state.pieces}
					teams={this.state.teams}
					playerId={this.state.currentPlayerId}
					winner={this.state.winner}
					onClick={(i) => this.pieceChosenClick(i)}
				/>
				<Controls
					winner={this.state.winner}
					teams={this.state.teams}
					playerId={this.state.currentPlayerId}
					isBlueTurn={this.state.isBlueTurn}
					onClickSwitchTeams={() => this.switchTeamTurnClick()}
					onClickPromptNewGame={() => this.promptNewGame()}
					updateTeams={this.props.updateTeams}
				/>
			</div>
		);
	}
}

export default Game;