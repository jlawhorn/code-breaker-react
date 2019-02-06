import React, {Component} from 'react';
import {generateTeams, getPlayerPositionInArray} from '../helpers/teamUtilities.js';
import Player from './player.js';
import TeamList from './teamlist.js';

const maxPlayers = 16;
const currentPlayerId = 1;

class Lobby extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            teams: this.populateTeams(),
            currentPlayerId: currentPlayerId,
            allPlayersReady: false
        };
    }

    allPlayersReady() {
        console.log('Are all teams ready');
    }

    togglePlayerReady(currentTeams, playerId) {
        const playerIndex = getPlayerPositionInArray(currentTeams, playerId);
        if (playerIndex >= 0) {
            currentTeams[playerIndex].isReady = !currentTeams[playerIndex].isReady;
            this.setState({ teams: currentTeams });
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
                isMaster: true,
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
        return (
            <div className="lobby">
                <form onSubmit={() => this.props.handleLobbySubmit(this.state)} className="lobby-prompt__form">
                    <TeamList
                        teams={this.state.teams}
                        currentPlayerId={this.props.currentPlayerId}
                    />
                    Change Team Arrows
                    Make me a master
                    <button
                        className="button"
                        type="button"
                        onClick={() => this.togglePlayerReady(this.state.teams, this.state.currentPlayerId)}
                    >Ready</button>
                    <input
                        type="submit"
                        value="Start Game"
                        className="button button--alt"
                        disabled={!this.state.allPlayersReady}
                    />
                </form>
            </div>
        );
	}
}

export default Lobby;