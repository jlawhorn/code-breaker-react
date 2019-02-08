import React from 'react';

function Player(props) {
    function playerIsCurrentPlayer() {
        if (props.player.id === props.currentPlayerId) {
            return 'team-list__item--current-player '
        }
        return '';
    }

    function playerIsReady() {
        if (props.player.isReady === true) {
            return 'team-list__item--ready '
        }
        return '';
    }

    function playerIsMaster() {
        if (props.player.isMaster) {
            return 'team-list__item--master ';
        }
        return '';
    }

	return (
        <li
            className={
                'team-list__item team-list__item--player ' +
                playerIsMaster() +
                playerIsCurrentPlayer() +
                playerIsReady()
            }
        >
            {props.player.name}
        </li>
	);
}

export default Player;