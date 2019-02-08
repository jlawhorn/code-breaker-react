import React, {Component} from 'react';
import TeamList from './teamList.js';
import ChangePlayer from './changePlayer.js';

import {generateTeams, getPlayerPositionInArray, getAllPlayersReady} from '../helpers/teamUtilities.js';

const maxPlayers = 16;
const currentPlayerId = 1;

class Lobby extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            teams: this.populateTeams(),
            currentPlayerId: currentPlayerId,
            currentPlayerIsReady: false,
            allPlayersReady: false
        };
    }

    togglePlayerReady(currentTeams, playerId) {
        const playerIndex = getPlayerPositionInArray(currentTeams, playerId);
        if (playerIndex >= 0) {
            currentTeams[playerIndex].isReady = !currentTeams[playerIndex].isReady;
            const isAllPlayersReady = getAllPlayersReady(currentTeams);
            this.setState({
                teams: currentTeams,
                currentPlayerIsReady: currentTeams[playerIndex].isReady,
                allPlayersReady: isAllPlayersReady
            });
        } else {
            console.error('Player not found');
        }
    }

    populateTeams() {
        const players = generateTeams();
        if (players.length < maxPlayers) {
            const currentPlayer = {
                id: currentPlayerId,
                name: this.props.currentPlayerName,
                isMaster: false,
                team: 1,
                isReady: false
            };
            players.push(currentPlayer);
            return players;
        }
        console.error('Too many people');
        return players;
    }

    render() {
        const buttonReadyText = this.state.currentPlayerIsReady ? 'Ready' : 'Unready';

        return (
            <div className="lobby">
                <form onSubmit={() => this.props.handleLobbySubmit(this.state.teams, this.state.currentPlayerId)} className="lobby-prompt__form">
                    <h1 className="lobby__title">#{this.props.currentLobbyName}</h1>
                    <TeamList
                        teams={this.state.teams}
                        currentPlayerId={this.state.currentPlayerId}
                    />
                    <ChangePlayer
                        teams={this.state.teams}
                        currentPlayerId={this.state.currentPlayerId}
                        updateTeams={this.props.updateTeams}
                    />
                    <div className="button-set">
                        <span className="label">...who is...</span>
                        <button
                            className="button"
                            type="button"
                            onClick={() => this.togglePlayerReady(this.state.teams, this.state.currentPlayerId)}
                        >{buttonReadyText}</button>
                        <span className="label">...to...</span>
                        <input
                            type="submit"
                            value="Start the Game"
                            className="button button--alt"
                            disabled={!this.state.allPlayersReady}
                        />
                    </div>
                </form>
            </div>
        );
	}
}

export default Lobby;