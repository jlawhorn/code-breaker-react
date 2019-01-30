import React from 'react';

function Player(props) {
	return (
        <li
            className={'team-list__item team-list__item--player ' +
            (props.player.isMaster ? 'team-list__item--master' : '')}
        >
            {props.player.name}
        </li>
	);
}

export default Player;