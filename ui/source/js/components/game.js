import React, {Component} from 'react';
import Board from './board.js';
import calculateWinner from '../helpers/winner.js';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [{
				pieces: Array(9).fill(null)
			}],
			xIsNext: true,
		};
	}

	handleClick(i) {
		const history = this.state.history;
		const current = history[history.length - 1];
		const pieces = current.pieces.slice();
		if (calculateWinner(pieces) || pieces[i]) {
			return;
		}
		pieces[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			history: history.concat([{
				pieces: pieces
			}]),
			xIsNext: !this.state.xIsNext
		});
	}

	render() {
		const history = this.state.history;
		const current = history[history.length - 1];
		const winner = calculateWinner(current.pieces);

		let status;
		if (winner) {
			status = 'Winner: ' + winner;
		} else {
			status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		}

		return (
			<div className="game">
				<div className="game-board">
					<Board
						pieces={current.pieces}
						onClick={(i) => this.handleClick(i)}
					/>
				</div>
				<div className="game-info">
					<div>{ status }</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

export default Game;