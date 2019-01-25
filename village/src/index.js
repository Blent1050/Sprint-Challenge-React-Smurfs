import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter, BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './App.jsx';

const AppWithRouter = withRouter(App);

ReactDOM.render(
    <Router>
        <AppWithRouter/>
    </Router>
, document.getElementById('root'));
