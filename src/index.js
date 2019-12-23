import React from 'react';
import { Provider } from 'react-redux';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import store from './redux/store';
import App from './components/App/App';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));


