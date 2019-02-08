import React from 'react';
import {render} from 'react-dom';
import App from './components/app.js';

const rootEl = document.getElementById('app');

render(
	<App />,
	rootEl
);