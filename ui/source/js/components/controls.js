import React from 'react';

function Controls(props) {

    function getViewerState(viewerId, controlId) {
        return viewerId === controlId;
    }

    function isWinner(winnerName) {
        if (winnerName !== null) {
            return true;
        }
        return false;
    }

    return (
        <aside className="sidebar sidebar--right">
            <div className="button-set">
                <button type="button" className="button" disabled={isWinner(props.winner)} onClick={props.onClickSwitchTeams}>End Turn</button>
                <button type="button" className="button button--alt" onClick={props.onClickPromptNewGame}>New Game</button>
                <fieldset className="control-set">
                    <legend>Viewer</legend>
                    <div className="toggleSwitches">
                        <div className="switchItem">
                            <input
                                type="radio"
                                name="viewer"
                                id="viewAsMaster"
                                defaultChecked={getViewerState(props.viewer, 0)}
                                onClick={props.onClickViewMaster}
                            />
                            <label htmlFor="viewAsMaster">Master</label>
                        </div>
                        <div className="switchItem">
                            <input
                                type="radio"
                                name="viewer"
                                id="viewAsBlue"
                                defaultChecked={getViewerState(props.viewer, 1)}
                                onClick={props.onClickViewBlue}
                            />
                            <label htmlFor="viewAsBlue">Blue Player</label>
                        </div>
                        <div className="switchItem">
                            <input
                                type="radio"
                                name="viewer"
                                id="viewAsRed"
                                defaultChecked={getViewerState(props.viewer, 2)}
                                onClick={props.onClickViewRed}
                            />
                            <label htmlFor="viewAsRed">Red Player</label>
                        </div>
                    </div>
                </fieldset>
            </div>
        </aside>
    );
}

export default Controls;