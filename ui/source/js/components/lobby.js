import React, {Component} from 'react';
import {generateTeams} from '../helpers/teamUtilities.js';
import Player from './player.js';
import TeamList from './teamlist.js';

const maxPlayers = 16;

class Lobby extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            teams: generateTeams(),
            allPlayersReady: false
        };
        //this.addCurrentPlayer(this.state.teams);
    }

    allPlayersReady() {
        console.log('Are all teams ready');
    }

    togglePlayerReady() {

    }

    addCurrentPlayer(currentTeams) {
        if (currentTeams.length < maxPlayers) {
            const currentPlayer = {
                id: 1,
                name: this.props.currentPlayer,
                isMaster: true,
                team: 1,
                isReady: false
            };
            currentTeams.push(currentPlayer);
            this.setState({ teams: currentTeams });
        } else {
            console.error('Too many people');
        }
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
                        onClick={() => this.togglePlayerReady()}
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