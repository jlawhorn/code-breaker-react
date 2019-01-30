import {shuffleArray} from './random.js';

function getOwnershipList(pieceCount, blackPieceCount, bluePieceCount, redPieceCount) {
    const neutralPieceCount = pieceCount - (blackPieceCount + bluePieceCount + redPieceCount);
    const pieceArray = [];

    for (let i = 0; i < blackPieceCount; i++) {
        pieceArray.push('black');
    }
    for (let i = 0; i < bluePieceCount; i++) {
        pieceArray.push('blue');
    }
    for (let i = 0; i < redPieceCount; i++) {
        pieceArray.push('red');
    }
    for (let i = 0; i < neutralPieceCount; i++) {
        pieceArray.push('neutral');
    }

    return shuffleArray(pieceArray);
}

export default getOwnershipList;