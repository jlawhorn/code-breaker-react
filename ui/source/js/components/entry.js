import React, {Component} from 'react';
import Lobby from './lobby.js';
import {getSeed, createSeed, setSeed} from '../helpers/seedUtilities.js';
import {getPlayerName, setPlayerName} from '../helpers/playerUtilities.js';
import {stripSpecialCharacters} from '../helpers/stringUtilities.js';

class Entry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            seed: '',
            playerName: getPlayerName(),
            lobbyValue: getSeed()
        };
        this.handleLobbyChange = this.handleLobbyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRandomClick = this.handleRandomClick.bind(this);
    }

    handleLobbyChange(event) {
        this.setState({ lobbyValue: event.target.value.toLowerCase().substr(0,20) });
    }

    handleNameChange(event) {
        this.setState({ playerName: stripSpecialCharacters(event.target.value).substr(0,20) });
    }

    handleSubmit(event) {
        event.preventDefault();
        setSeed(this.state.lobbyValue);
        setPlayerName(this.state.playerName);
        this.setState({ seed: this.state.lobbyValue });
    }

    handleRandomClick(event) {
        this.setState({ lobbyValue: createSeed() });
    }

    render() {
        return (
            <div className="lobby-prompt">
                <form onSubmit={this.handleSubmit} className="lobby-prompt__form">
                    <label htmlFor="playerName" className="playerName">Player Name:</label>
                    <input
                        type="text"
                        id="nameInput"
                        name="nameInput"
                        className="input"
                        placeholder="Enter Player Name"
                        value={this.state.playerName}
                        maxLength="20"
                        onChange={this.handleNameChange}
                    />
                    <label htmlFor="lobbyInput" className="label">Lobby Name:</label>
                    <input
                        type="text"
                        id="lobbyInput"
                        name="lobbySeed"
                        className="input"
                        placeholder="Enter a Lobby"
                        value={this.state.lobbyValue}
                        maxLength="20"
                        onChange={this.handleLobbyChange}
                    />
                    <input
                        type="button"
                        className="button"
                        value="Random Lobby"
                        onClick={this.handleRandomClick}
                    />
                    <input
                        type="submit"
                        className="button button--alt"
                        value="Enter Lobby"
                    />
                </form>
            </div>
        );
	}
}

export default Entry;