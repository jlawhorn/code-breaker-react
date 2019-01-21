import React from 'react';
import {render} from 'react-dom';
import Game from './components/game.js';

const rootEl = document.getElementById('app');

render(
	<Game />,
	rootEl
);