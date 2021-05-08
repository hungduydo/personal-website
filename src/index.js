import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from 'history';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { App } from './app';
import './index.css';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
const renderContainer = Component => {
    const root = document.getElementById("root");
    const history = createBrowserHistory();

    const Application = (

        <Router history={history}>
            <Component />
        </Router>

    );

    // render component
    render(Application, root);
};

renderContainer(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
