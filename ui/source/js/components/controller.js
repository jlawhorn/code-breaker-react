import React, {Component} from 'react';
import Entry from './entry.js';
import Lobby from './lobby.js';
import Game from './game.js';

import {setSeed} from '../helpers/seedUtilities.js';

class Controller extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            page: 1,
            seed: null,
            teams: null,
            currentPlayerId: null,
            currentPlayerName: null,
            currentLobbyName: null,
            pieces: null,
			score: null,
			winner: null,
            isBlueTurn: true
        };
        this.handleEntrySubmit = this.handleEntrySubmit.bind(this);
        this.handleLobbySubmit = this.handleLobbySubmit.bind(this);
    }

    setPage(pageId) {
        setState({ page: pageId });
    }

    getPage(pageId) {
        let pageRoute;
        switch(pageId) {
            case 1:
                pageRoute = <Entry handleEntrySubmit={this.handleEntrySubmit} />;
                break;
            case 2:
                pageRoute = <Lobby
                    handleLobbySubmit={this.handleLobbySubmit}
                    currentPlayerName={this.state.currentPlayerName}
                    currentLobbyName={this.state.currentLobbyName}
                />;
                break;
            case 3:
                pageRoute = <Game />;
                break;
            default:
                console.error('Invalid Page Id');
        }
        return pageRoute;
    }

    handleEntrySubmit(entryState) {
        const newState = {...this.state, ...entryState};
        newState.page = 2;
        newState.seed = newState.currentLobbyName;
        setSeed(newState.seed);
        this.setState({ ...newState });
    }

    handleLobbySubmit(lobbyState) {
        console.log('lobby Done');
    }

	render() {
		return (
			<div className="controller">
                { this.getPage(this.state.page) }
			</div>
		);
	}
}

export default Controller;