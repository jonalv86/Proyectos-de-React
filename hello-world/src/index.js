//Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Routes
//import App from './components/App';
//import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './routes';

// Assets
import './index.css';

render(
	//<App />,
	<Router>
		<AppRoutes />
	</Router>,
	document.getElementById('root')
);
//registerServiceWorker();
