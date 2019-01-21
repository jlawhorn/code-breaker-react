import React, {Component} from 'react';
import Piece from './piece.js';

class Board extends React.Component {
    renderPiece(i) {
        return <Piece />;
    }

    render() {
        const status = 'Next player: X';

        return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {this.renderPiece(0)}
                {this.renderPiece(1)}
                {this.renderPiece(2)}
            </div>
            <div className="board-row">
                {this.renderPiece(3)}
                {this.renderPiece(4)}
                {this.renderPiece(5)}
            </div>
            <div className="board-row">
                {this.renderPiece(6)}
                {this.renderPiece(7)}
                {this.renderPiece(8)}
            </div>
        </div>
        );
    }
}

export default Board;