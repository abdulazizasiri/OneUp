/*var React = require('react');
var ReactDOM = require('react-dom');*/

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import OneUpApp from './components/OneUpApp';


render((
	<BrowserRouter>
		<OneUpApp />
	</BrowserRouter>
), document.getElementById('app'));
