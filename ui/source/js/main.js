import React from 'react';
import {render} from 'react-dom';
import Entry from './components/entry.js';
import Lobby from './components/lobby.js';
import Game from './components/game.js';

const rootEl = document.getElementById('app');

render(
	<Entry />,
	rootEl
);