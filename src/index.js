import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './stylesheets/main.css';
import App from './components/App';

const container = document.getElementById('react-app');

ReactDOM.render(React.createElement(App), container);

if (module.hot) {
    module.hot.accept('./components/App', function() {
        ReactDOM.render(React.createElement(App), container);
    });
}
