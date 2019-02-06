import React from 'react';
import {render} from 'react-dom';
import Controller from './components/controller.js';

const rootEl = document.getElementById('app');

render(
	<Controller />,
	rootEl
);